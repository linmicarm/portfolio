# PERSONAL PORTFOLIO PROJECT
 
Full-stack software engineer building thoughtful digital experiences with clean code and intentional design.
 
> "good engineering and beautiful design aren't a trade-off. for me, they're the standard."

<img width="1349" height="796" alt="image" src="https://github.com/user-attachments/assets/d15e8a15-c74d-44bd-ba8a-141bfb57122c" />

## LIVE SITE
 
https://iyashicoded.vercel.app

## ABOUT
 
A fully hand-coded personal portfolio site built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Every section, layout, animation, and interaction written from scratch with care.
 
The project started in Figma, where a complete hi-fi wireframe was designed first — working out the layout, color system, typography, and component hierarchy before a single line of code was written. The wireframe served as the single source of truth throughout the build, keeping the design intentional and consistent from section to section.
 
The final design system is built around a warm pastel palette, editorial serif typography, and a grainy textured background that gives the site a soft, handcrafted feel distinct from typical developer portfolios.
 
## SECTIONS
 
Hero — #faf3ea cream
Introduction + navigation cards
 
About — #ffaad3 pink
Background, personality + fun facts
 
How I Work — #f7c79a orange
Engineering philosophy
 
Projects — #ffe8a2 yellow
Carousel with modal case studies
 
Services — #bdd98f green
What I offer + how I can help
 
Work With Me — #86daec blue
Who I work best with
 
Contact — #c1a5f0 purple
Form + links
 
## DESIGN PROCESS
 
This site was designed before it was built — a deliberate choice that kept every decision intentional.
 
1. Hi-fi wireframe in Figma — full layout, color palette, typography, and component design across all 7 sections before any code was written.
2. Design system first — colors, spacing tokens, and font pairings defined upfront as CSS custom properties, mirroring the Figma variables.
3. Section by section build — each section coded to match the wireframe, with improvements and refinements made along the way.
4. Iterative polish — copy, spacing, interactions, and accessibility layered in after the structural build was complete.
View the Figma wireframe:
https://www.figma.com/design/tBXeDqaQgX65yOaKjybAnK/Portfolio-Hi-Fi-Wireframe?t=RfJQGBtUeBVIm6wq-0
 
## FEATURES
 
- 7 colorful sections, each with a unique pastel background and grainy texture overlay
- Project carousel — swipeable, 3-up card layout with click-to-expand modals
- Project modals — image, description, tech stack tags, live + code links
- Floating glass header — pill-shaped, deepens on scroll, active nav highlight
- Scroll-reveal animations — cards fade up as they enter the viewport
- Working contact form — connected to Formspree with async feedback
- Accessible — focus-visible styles, semantic HTML, alt text, keyboard navigation
- Fully responsive — breakpoints at 1024px, 768px, 640px
- SEO ready — meta description, Open Graph tags, Twitter card, favicon
## TECH STACK
 
HTML5 — semantic, accessible markup
CSS3 — custom properties, grid, flexbox, animations, @keyframes
JavaScript — vanilla ES6+, IntersectionObserver, fetch API
Formspree — contact form backend
Google Fonts — Fraunces, Outfit, Inter
 
## TYPOGRAPHY
 
Fraunces — Serif display
Usage: All h1 headings, logo, buttons
 
Outfit — Sans-serif
Usage: h2, h3, subheaders, nav, tags
 
Inter — Sans-serif
Usage: Body text, paragraphs, form labels
 
## COLOR PALETTE
 
Cream — #faf3ea
Usage: Hero background
 
Pink — #ffaad3
Usage: About + primary accent
 
Orange — #f7c79a
Usage: How I Work
 
Yellow — #ffe8a2
Usage: Projects
 
Green — #bdd98f
Usage: Services
 
Blue — #86daec
Usage: Work With Me
 
Purple — #c1a5f0
Usage: Contact + buttons
 
## PROJECT STRUCTURE
 
```
portfolio/
├── index.html    — full site — single page
├── style.css     — all styles
├── script.js     — all interactions (carousel, modals, scroll reveals, form)
├── resume.pdf    — resume (add your own)
├── og-image.png  — social share image (add your own)
└── images/
    ├── hoshii.jpg
    ├── mochiboard.jpg
    ├── cafecompass.jpg
    ├── softshelf.jpg
    ├── petalfm.jpg
    └── lantern.jpg
```
 
## RUNNING LOCALLY
 
No build step needed. Just open the file.
 
Clone the repo:
```
git clone https://github.com/linmicarm/iyashicoded.git
```
 
Navigate into the project:
```
cd iyashicoded
```
 
Open in browser on Mac:
```
open index.html
```
 
Open in browser on Windows:
```
start index.html
```
 
Or use the VS Code Live Server extension for hot reload during development.
 
## DEPLOYMENT
 
Deployed via Vercel. Any push to `main` triggers an automatic redeploy.
 
To deploy your own copy:
 
1. Fork this repo.
2. Go to https://vercel.com and select "Add New… → Project."
3. Import your fork and deploy — Vercel detects it as a static site automatically, no build settings needed.
## CONTACT FORM SETUP
 
The contact form uses Formspree.
 
To use your own:
 
1. Create a free account at https://formspree.io
2. Create a new form and copy your form ID.
3. In index.html, update the form action with your Formspree form ID.
## PROJECTS FEATURED
 
Hoshii
<br>Cozy anime + manga tracking app with emotional journaling</br>
 
Mochiboard
<br>Soft productivity dashboard for creatives</br>
 
Café Compass
<br>Café discovery app for finding cozy workspaces</br>
 
Softshelf
<br>Digital bookshelf + reading journal</br>
 
PetalFM
<br>Lo-fi + ambient music discovery app</br>
 
Lantern
<br>Multilingual community platform for niche hobby groups</br>
