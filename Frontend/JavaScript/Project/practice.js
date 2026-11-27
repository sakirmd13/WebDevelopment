const practiceChecks = {
  "first-program": [
    {
      type: "code",
      expectedOutput: "Subtotal: 36",
      sampleCode:
        'const price = 12;\nconst quantity = 3;\nconsole.log("Subtotal:", price * quantity);',
    },
    {
      type: "text",
      answer:
        "ASI may insert semicolons automatically, but line breaks can be interpreted unexpectedly; explicit semicolons reduce ambiguity.",
    },
  ],
  comments: [
    {
      type: "code",
      expectedOutput: "6",
      sampleCode:
        "// Adds inputs a and b, then returns their sum.\nfunction add(a, b) { return a + b; }\nconsole.log(add(2, 4));",
    },
    {
      type: "text",
      answer:
        "A block comment ends at the first closing */ marker, so nested block comments close earlier than expected.",
    },
  ],
  variables: [
    {
      type: "code",
      expectedOutput: "Subtotal: 36",
      sampleCode:
        'const price = 12;\nconst quantity = 3;\nconsole.log("Subtotal:", price * quantity);',
    },
    {
      type: "code",
      expectedOutput: "let: 2\nconst: 1",
      sampleCode:
        'let changeable = 1;\nchangeable++;\nconst fixed = 1;\nconsole.log("let:", changeable);\nconsole.log("const:", fixed);',
    },
  ],
  keywords: [
    {
      type: "code",
      expectedOutput: "block var\nReferenceError\nReferenceError",
      sampleCode:
        'if (true) { var outer = "block var"; let local = "let"; const fixed = "const"; }\nconsole.log(outer);\ntry { console.log(local); } catch (error) { console.log(error.name); }\ntry { console.log(fixed); } catch (error) { console.log(error.name); }',
    },
    {
      type: "code",
      expectedOutput: "ReferenceError\nTypeError",
      sampleCode:
        'try { { console.log(value); let value = 1; } } catch (error) { console.log(error.name); }\ntry { const fixed = 1; fixed = 2; } catch (error) { console.log(error.name); }',
    },
  ],
  naming: [
    {
      type: "text",
      answer:
        "firstName: user's first name; itemCount: number of items; totalPrice: total cost; isActive: active status; maxAttempts: attempt limit.",
    },
    {
      type: "text",
      answer:
        "2name becomes name2; user-name becomes userName; class becomes className.",
    },
  ],
  conventions: [
    {
      type: "text",
      answer:
        "camelCase: firstName; snake_case: first_name; PascalCase: FirstName; SCREAMING_SNAKE_CASE: FIRST_NAME.",
    },
    {
      type: "text",
      answer:
        "Variables and functions use camelCase; classes use PascalCase; constants use SCREAMING_SNAKE_CASE.",
    },
  ],
  datatypes: [
    {
      type: "code",
      expectedOutput:
        "number\nstring\nboolean\nundefined\nobject\nbigint\nsymbol",
      sampleCode:
        'console.log(typeof 25);\nconsole.log(typeof "text");\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof 10n);\nconsole.log(typeof Symbol("id"));',
    },
    {
      type: "code",
      expectedOutput: "object\ntrue\nobject\nfunction",
      sampleCode:
        'console.log(typeof []);\nconsole.log(Array.isArray([]));\nconsole.log(typeof null);\nconsole.log(typeof function () {});',
    },
  ],
  conversion: [
    {
      type: "code",
      expectedOutput: "25\n25\ntrue\nfalse",
      sampleCode:
        'console.log(Number("25"));\nconsole.log(String(25));\nconsole.log(Boolean(1));\nconsole.log(Boolean(0));',
    },
    {
      type: "code",
      expectedOutput: "52\n3\nfalse\n0",
      sampleCode:
        'console.log("5" + 2);\nconsole.log("5" - 2);\nconsole.log(Boolean(""));\nconsole.log(Number(null));',
    },
  ],
  template: [
    {
      type: "code",
      expectedOutput: "Hello, Asha Patel! Age: 24",
      sampleCode:
        'const first = "Asha";\nconst last = "Patel";\nconst age = 24;\nconsole.log(`Hello, ${first} ${last}! Age: ${age}`);',
    },
    {
      type: "code",
      expectedOutput: "Receipt\nItem: Book\nTotal: 30",
      sampleCode:
        'const item = "Book";\nconst price = 10;\nconst quantity = 3;\nconsole.log(`Receipt\\nItem: ${item}\\nTotal: ${price * quantity}`);',
    },
  ],
  arithmetic: [
    {
      type: "code",
      expectedOutput:
        "Addition: 13\nSubtraction: 7\nMultiplication: 30\nDivision: 3.3333333333333335\nRemainder: 1\nExponent: 1000",
      sampleCode:
        'const a = 10, b = 3;\nconsole.log("Addition:", a + b);\nconsole.log("Subtraction:", a - b);\nconsole.log("Multiplication:", a * b);\nconsole.log("Division:", a / b);\nconsole.log("Remainder:", a % b);\nconsole.log("Exponent:", a ** b);',
    },
    {
      type: "code",
      expectedOutput: "Even: true\nQuotient: 3\nRemainder: 2",
      sampleCode:
        'const number = 8, dividend = 17, divisor = 5;\nconsole.log("Even:", number % 2 === 0);\nconsole.log("Quotient:", Math.floor(dividend / divisor));\nconsole.log("Remainder:", dividend % divisor);',
    },
  ],
  operators: [
    {
      type: "code",
      expectedOutput: "Eligible: true",
      sampleCode:
        'const age = 25, isMember = true;\nconsole.log("Eligible:", age >= 18 && isMember);',
    },
    {
      type: "code",
      expectedOutput: "true true true true",
      sampleCode:
        'const a = 0 || 10;\nconst b = 0 ?? 10;\nconst c = "" || "x";\nconst d = "" ?? "x";\nconsole.log(a === 10, b === 0, c === "x", d === "");',
    },
    {
      type: "code",
      expectedOutput: "5\n6\n6\n6",
      sampleCode:
        'let postInc = 5;\nconsole.log(postInc++);\nconsole.log(postInc);\nlet preInc = 5;\nconsole.log(++preInc);\nconsole.log(preInc);',
    },
    {
      type: "code",
      expectedOutput: "5\n4\n4\n4",
      sampleCode:
        'let postDec = 5;\nconsole.log(postDec--);\nconsole.log(postDec);\nlet preDec = 5;\nconsole.log(--preDec);\nconsole.log(preDec);',
    },
    {
      type: "code",
      expectedOutput:
        "+=: 13\n-=: 8\n*=: 16\n/=: 4\n%=: 1\n**=: 1",
      sampleCode:
        'let score = 10;\nscore += 3;\nconsole.log("+=:", score);\nscore -= 5;\nconsole.log("-=:", score);\nscore *= 2;\nconsole.log("*=:", score);\nscore /= 4;\nconsole.log("/=:", score);\nscore %= 3;\nconsole.log("%=:", score);\nscore **= 3;\nconsole.log("**=:", score);',
    },
  ],
  conditions: [
    {
      type: "code",
      expectedOutput: "B",
      sampleCode:
        'const marks = 85;\nif (marks >= 90) console.log("A");\nelse if (marks >= 75) console.log("B");\nelse if (marks >= 60) console.log("C");\nelse console.log("Fail");',
    },
    {
      type: "code",
      expectedOutput: "Tea\nUnknown",
      sampleCode:
        'function showMenu(option) {\n  switch (option) {\n    case "tea": console.log("Tea"); break;\n    case "coffee": console.log("Coffee"); break;\n    default: console.log("Unknown");\n  }\n}\nshowMenu("tea");\nshowMenu("unknown");',
    },
  ],
  loops: [
    {
      type: "code",
      expectedOutput: "3\n6\n9\n12\n18\n21\n24\n27\n30",
      sampleCode:
        'for (let i = 3; i <= 30; i += 3) {\n  if (i === 15) continue;\n  console.log(i);\n}',
    },
    {
      type: "code",
      expectedOutput: "name Sakir\nage 24\nred\ngreen",
      sampleCode:
        'const user = { name: "Sakir", age: 24 };\nfor (const key in user) console.log(key, user[key]);\nfor (const color of ["red", "green"]) console.log(color);',
    },
  ],
  functions: [
    {
      type: "code",
      expectedOutput: "77",
      sampleCode:
        "function toFahrenheit(celsius) { return celsius * 9 / 5 + 32; }\nconsole.log(toFahrenheit(25));",
    },
    {
      type: "code",
      expectedOutput: "1,4,9\nCount: 3",
      sampleCode:
        'const squareAll = (numbers = [1, 2, 3]) => numbers.map(number => number * number);\nconst squares = squareAll();\nconsole.log(squares.join(","));\nconsole.log("Count:", squares.length);',
    },
  ],
  strings: [
    {
      type: "code",
      expectedOutput: "true",
      sampleCode:
        'const input = "  JavaScript Basics  ";\nconst normalized = input.trim().toLowerCase();\nconsole.log(normalized.includes("script"));',
    },
    {
      type: "code",
      expectedOutput: "true",
      sampleCode:
        'const text = "A man a plan a canal Panama";\nconst normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");\nconsole.log(normalized === normalized.split("").reverse().join(""));',
    },
  ],
  arrays: [
    {
      type: "code",
      expectedOutput: "Even doubled: 4,8\nOriginal: 1,2,3,4",
      sampleCode:
        'const numbers = [1, 2, 3, 4];\nconst result = numbers.filter(number => number % 2 === 0).map(number => number * 2);\nconsole.log("Even doubled:", result.join(","));\nconsole.log("Original:", numbers.join(","));',
    },
    {
      type: "code",
      expectedOutput: "Unique: 1,2,3\nTotal: 6",
      sampleCode:
        'const values = [1, 2, 2, 3];\nconst unique = [...new Set(values)];\nconst total = unique.reduce((sum, value) => sum + value, 0);\nconsole.log("Unique:", unique.join(","));\nconsole.log("Total:", total);',
    },
  ],
  objects: [
    {
      type: "code",
      expectedOutput: "Deep Work\nPrice: 500",
      sampleCode:
        'const book = { title: "Deep Work", price: 450 };\nconsole.log(book.title);\nbook.price = 500;\nconsole.log("Price:", book["price"]);',
    },
    {
      type: "code",
      expectedOutput: "Pen,Book",
      sampleCode:
        'const products = [{ title: "Pen" }, { title: "Book" }];\nconst titles = products.map(({ title }) => title);\nconsole.log(titles.join(","));',
    },
  ],
  "error-handling": [
    {
      type: "code",
      expectedOutput: "Invalid input\nHandled\nCleanup",
      sampleCode:
        'try {\n  throw new Error("Invalid input");\n} catch (error) {\n  console.log(error.message);\n  console.log("Handled");\n} finally {\n  console.log("Cleanup");\n}',
    },
    {
      type: "code",
      expectedOutput: "Success path\nCleanup\nError path\nCleanup",
      sampleCode:
        'function run(shouldFail) {\n  try {\n    if (shouldFail) throw new Error("failed");\n    console.log("Success path");\n  } catch (error) {\n    console.log("Error path");\n  } finally {\n    console.log("Cleanup");\n  }\n}\nrun(false);\nrun(true);',
    },
  ],
};

