
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}
function toggleCompiler() {
  const panel = document.getElementById("compilerPanel");
  const isOpen = panel.classList.toggle("open");
  panel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) document.getElementById("codeEditor").focus();
}
function formatOutput(value) {
  if (typeof value === "string") return value;
  if (typeof value === "undefined") return "undefined";
  if (typeof value === "function") return value.toString();
  if (typeof value === "symbol") return value.toString();
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
}
function executeJavaScript(code, environment) {
  const lines = [];
  const sandboxConsole = {
    log(...values) {
      lines.push(values.map(formatOutput).join(" "));
    },
    warn(...values) {
      lines.push("Warning: " + values.map(formatOutput).join(" "));
    },
    error(...values) {
      lines.push("Error: " + values.map(formatOutput).join(" "));
    },
  };

  try {
    if (environment && Object.prototype.hasOwnProperty.call(environment, "document")) {
      const runCode = new Function("console", "document", code);
      runCode(sandboxConsole, environment.document);
    } else {
      const runCode = new Function("console", code);
      runCode(sandboxConsole);
    }
    return {
      text: lines.length ? lines.join("\n") : "Code successfully run hua.",
      color: "#86efac",
      ok: true,
    };
  } catch (error) {
    return {
      text: `${error.name}: ${error.message}`,
      color: "#fca5a5",
      ok: false,
    };
  }
}
function runJavaScript() {
  const output = document.getElementById("codeOutput");
  output.textContent = "Running...";
  output.style.color = "#fde68a";

  const result = executeJavaScript(document.getElementById("codeEditor").value);
  output.textContent = result.text;
  output.style.color = result.color;
  output.scrollIntoView({ block: "nearest", behavior: "smooth" });
}
function clearOutput() {
  const output = document.getElementById("codeOutput");
  output.textContent = "Output here dikhega...";
  output.style.color = "#86efac";
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const panel = document.getElementById("compilerPanel");
    if (panel.classList.contains("open")) toggleCompiler();
  }
  if (
    event.ctrlKey &&
    event.key === "Enter" &&
    document.getElementById("compilerPanel").classList.contains("open")
  ) {
    event.preventDefault();
    runJavaScript();
  }
});
document.querySelectorAll("aside a").forEach((a) =>
  a.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(a.hash);
    if (!target) return;

    document
      .querySelectorAll("aside a")
      .forEach((x) => x.classList.remove("active"));
    a.classList.add("active");

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 76;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

    window.history.replaceState(null, "", a.hash);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });

    if (innerWidth <= 850)
      document.getElementById("sidebar").classList.remove("open");
  }),
);
let scrollSpyFrame = null;
let activeSidebarHash = null;

function updateActiveSidebarLink() {
  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 76;
  const marker = headerHeight + 40;
  const links = Array.from(document.querySelectorAll("aside a[href^='#']"));

  let activeLink = null;
  let closestDistance = Infinity;

  links.forEach((link) => {
    const target = document.querySelector(link.hash);
    if (!target) return;

    const distance = Math.abs(target.getBoundingClientRect().top - marker);
    if (
      target.getBoundingClientRect().top <= marker &&
      distance < closestDistance
    ) {
      closestDistance = distance;
      activeLink = link;
    }
  });

  if (!activeLink) {
    const firstVisible = links.find((link) => {
      const target = document.querySelector(link.hash);
      return target && target.getBoundingClientRect().top >= 0;
    });
    activeLink = firstVisible ?? links[0];
  }

  if (!activeLink) return;

  document.querySelectorAll("aside a").forEach((link) => {
    link.classList.toggle("active", link === activeLink);
  });

  if (activeSidebarHash !== activeLink.hash) {
    activeSidebarHash = activeLink.hash;
    activeLink.scrollIntoView({ block: "nearest" });
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollSpyFrame) cancelAnimationFrame(scrollSpyFrame);
    scrollSpyFrame = requestAnimationFrame(updateActiveSidebarLink);
  },
  { passive: true },
);
window.addEventListener("resize", updateActiveSidebarLink);
updateActiveSidebarLink();

function animateVariable() {
  const el = document.getElementById("visualText");
  el.innerHTML = "";
  const steps = [
    "Declaration: let age; — binding declare hui",
    "Initialization: age = 24; — value assign hui",
    "Updation: age = 25; — value update hui",
  ];
  steps.forEach((s, i) =>
    setTimeout(() => {
      const box = document.createElement("div");
      box.className = "box";
      box.textContent = s;
      el.appendChild(box);
    }, i * 850),
  );
}
function fallbackCopyText(text) {
  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = text;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.appendChild(temporaryInput);
  temporaryInput.select();

  const copied = document.execCommand("copy");
  temporaryInput.remove();
  return copied;
}
async function copyExampleCode(pre, button) {
  const code = pre.textContent;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else if (!fallbackCopyText(code)) {
      throw new Error("Copy command was not successful");
    }

    button.textContent = "Copied!";
    button.classList.add("copied");
  } catch (error) {
    button.textContent = "Copy failed";
    button.classList.add("copy-failed");
    console.error("Could not copy example code:", error);
  }

  window.setTimeout(() => {
    button.textContent = "Copy";
    button.classList.remove("copied", "copy-failed");
  }, 1800);
}
function runExampleCode(pre, output) {
  let code = pre.textContent.trim();
  const scriptTag = code.match(/^<script(?:\s[^>]*)?>([\s\S]*?)<\/script>$/i);
  if (scriptTag) code = scriptTag[1];

  const result = executeJavaScript(code);
  output.textContent = result.text;
  output.style.color = result.color;
  output.hidden = false;
}
document.querySelectorAll("main pre").forEach((pre) => {
  const wrapper = document.createElement("div");
  wrapper.className = "example-code";
  pre.before(wrapper);
  wrapper.appendChild(pre);

  const actions = document.createElement("div");
  actions.className = "example-actions";
  let output;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-code-button";
  button.textContent = "Copy";
  button.setAttribute("aria-label", "Copy example code");
  button.addEventListener("click", () => copyExampleCode(pre, button));
  actions.appendChild(button);

  if (pre.dataset.language === "javascript") {
    const runButton = document.createElement("button");
    runButton.type = "button";
    runButton.className = "run-example-button";
    runButton.textContent = "▶ Run";
    runButton.setAttribute("aria-label", "Run JavaScript example");
    runButton.addEventListener("click", () => runExampleCode(pre, output));
    actions.appendChild(runButton);

    output = document.createElement("pre");
    output.className = "example-output";
    output.setAttribute("aria-live", "polite");
    output.hidden = true;
    wrapper.appendChild(output);
  }

  wrapper.appendChild(actions);
});
