# SAHM Parts - Project Context

## Project Overview

SAHM Parts is an ecommerce website focused on selling spare parts and accessories.

The website is NOT a motorcycle showroom.
The website is NOT a motorcycle finder.
The website is NOT focused on motorcycle brand/year/VIN search.

The main goal is ecommerce conversion and product visibility.

Current product categories:
- Tires
- Inner tubes
- Carburetors
- Spare parts
- Accessories

More categories and products will be added later.

---

# Tech Stack

Current stack:
- Next.js
- React
- TailwindCSS

Optional libraries:
- GSAP
- ScrollTrigger
- Lenis

IMPORTANT:
- The project has already been migrated to Next.js.
- Do NOT migrate the project back to Vite.
- Keep the current Next.js structure.
- Maintain compatibility with npm run dev.

---

# Next.js Rules

Use the current Next.js routing structure.

If the project uses App Router:
- Use /app routes
- Use page.jsx or page.tsx
- Use layout.jsx or layout.tsx

If the project uses Pages Router:
- Use /pages routes correctly

Do not mix App Router and Pages Router unless the project already does it intentionally.

Fix broken routes according to the current Next.js structure.

---

# Main Objectives

The website must:
- Look professional
- Be easy to navigate
- Focus on ecommerce
- Display products clearly
- Work well on mobile
- Maintain fast performance
- Feel modern without excessive complexity

The website should feel like:
- A professional spare parts ecommerce store
- Clean and trustworthy
- Product-focused

The website should NOT feel like:
- A racing website
- A motorcycle event page
- A cinematic landing page
- A gaming UI
- An over-animated portfolio

---

# Branding Rules

The yellow navbar is part of the SAHM brand identity.

IMPORTANT:
- Keep the navbar yellow.
- Do NOT replace it with black, white, or dark luxury styles.
- Preserve brand consistency across pages.

---

# Navbar Rules

The navbar must remain clean and minimal.

Allowed navbar items:
- Productos
- Categorías
- Nosotros
- Contacto
- Search
- Cart

Avoid:
- Too many buttons
- Cluttered navigation
- Large multi-level menus
- Unnecessary sections

Mobile navbar should include:
- Hamburger menu
- Logo
- Cart icon

---

# Route Structure

Required routes:
- /
- /productos
- /productos/[slug]
- /categorias
- /categorias/[categoria]
- /carrito
- /contacto
- /nosotros

IMPORTANT:
- Restore broken routes after migration.
- Avoid 404 navigation issues.
- Ensure navigation links work correctly.
- Product cards must link to the correct product detail page.
- Category cards must link to the correct category page.

---

# Product Cards

Each product card should include:
- Product image
- Product name
- Category
- Price
- Availability badge
- Quantity selector
- View product button
- Add to cart button

Cards should:
- Be clean
- Have proper spacing
- Be responsive
- Have subtle hover effects
- Show pricing clearly
- Make the purchase action easy to understand

Avoid:
- Overly large shadows
- Excessive glassmorphism
- Overdesigned UI
- Too many actions competing visually

---

# Cart UX Rule

After the user selects a product and quantity and adds it to the cart, show a clear confirmation state.

Required behavior:
- User selects quantity
- User clicks "Agregar al carrito"
- Show confirmation message:
  - "Producto agregado al carrito"
- Show visible button:
  - "Ver carrito"
- The "Ver carrito" button must redirect to:
  - /carrito
- Show secondary option:
  - "Seguir comprando"

Goal:
The user should not need to search for the cart icon manually after adding a product.

UX requirement:
Make the purchase flow simple, clear and direct.

This behavior should apply to:
- Product cards
- Product detail page purchase area

---

# Product Detail Page

Each product must have its own detail page.

Required elements:
- Large product image
- Product gallery if available
- Product name
- Price
- Category
- Availability
- Description
- Technical details
- Quantity selector
- Add to cart button
- Confirmation message after adding to cart
- Ver carrito button after adding to cart
- Seguir comprando option
- WhatsApp inquiry button
- Related products section

---

# Product Listing Page

The /productos page should include:
- Clear title
- Product grid
- Category filters
- Search by product name
- Price visibility
- Availability badges
- Responsive layout

Recommended filters:
- Llantas
- Cámaras
- Carburadores
- Repuestos
- Accesorios

---

# Animations

Animations should remain subtle and professional.

Allowed:
- Fade-up animations
- Smooth transitions
- Hover effects
- Soft image reveal
- Smooth scrolling

Avoid:
- Heavy cinematic effects
- Complex parallax
- Floating 3D scenes
- Distracting motion
- Excessive GSAP timelines

Animations must improve UX, not distract from buying products.

---

# UI Style

Preferred style:
- Modern ecommerce
- Clean layout
- Professional spacing
- Strong typography hierarchy
- Mobile-first
- Easy to scan

Avoid:
- Excessively futuristic design
- Dark luxury themes
- Overly experimental layouts

---

# Ecommerce Focus

The website should prioritize:
- Product visibility
- Clear pricing
- Fast navigation
- Easy purchasing
- Mobile usability
- Conversion optimization

The user must quickly:
- Find products
- View prices
- Open product pages
- Select quantity
- Add to cart
- Go to cart
- Contact through WhatsApp

---

# Technical Rules

IMPORTANT:
- Do NOT delete existing product data.
- Do NOT break existing layouts unnecessarily.
- Reuse components where possible.
- Keep components clean and maintainable.

Create or improve reusable components:
- Navbar
- Footer
- ProductCard
- CategoryCard
- ProductGrid
- Layout
- QuantitySelector
- AddToCartButton
- CartConfirmation

Ensure:
- Responsive design
- Clean routing
- Proper imports
- Fast loading
- Maintainable structure
- No route errors
- npm run dev works correctly

---

# Development Priority

Priority order:
1. Fix broken routes
2. Fix navigation
3. Improve ecommerce structure
4. Improve product cards
5. Improve cart UX
6. Improve product detail pages
7. Improve UI consistency
8. Improve mobile UX
9. Add subtle animations
10. Optimize performance

Do not prioritize visual effects over functionality.

---

# Final Goal

The final result should feel like:

A modern, professional, trustworthy ecommerce website for spare parts, focused on product sales, clear prices, easy navigation and a simple purchase flow.