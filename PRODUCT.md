# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Online shoppers in Saudi Arabia browsing a pharmacy/personal-care storefront ("NahdiCare") on mobile and desktop, evaluating a product before purchase. Arabic-speaking and English-speaking audiences carry equal weight (user-confirmed): Arabic RTL and English LTR are both first-class experiences, and a language switcher is required. Today the UI is English-only — the bilingual requirement is confirmed but not yet implemented.

## Product Purpose

A product detail page (PDP) for a pharmacy e-commerce experience, built to showcase unique UI/UX for websites (user-confirmed purpose). The project is a design showcase, not a live storefront: it exists to demonstrate distinctive, high-craft e-commerce UI/UX using a realistic pharmacy PDP as the vehicle. Success means a PDP that reads as genuinely unique and excellent, not a template-grade page.

## Positioning

Not a real business. The page's claim to distinction is design quality itself — unique UI/UX beyond the standard e-commerce PDP pattern — rather than a commercial mechanism.

## Operating Context

- Scope (user-confirmed): a reusable PDP template system meant to render many products from data, not a one-off page. Components must stay data-driven via `src/types/product.ts` and `src/data/product.ts`; no product-specific hardcoding in components.
- Sample product domain: pharmacy/personal care in Saudi Arabia — SAR pricing, SFDA-approval flag, Arabic product names, delivery estimation, discount/promo mechanics.
- Existing surface: a complete PDP composition (hero, tabs, benefits, reviews, FAQ, related products, routine builder, sticky cart bar, trust badges, promo banner) in `src/components/`.

## Capabilities and Constraints

- Stack: Next.js 16.2.2 (App Router, breaking changes vs. older Next.js — consult `node_modules/next/dist/docs/` per AGENTS.md), React 19, Tailwind CSS 4, TypeScript.
- Data-driven rendering from typed product data (`Product`, `Review`, `RelatedProduct` interfaces).
- Bilingual AR/EN with full RTL support is a confirmed requirement, currently unimplemented. Undecided: i18n mechanism (routing, library, content source) — not yet chosen.
- Undecided: whether a backend/CMS ever feeds the template, or data stays file-based.

## Evidence on Hand

All product content is placeholder/demonstration data (user-confirmed showcase purpose): the Himalaya Neem Face Wash product record, reviews, ratings, review counts, stock counts, and the "NahdiCare" brand name in `src/data/product.ts` and `src/app/layout.tsx` are illustrative. Future work must not present these as real business claims, real customer reviews, or a real pharmacy; if the project ever becomes a real storefront, all of it must be replaced with real data. Product images referenced in data (`/images/*.jpg`) do not exist in `public/` yet.

## Product Principles

1. Design distinction is the product — every surface decision should earn "unique", not "standard PDP".
2. Template first — anything built must work for any product record, not just the sample product.
3. Both languages are the product — Arabic RTL is not a port of the English design; layouts, type, and mirroring must be designed for both from the start.
4. Realistic but honest — content looks like a real pharmacy page but is never claimed to be one.
5. Shopper trust patterns (pricing clarity, stock, delivery, regulatory approval) are functional truth the design must keep legible in both languages.