function normalizeTextAnswer(value) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function normalizeCodeOutput(value) {
  return value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

function createPracticeDocument() {
  const element = {
    _textContent: "",
    get textContent() {
      return this._textContent;
    },
    set textContent(value) {
      this._textContent = String(value);
    },
  };
  return {
    querySelector(selector) {
      return selector === "h1" ? element : null;
    },
  };
}

function createPracticeAnswer(question, definition, questionNumber) {
  const answerBox = document.createElement("div");
  answerBox.className = "practice-answer";

  const inputId = `practice-${question.closest("section").id}-${questionNumber}`;
  const input = document.createElement("textarea");
  input.id = inputId;
  input.spellcheck = false;
  input.setAttribute("aria-label", `Answer for practice ${questionNumber}`);

  const label = document.createElement("label");
  label.htmlFor = inputId;
  label.textContent =
    definition.type === "code" ? "JavaScript code" : "Your answer (exact match)";
  answerBox.appendChild(label);

  if (definition.type === "code") {
    input.className = "practice-code-editor";
    input.rows = 7;
    input.placeholder = "// Yahan apna JavaScript code likhein";
  } else {
    input.className = "practice-text-answer";
    input.rows = 3;
    input.placeholder = "Apna answer yahan likhein...";
  }
  answerBox.appendChild(input);

  const help = document.createElement("p");
  help.className = "practice-help";
  help.textContent =
    definition.type === "code"
      ? "Run & check output ko expected result se compare karega. Ctrl + Enter bhi use kar sakte hain."
      : "Exact answer match hota hai; capitalization aur extra whitespace ignore hote hain.";
  answerBox.appendChild(help);

  const actions = document.createElement("div");
  actions.className = "practice-actions";
  const checkButton = document.createElement("button");
  checkButton.type = "button";
  checkButton.textContent =
    definition.type === "code" ? "▶ Run & check" : "Check answer";
  actions.appendChild(checkButton);

  const feedback = document.createElement("span");
  feedback.className = "practice-feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  actions.appendChild(feedback);
  answerBox.appendChild(actions);

  let output;
  if (definition.type === "code") {
    output = document.createElement("pre");
    output.className = "practice-output";
    output.hidden = true;
    output.setAttribute("aria-live", "polite");
    answerBox.appendChild(output);

    checkButton.addEventListener("click", () => {
      const options = definition.useMockDocument
        ? { document: createPracticeDocument() }
        : undefined;
      const result = executeJavaScript(input.value, options);
      output.textContent = result.text;
      output.hidden = false;
      output.classList.toggle("error", !result.ok);

      const expected = normalizeCodeOutput(definition.expectedOutput);
      const actual = normalizeCodeOutput(result.text);
      const correct = result.ok && actual === expected;
      feedback.textContent = correct
        ? "Correct!"
        : result.ok
          ? "Wrong — output expected result se match nahi hua."
          : "Wrong — code mein error aaya.";
      feedback.className = `practice-feedback ${correct ? "correct" : "wrong"}`;
    });

    input.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        checkButton.click();
      }
    });
  } else {
    checkButton.addEventListener("click", () => {
      const correct =
        normalizeTextAnswer(input.value) ===
        normalizeTextAnswer(definition.answer);
      feedback.textContent = correct
        ? "Correct!"
        : "Wrong — sample answer se exact match karein.";
      feedback.className = `practice-feedback ${correct ? "correct" : "wrong"}`;
    });
  }

  const sample = document.createElement("details");
  sample.className = "practice-sample";
  const summary = document.createElement("summary");
  summary.textContent =
    definition.type === "code" ? "Show sample solution" : "Show sample answer";
  sample.appendChild(summary);

  if (definition.type === "code") {
    const sampleCode = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = definition.sampleCode;
    sampleCode.appendChild(code);
    sample.appendChild(sampleCode);
    const expected = document.createElement("p");
    expected.textContent = `Expected output: ${definition.expectedOutput}`;
    sample.appendChild(expected);
  } else {
    const sampleAnswer = document.createElement("p");
    sampleAnswer.textContent = definition.answer;
    sample.appendChild(sampleAnswer);
  }
  answerBox.appendChild(sample);
  question.appendChild(answerBox);
}

function initializePracticeAnswers() {
  document.querySelectorAll(".topic-review").forEach((review) => {
    const section = review.closest("section");
    const practiceHeading = Array.from(review.querySelectorAll("h3")).find(
      (heading) => heading.textContent.trim().startsWith("Practice"),
    );
    if (!practiceHeading) return;

    const definitions = practiceChecks[section.id];
    const practiceList = practiceHeading.nextElementSibling;
    if (!definitions || !practiceList) return;

    Array.from(practiceList.children).forEach((question, index) => {
      const definition = definitions[index];
      if (definition) createPracticeAnswer(question, definition, index + 1);
    });
  });
}

initializePracticeAnswers();
