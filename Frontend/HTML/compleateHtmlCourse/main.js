const editorTabs = document.querySelectorAll(".editor-tabs button");
const editorPanels = document.querySelectorAll(".editor-panel");
const previewFrame = document.getElementById("preview-frame");
const previewLabel = document.getElementById("preview-label");
const closePreviewButton = document.getElementById("close-preview");

function selectEditor(tabName) {
  editorTabs.forEach((tab) => {
    const selected = tab.dataset.editor === tabName;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  editorPanels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tabName;
  });
}

editorTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectEditor(tab.dataset.editor));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + step + editorTabs.length) % editorTabs.length;
    editorTabs[nextIndex].focus();
    selectEditor(editorTabs[nextIndex].dataset.editor);
  });
});

function createPreviewDocument(html, css, js) {
  const data = JSON.stringify({ html, css, js }).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style id="user-styles"></style>
</head>
<body>
  <main id="user-content"></main>
  <pre id="console-output" aria-live="polite"></pre>
  <script type="application/json" id="playground-data">${data}<\/script>
  <script>
    const data = JSON.parse(document.getElementById("playground-data").textContent);
    document.getElementById("user-styles").textContent = data.css;
    document.getElementById("user-content").innerHTML = data.html;

    const output = document.getElementById("console-output");
    const messages = [];
    const showOutput = () => {
      output.textContent = messages.join("\\n");
    };
    const format = (value) => {
      if (typeof value === "string") return value;
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    };
    const previewConsole = {
      log(...values) {
        messages.push(values.map(format).join(" "));
        showOutput();
      },
      warn(...values) {
        messages.push("Warning: " + values.map(format).join(" "));
        showOutput();
      },
      error(...values) {
        messages.push("Error: " + values.map(format).join(" "));
        showOutput();
      }
    };

    try {
      new Function("console", data.js)(previewConsole);
    } catch (error) {
      messages.push(error.name + ": " + error.message);
      showOutput();
    }
  <\/script>
</body>
</html>`;
}

document.getElementById("run-preview").addEventListener("click", () => {
  const html = document.getElementById("editor-html").value;
  const css = document.getElementById("editor-css").value;
  const js = document.getElementById("editor-js").value;
  previewFrame.srcdoc = createPreviewDocument(html, css, js);
  previewFrame.hidden = false;
  previewLabel.hidden = false;
  closePreviewButton.hidden = false;
});

function closePlaygroundPreview() {
  previewFrame.srcdoc = "";
  previewFrame.hidden = true;
  previewLabel.hidden = true;
  closePreviewButton.hidden = true;
}

closePreviewButton.addEventListener("click", closePlaygroundPreview);

document.getElementById("reset-playground").addEventListener("click", () => {
  document.getElementById("editor-html").value =
    '<h1 class="greeting">Hello, HTML!</h1>\n<p>Is heading ko CSS aur JavaScript se style/update karo.</p>\n<button id="hello-button">Click me</button>';
  document.getElementById("editor-css").value =
    "body { font-family: system-ui, sans-serif; padding: 1rem; }\n.greeting { color: #2857d9; }";
  document.getElementById("editor-js").value =
    'document.getElementById("hello-button").addEventListener("click", () => {\n  console.log("Button click hua!");\n});';
  selectEditor("html");
  closePlaygroundPreview();
});

function copyTextFallback(text) {
  const temporary = document.createElement("textarea");
  temporary.value = text;
  temporary.setAttribute("readonly", "");
  temporary.style.position = "fixed";
  temporary.style.opacity = "0";
  document.body.appendChild(temporary);
  temporary.select();
  const copied = document.execCommand("copy");
  temporary.remove();
  return copied;
}

document.querySelectorAll(".code-example pre").forEach((codeBlock) => {
  const actions = document.createElement("div");
  actions.className = "example-actions";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-example";
  button.textContent = "Copy";
  button.setAttribute("aria-label", "Example code copy karein");
  button.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(codeBlock.textContent);
      } else if (!copyTextFallback(codeBlock.textContent)) {
        throw new Error("Clipboard copy command fail hua.");
      }
      button.textContent = "Copied!";
      button.classList.add("copied");
    } catch (error) {
      button.textContent = "Copy nahi hua";
      button.classList.add("failed");
      console.error("Example copy failed:", error);
    }

    window.setTimeout(() => {
      button.textContent = "Copy";
      button.classList.remove("copied", "failed");
    }, 1600);
  });
  actions.appendChild(button);

  let previewShell;
  let previewFrame;
  const previewButton = document.createElement("button");
  previewButton.type = "button";
  previewButton.className = "preview-example";
  previewButton.textContent = "▶ Run Preview";
  previewButton.setAttribute("aria-label", "Example ka live preview chalayein");
  previewButton.addEventListener("click", () => {
    if (!previewShell) {
      previewShell = document.createElement("div");
      previewShell.className = "example-preview-shell";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "close-example-preview";
      closeButton.textContent = "Close Preview";
      closeButton.setAttribute("aria-label", "Is example ka preview band karein");
      closeButton.addEventListener("click", () => {
        previewFrame.srcdoc = "";
        previewShell.remove();
        previewShell = undefined;
        previewFrame = undefined;
        previewButton.setAttribute("aria-expanded", "false");
        previewButton.focus();
      });

      previewFrame = document.createElement("iframe");
      previewFrame.className = "example-preview";
      previewFrame.title = "HTML example ka live preview";
      previewFrame.setAttribute("sandbox", "");
      previewFrame.setAttribute("referrerpolicy", "no-referrer");
      const requestedHeight = Number(codeBlock.parentElement.dataset.previewHeight);
      if (Number.isFinite(requestedHeight) && requestedHeight > 0) {
        previewFrame.style.height = `${requestedHeight}px`;
      }

      previewShell.append(closeButton, previewFrame);
      codeBlock.parentElement.appendChild(previewShell);
    }

    previewFrame.srcdoc = codeBlock.textContent;
    previewButton.setAttribute("aria-expanded", "true");
  });
  previewButton.setAttribute("aria-expanded", "false");
  actions.appendChild(previewButton);
  codeBlock.parentElement.appendChild(actions);
});

const menuToggle = document.getElementById("menu-toggle");
const courseSidebar = document.getElementById("course-sidebar");

menuToggle.addEventListener("click", () => {
  const isOpen = courseSidebar.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

courseSidebar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    courseSidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    courseSidebar.querySelectorAll("a").forEach((item) => {
      item.classList.toggle("active", item === link);
    });
  });
});

selectEditor("html");