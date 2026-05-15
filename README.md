# iyashicoded ✦ michelle armstrong

**Full-stack software engineer** building thoughtful digital experiences with clean code and intentional design.

> good engineering and beautiful design aren't a trade-off. for me, they're the standard.

<img width="1349" height="796" alt="image" src="https://github.com/user-attachments/assets/d15e8a15-c74d-44bd-ba8a-141bfb57122c" />

---

## ✦ live site

🔗 [https://portfolio-ten-weld-87.vercel.app](https://portfolio-ten-weld-87.vercel.app)
---

## ✦ about

A fully hand-coded personal portfolio site built with vanilla HTML, CSS, and JavaScript, no frameworks, no build tools, no dependencies. Every section, layout, animation, and interaction written from scratch with care.

The design system is built around a warm pastel palette, editorial serif typography, and a grainy textured background that gives the site a soft, intentional feel distinct from typical developer portfolios.

---

## ✦ sections

| Section | Color | Description |
|---|---|---|
| Hero | `#faf3ea` cream | Introduction + navigation cards |
| About | `#ffaad3` pink | Background, personality + fun facts |
| How I Work | `#f7c79a` orange | Engineering philosophy |
| Projects | `#ffe8a2` yellow | Carousel with modal case studies |
| Services | `#bdd98f` green | What I offer + how I can help |
| Work With Me | `#86daec` blue | Who I work best with |
| Contact | `#c1a5f0` purple | Form + links |

---

## ✦ features

- 🎨 **7 colorful sections** each with a unique pastel background and grainy texture overlay
- 🃏 **Project carousel** — swipeable, 3-up card layout with click-to-expand modals
- 📋 **Project modals** — image, description, tech stack tags, live + code links
- 🪟 **Floating glass header** — pill-shaped, deepens on scroll, active nav highlight
- ✨ **Scroll-reveal animations** — cards fade up as they enter the viewport
- 📬 **Working contact form** — connected to Formspree with async feedback
- ♿ **Accessible** — focus-visible styles, semantic HTML, alt text, keyboard navigation
- 📱 **Fully responsive** — breakpoints at 1024px, 768px, 640px
- 🔍 **SEO ready** — meta description, Open Graph tags, Twitter card, favicon

---

## ✦ tech stack

```
HTML5      — semantic, accessible markup
CSS3       — custom properties, grid, flexbox, animations, @keyframes
JavaScript — vanilla ES6+, IntersectionObserver, fetch API
Formspree  — contact form backend
Google Fonts — Fraunces · Outfit · Inter
```

---

## ✦ typography

| Role | Font | Usage |
|---|---|---|
| `Fraunces` | Serif display | All `h1` headings, logo, buttons |
| `Outfit` | Sans-serif | `h2`, `h3`, subheaders, nav, tags |
| `Inter` | Sans-serif | Body text, paragraphs, form labels |

---

## ✦ color palette

```css
--cream:  #faf3ea   /* hero background */
--pink:   #ffaad3   /* about + primary accent */
--orange: #f7c79a   /* how i work */
--yellow: #ffe8a2   /* projects */
--green:  #bdd98f   /* services */
--blue:   #86daec   /* work with me */
--purple: #c1a5f0   /* contact + buttons */
```

---

## ✦ project structure

```
portfolio/
├── index.html          # full site — single page
├── style.css           # all styles
├── resume.pdf          # resume (add your own)
├── og-image.png        # social share image (add your own)
└── images/
    ├── hoshii.jpg
    ├── mochiboard.jpg
    ├── cafecompass.jpg
    ├── softshelf.jpg
    ├── petalfm.jpg
    └── lantern.jpg
```

---

## ✦ running locally

No build step needed. Just open the file:

```bash
# clone the repo
git clone https://github.com/linmicarm/iyashicoded.git
cd iyashicoded

# open in browser (mac)
open index.html

# open in browser (windows)
start index.html
```

Or use the VS Code **Live Server** extension for hot reload during development.

---

## ✦ deployment

Deployed via **Netlify**. Any push to `main` triggers an automatic redeploy.

To deploy your own copy:
1. Fork this repo
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your fork → deploy

Or drag-and-drop the project folder at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## ✦ contact form setup

The contact form uses [Formspree](https://formspree.io). To use your own:
1. Create a free account at formspree.io
2. Create a new form and copy your form ID
3. In `index.html`, update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## ✦ projects featured

| Project | Description |
|---|---|
| **hoshii** | cozy anime + manga tracking app with emotional journaling |
| **mochiboard** | soft productivity dashboard for creatives |
| **café compass** | café discovery app for finding cozy workspaces |
| **softshelf** | digital bookshelf + reading journal |
| **petalfm** | lo-fi + ambient music discovery app |
| **lantern** | multilingual community platform for niche hobby groups |

---

## ✦ license

This project is open source under the [MIT License](LICENSE).

Feel free to use it as inspiration — but please make it your own. ✦

---

<p align="center">built with care and intention · <a href="https://iyashicoded.com">iyashicoded.com</a></p>
