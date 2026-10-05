# 🍽️ Multi-Language Recipe Blog

A modern, high-performance recipe blog built with **Next.js (App Router)**, featuring internationalization, static generation, SEO optimization, and full Docker containerization.

---

## 🚀 Project Overview

This project demonstrates how to build a modern content-driven website using:

* ⚡ **Next.js 16 (App Router)**
* 🌍 Multi-language routing (English, Spanish, French) can be accessed in any language
* 🧱 Static Site Generation (SSG)
* 🔎 SEO best practices (Sitemap + Metadata)
* 🐳 Full Docker containerization
* 🎨 Tailwind CSS for modern UI

The application is fully containerized and can be started using a single command.

---

## 🌍 Supported Languages

* 🇺🇸 English (`/en`)
* 🇪🇸 Spanish (`/es`)
* 🇫🇷 French (`/fr`)

Users can switch languages using the built-in language switcher component.

---

## 🏗️ Architecture

### Rendering Strategy

* **Static Site Generation (SSG)** for:

  * Homepage
  * Recipes list
  * Individual recipe pages (via `generateStaticParams`)

This ensures:

* Fast performance
* SEO-friendly output
* Pre-rendered content

---

## 📂 Project Structure

```
app/
 ├── layout.tsx
 ├── sitemap.ts
 ├── api/
 │    └── health/route.ts
 └── [locale]/
      ├── layout.tsx
      ├── page.tsx
      └── recipes/
            ├── page.tsx
            └── [slug]/page.tsx

components/
 ├── LanguageSwitcher.tsx
 └── NewsletterForm.tsx

Dockerfile
docker-compose.yml
.env.example
```

---

## ✨ Features

### 🏠 Homepage

* Statically generated
* Displays featured recipes
* `data-testid="featured-recipes"`
* `data-testid="recipe-card"`

---

### 📖 Recipe Detail Pages

* Dynamic route: `/[locale]/recipes/[slug]`
* Statically generated via `generateStaticParams`
* Displays:

  * Title (`recipe-title`)
  * Ingredients (`recipe-ingredients`)
  * Instructions (`recipe-instructions`)
  * Optimized image via `next/image`

---

### 🔍 Search & Filter

* Client-side search functionality
* Category filter dropdown
* Real-time filtering

---

### 📧 Newsletter Subscription

* Client-side validation
* Error handling
* Success state
* No backend required

Test IDs included:

* `newsletter-form`
* `newsletter-email`
* `newsletter-submit`
* `newsletter-error`
* `newsletter-success`

---

### 🐦 Social Sharing

* Twitter Web Intent integration
* `data-testid="social-share-twitter"`
* URL encoding applied correctly

---

### 🗺️ Sitemap

* Available at:

  ```
  /sitemap.xml
  ```
* Includes:

  * Homepage (all locales)
  * Recipes page (all locales)
  * All recipe detail pages (all locales)
* Proper XML structure

---

### 🖨️ Print-Friendly Layout

* Uses `@media print`
* Hides non-essential UI:

  * Language switcher
  * Social share buttons
  * Newsletter form

---

### 🖼️ Image Optimization

* Uses Next.js `<Image />`
* Automatic `srcset`
* Optimized loading
* Remote image domains configured

---

# 🐳 Docker Setup (Submission Requirement)

## Build and Run

```bash
docker-compose up --build -d
```

Application will be available at:

```
http://localhost:3000/en
```

---

## Health Check

Health endpoint:

```
http://localhost:3000/api/health
```

Returns:

```json
{"status":"ok"}
```

Docker healthcheck is configured in `docker-compose.yml`.

---

# 🔐 Environment Variables

`.env.example` contains:

```
CMS_PROVIDER='contentful'
CONTENTFUL_SPACE_ID='your_space_id'
CONTENTFUL_ACCESS_TOKEN='your_access_token'
CONTENTFUL_PREVIEW_ACCESS_TOKEN='your_preview_token'
CONTENTFUL_PREVIEW_SECRET='your_preview_secret'
```

No real secrets are committed.

---

# 🛠️ Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000/en
```

---

# 📊 SEO & Performance

* Static generation for fast load times
* XML sitemap generation
* Optimized images
* Clean semantic HTML
* Locale-based routing

---

# 🧪 Testing Contract Compliance

All required `data-testid` attributes are implemented for automated verification.

The project satisfies all functional requirements specified in the assignment brief.

---

# 🏁 Final Status

✔ Fully containerized
✔ Multi-language support
✔ Static generation
✔ Dynamic routes
✔ SEO optimized
✔ Client-side search
✔ Newsletter validation
✔ Social sharing
✔ Sitemap generation
