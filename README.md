# WebDevelopment Learning Repository

**WebDevelopment** ek frontend learning repository hai. Isme HTML, CSS, Git/GitHub, JavaScript aur Tailwind CSS ke topic-wise examples, practice exercises aur complete frontend projects shaamil hain.

Repository: [sakirmd13/WebDevelopment](https://github.com/sakirmd13/WebDevelopment)

## Repository Structure

```text
WebDevelopment/
|-- Frontend/
|   |-- HTML/
|   |-- CSS/
|   |-- Tailwind_CSS/
|   `-- Git/
|-- .gitignore
`-- README.md
```

## HTML

`Frontend/HTML/` me HTML foundations, tags aur static webpages practice ki gayi hai.

### Basic HTML aur Structure

- `HTML/TOPIC/Basic/basic.html`
- `HTML/TOPIC/Basic/index.html`
- `HTML/TOPIC/Element&TAG/element&tage.html`

### HTML Tags

| Topic | Files |
| --- | --- |
| Anchor Tag | `TOPIC/TAG/AncherTag/Ancher.html` |
| Block aur Inline Elements | `TOPIC/TAG/Div&Inline&Block/div.html`, `inline.html` |
| Entities | `TOPIC/TAG/Entities/entite.html` |
| Form Tags | `TOPIC/TAG/FormTag/Form.html` |
| Heading Tags | `TOPIC/TAG/HeadingTag/heading.html` |
| Lists | `DescriptionList`, `OrderList` aur `UnorderList` |
| Paragraph | `TOPIC/TAG/ParagraphTag/para.html` |
| Text Formatting | `TOPIC/TAG/TextFormatting/fromating.html` |
| Semantic Tags | `TOPIC/TAG/SemanticTag/sementic.html` |
| Portfolio | `TOPIC/TAG/Portfolio/sakirPortfolio.html` |

Media examples `HTML/TOPIC/TAG/MediaTag/` me available hain:

- Images: `imageTage.html`, `image/localimage.png`
- Audio: `audioTag.html`, `music/sigmamusicart-no-copyright-music-537751.mp3`
- Video: `videoTag.html`
- Figure: `figureTag.html`
- Iframe: `iframe.html`

### Tables

`HTML/TOPIC/TAG/Table/` aur `HTML/TASK/Table/` me basic aur advanced table examples hain:

- BasicTables
- TableRowColSpan
- AdvTable
- EasyTable
- AdvCrazyHw

### HTML Lists aur Practice Tasks

- `HTML/TASK/List/ListHW.html`
- `HTML/TASK/List/ListHW2.html`

### HTML Project

`HTML/PROJECT/` me e-commerce style multi-page HTML project hai:

- `E-Com.html`
- `products.html`
- `productsdetails.html`
- `contactus.html`
- `privacy-policy.html`
- `terms-conditions.html`
- `images/` - product images

## CSS

`Frontend/CSS/` me CSS selectors se lekar animations, responsive design aur complete layout projects covered hain.

### CSS Topics

| Topic | Main Files |
| --- | --- |
| CSS Types | `TypesOfCss/index.html`, `TypesOfCss/style.css` |
| Colors | `color/color.html`, `color/color.css` |
| Units | `Unit/unit.html`, `Unit/unit.css` |
| Background | `Background/background.html`, `Background/background.css` |
| Box Model | `BoxModel/boxmodel.html`, `BoxModel/boxmodel.css` |
| Display | `Display/display.html`, `Display/display.css` |
| Fonts | `Font/font.html`, `Font/font.css` |
| Position | `Position/position.html`, `Position/position.css` |
| Selector | `Selector/selector.html`, `Selector/style.css` |
| Combinators | `combinator/combinetor.html`, `combinator/combinetor.css` |
| Flexbox | `Flex/flex.html`, `Flex/flex.css` |
| Grid | `Grid/grid.html`, `Grid/grid.css` |
| Responsiveness | `Responsiveness/responsive.html`, `Responsiveness/responsive.css` |
| Transition | `Transition&Transform&Animation/Transition/` |
| Transform | `Transition&Transform&Animation/Transform/` |
| Animation | `Transition&Transform&Animation/Animation/` |

### CSS Project

`CSS/PROJECT/` ek multi-page e-commerce frontend project hai:

- `E-Com.html`
- `products.html`
- `productsdetails.html`
- `contactus.html`
- `privacy-policy.html`
- `terms-conditions.html`
- `Style/main.css`
- `images/` - product 1 se product 4 tak images

## Tailwind CSS

`Frontend/Tailwind_CSS/` me Tailwind CSS ko CDN aur CLI dono approaches ke through practice kiya gaya hai.

### Tailwind CDN - Day 1

- `Tailwind_CSS/Day1/CDN/talwindUsingCDN.html`

Is example me Tailwind CDN ke through utility classes directly HTML me use ki gayi hain.

### Tailwind CLI - Day 1

- `Day1/CLI/tailwindUsingCLI.html`
- `Day1/CLI/apply-css.html`
- `Day1/CLI/input.css`
- `Day1/CLI/output.css`
- `Day1/CLI/src/output.css`
- `Day1/CLI/package.json`

CLI setup ke package scripts:

```bash
npm run build
npm run watch
```

### Tailwind Project - Day 2

- `Tailwind_CSS/Day2/Project/index.html`
- `Tailwind_CSS/Day2/Project/blog.html`
- `Tailwind_CSS/Day2/Project/input.css`
- `Tailwind_CSS/Day2/Project/output.css`
- `Tailwind_CSS/Day2/Project/package.json`

Dependencies:

- `tailwindcss`
- `@tailwindcss/cli`

## Git aur GitHub

`Frontend/Git/` me Git aur GitHub learning guide ek HTML page ke through di gayi hai.

- `index.html` - Installation, terminal commands, Git setup, workflow, commit history aur VS Code Git Graph guide
- `style.css` - guide ki presentation
- `main.js` - page ka JavaScript

Covered topics:

- Git installation aur version check
- Terminal navigation aur basic commands
- `git init`
- `git status`
- `git add`
- `git rm --cached`
- `git commit`
- `git log` aur `git log --oneline`
- `git show`
- VS Code Git Graph extension

## Assets

Repository me practice ke liye local images, audio aur cart icon use kiye gaye hain:

- `CSS/Position/img/cart.png`
- `HTML/TOPIC/TAG/MediaTag/image/localimage.png`
- `HTML/TOPIC/TAG/MediaTag/music/sigmamusicart-no-copyright-music-537751.mp3`
- HTML aur CSS project product images

## Run the Project

HTML aur CSS files ko browser me directly open kiya ja sakta hai. Example:

```text
Frontend/HTML/PROJECT/E-Com.html
Frontend/CSS/PROJECT/E-Com.html
Frontend/Tailwind_CSS/Day1/CDN/talwindUsingCDN.html
```

Tailwind CLI project run karne ke liye relevant folder me jaakar dependencies install karein:

```bash
npm install
npm run build
```

Watch mode:

```bash
npm run watch
```

## Ignore Rules

Root `.gitignore` me:

- Video files ka ignore path
- `node_modules/` dependencies
- Tailwind generated `output.css` files

## Learning Progress

Current repository me ye topics practice aur examples ke form me covered hain:

- HTML fundamentals, tags, forms, tables, media aur semantic markup
- CSS styling, layout, flexbox, grid, positioning aur responsiveness
- CSS transitions, transforms aur animations
- HTML/CSS based e-commerce style projects
- Git aur GitHub basic workflow
- Tailwind CSS CDN aur CLI
- Tailwind project setup aur build scripts
