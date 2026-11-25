# WebDevelopment

A hands-on frontend learning repository covering HTML, CSS, Tailwind CSS, JavaScript, and Git/GitHub. The project contains topic-based examples, exercises, and static multi-page projects.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=323330)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Repository Structure

```text
WebDevelopment/
├── Frontend/
│   ├── HTML/                 HTML topics, tasks, media, and projects
│   ├── CSS/                  CSS topics and a complete e-commerce layout
│   ├── Tailwind_CSS/         Tailwind CDN and CLI examples
│   └── Git/                  Git and GitHub learning guide
├── .gitignore
└── README.md
```

## What You Will Find

### HTML

The [HTML section](./Frontend/HTML/) includes the following practice areas:

- Basic document structure and HTML elements
- Anchor, heading, paragraph, list, form, table, and semantic tags
- Text formatting and HTML entities
- Images, audio, video, figures, and embedded content
- Standalone HTML exercises
- Static HTML e-commerce pages

**Notable HTML entry points:**

- [Basic example](./Frontend/HTML/TOPIC/Basic/basic.html)
- [HTML portfolio](./Frontend/HTML/TOPIC/TAG/Portfolio/sakirPortfolio.html)
- [HTML project home](./Frontend/HTML/PROJECT/E-Com.html)
- [HTML table practice](./Frontend/HTML/TASK/Table/AdvCrazyHw.html)

### CSS

The [CSS section](./Frontend/CSS/) provides examples for:

- CSS types, selectors, combinators, and colors
- Units, fonts, backgrounds, and the box model
- Display, positioning, Flexbox, and Grid
- Responsive layouts
- Transitions, transforms, and animations
- Multi-page e-commerce project styling

**Notable CSS entry points:**

- [CSS types](./Frontend/CSS/TypesOfCss/index.html)
- [Flexbox](./Frontend/CSS/Flex/flex.html)
- [Grid](./Frontend/CSS/Grid/grid.html)
- [Responsive design](./Frontend/CSS/Responsiveness/responsive.html)
- [CSS project home](./Frontend/CSS/PROJECT/E-Com.html)

### Tailwind CSS

The [Tailwind CSS section](./Frontend/Tailwind_CSS/) contains examples using both the CDN and CLI approaches.

| Example | Location |
| --- | --- |
| Tailwind CDN | `Frontend/Tailwind_CSS/Day1/CDN/talwindUsingCDN.html` |
| Tailwind CLI | `Frontend/Tailwind_CSS/Day1/CLI/tailwindUsingCLI.html` |
| Tailwind Day 2 project | `Frontend/Tailwind_CSS/Day2/Project/index.html` |

Both CLI package folders use Tailwind CSS 4 and include `build` and `watch` npm scripts.

### Git and JavaScript

The [Git guide](./Frontend/Git/index.html) is an interactive HTML page covering installation, terminal navigation, repositories, staging, commits, history, and Git Graph usage.

The guide also uses:

- [Frontend/Git/style.css](./Frontend/Git/style.css) for presentation
- [Frontend/Git/main.js](./Frontend/Git/main.js) for page behavior

## Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- Git
- Node.js and npm for the Tailwind CLI examples

### Run HTML and CSS Examples

Open any `.html` file directly in a browser. For a better development experience, use the VS Code **Live Server** extension.

Recommended starting pages:

```text
Frontend/HTML/PROJECT/E-Com.html
Frontend/CSS/PROJECT/E-Com.html
Frontend/Tailwind_CSS/Day1/CDN/talwindUsingCDN.html
Frontend/Git/index.html
```

### Run a Tailwind CLI Example

There are separate package setups in the Day 1 CLI and Day 2 project folders.

```powershell
cd Frontend\Tailwind_CSS\Day1\CLI
npm install
npm run build
```

For automatic CSS rebuilds:

```powershell
npm run watch
```

Repeat the same steps from `Frontend\Tailwind_CSS\Day2\Project` for the Day 2 project.

## Projects

### HTML E-Commerce Project

The [HTML project](./Frontend/HTML/PROJECT/E-Com.html) contains linked home, product, product details, contact, privacy policy, and terms pages.

### CSS E-Commerce Project

The [CSS project](./Frontend/CSS/PROJECT/E-Com.html) expands the e-commerce concept with a shared stylesheet and local product images.

## Assets and Ignore Rules

The repository includes local images and audio used by the examples. The root `.gitignore` excludes:

- Frontend HTML video files
- `node_modules/` directories
- Generated Tailwind `output.css` files

## Learning Topics Covered

- [x] HTML fundamentals and semantic markup
- [x] HTML forms, tables, lists, media, and tags
- [x] CSS box model, positioning, Flexbox, and Grid
- [x] Responsive design and animations
- [x] Static multi-page frontend projects
- [x] Tailwind CSS CDN and CLI
- [x] Git installation and basic workflow
- [x] JavaScript used for page interactions

## Contributing

Suggestions and improvements are welcome:

1. Fork the repository.
2. Create a focused branch.
3. Make your changes and test the related HTML page.
4. Open a pull request with a short description.

## License

No license is currently specified for this repository. All rights remain with the repository owner unless a license is added.

---

Created by [Md Sakir](https://github.com/sakirmd13).
