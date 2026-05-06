# Eleventy Starter

A clean, minimal starter template for building static websites with Eleventy and Tailwind CSS v4.

## Stack

- **[Eleventy 3](https://www.11ty.dev/)** — simple and flexible static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first CSS framework
- **[Prettier](https://prettier.io/)** — formats the HTML output for clean, readable code
- **Nunjucks** — templating engine (used inside `.html` files)

## Features

- All template files use `.html` extension — no `.njk` files
- HTML partials via `{% include %}` — reusable header, footer, and any other components
- Clean, formatted HTML output in `dist/`
- Relative asset paths — open files directly from `dist/` in your browser without a server
- Tailwind CSS compiled in parallel with Eleventy for fast hot reload
- Accessible from other devices on the same network via local IP

## Project Structure

```
src/
├── _includes/
│   ├── layouts/
│   │   └── base.html       # Base layout (HTML boilerplate)
│   └── partials/
│       ├── header.html     # Header partial
│       └── footer.html     # Footer partial
├── images/                 # Static images (copied to dist/images/)
├── styles/
│   └── style.css           # Tailwind CSS entry point
└── index.html              # Home page
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/eleventy-starter my-project
cd my-project
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

Open your browser at `http://localhost:8080`

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server with hot reload |
| `pnpm build` | Build the site into the `dist/` folder |

## How To: Add a New Page

Create a new `.html` file anywhere inside `src/` (outside `_includes/`):

```html
---
layout: base.html
title: About
---

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold">About</h1>
</div>
```

The page will be available at `/about/`.

## How To: Add a Partial

Create a new `.html` file inside `src/_includes/partials/`:

```html
<!-- src/_includes/partials/hero.html -->
<section class="bg-gray-100 py-16 text-center">
  <h2 class="text-4xl font-bold">Welcome</h2>
</section>
```

Include it in any layout or page:

```html
{% include "partials/hero.html" %}
```

## How To: Use Images

Place your images inside `src/images/`. They will be automatically copied to `dist/images/` during build.

Reference them in templates using the `rootPath` filter to ensure correct relative paths at any nesting level:

```html
<img src="{{ page | rootPath }}images/photo.jpg" alt="Description" />
```

## How To: Use the Base Layout

Every page references the base layout in its front matter. The layout lives at `src/_includes/layouts/base.html` and includes the HTML boilerplate, stylesheet link, header, and footer.

```html
---
layout: base.html
title: Page Title
---

<!-- Page content goes here -->
```

## Requirements

- [Node.js](https://nodejs.org/) v18 or higher
- [pnpm](https://pnpm.io/)
