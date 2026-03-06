# Full Spectrum Wound Care — Preview Site Build Instructions

## OBJECTIVE
Build a complete, polished, multi-page static website for Full Spectrum Wound Care (FSWC), a medical wound care practice in Huntsville, Texas. This will be deployed to GitHub Pages for client review.

## CRITICAL REQUIREMENTS
- **ALL content** must come from CONTENT.md — do NOT invent or change any medical content, team bios, contact info, or service descriptions
- **5 pages:** index.html (Home), about.html, services.html, patient-info.html, contact.html
- **Responsive** — must look great on desktop AND mobile
- **Static HTML/CSS/JS only** — no build tools, no frameworks, no npm. Just clean HTML files.
- **Professional medical aesthetic** — teal/sage color palette (reference the reference-mockup.html for the color direction)
- **Use the logo.png** in the header and favicon.ico for the browser tab

## DESIGN DIRECTION
- Clean, professional medical practice website
- Color palette: teal/sage green primary (#2a9d8f or similar), dark text, white/light backgrounds
- Modern but trustworthy — this is healthcare, not a tech startup
- Smooth, subtle animations on scroll (nothing flashy)
- Large readable text — patients may be elderly
- Card-based layouts for services and team members
- Reference reference-mockup.html for the previous design direction (teal/sage medical theme)

## PAGE STRUCTURE

### ALL PAGES must have:
1. **Sticky navigation** with logo, page links (Home, About, Services, Patient Information, Contact), and phone number
2. **Footer** with: Location (100 Medical Center Parkway, Suite #100, Huntsville, Texas 77340), Hours (Tuesday–Wednesday 8:00 AM – 5:00 PM), Email (cynthia@fullspectrumwound.com), Phone ((936) 966-8181), Fax ((936) 571-0366)
3. Google Maps embed for the address in the footer

### HOME (index.html)
- Hero section with tagline about healing wounds and restoring lives
- Brief practice intro (from CONTENT.md Home section)
- Services overview cards (5 services, with icons, linking to services.html)
- Call-to-action to schedule appointment
- FAQ accordion section (6 questions from CONTENT.md)
- Insurance logos or list

### ABOUT (about.html)
- Practice overview section
- Team member cards/sections for all 4 staff:
  - Dr. Lawrence Wells, M.D.
  - Cynthia O'Bryant, Patient Care Coordinator
  - Ginger Greer, M.S.N., R.N., C.W.S., C.O.N.O., C.S.W.D.-C
  - Perri Winston, MSN, RN, AGNP-PC
- Use placeholder avatar circles with initials since we don't have headshots yet
- Include Ginger's quote as a highlighted callout

### SERVICES (services.html)
- Overview section listing all 5 services
- Detailed expandable/accordion sections OR separate cards for each service with FULL content from CONTENT.md:
  1. Advanced Wound Care Dressings (includes types of dressings, purposes, application considerations)
  2. Tissue Grafts (types explained)
  3. Wound Debridement (4 types)
  4. Negative Pressure Wound Therapy (benefits)
  5. Red Light Therapy (benefits)
- Do NOT truncate the services content — include ALL details from CONTENT.md

### PATIENT INFORMATION (patient-info.html)
- Insurance section with all 8 accepted insurers listed prominently
- Downloadable new patient paperwork (link to FSWC-New-Patient-Questionnaire.pdf)
- "What to expect at your first visit" section
- Comprehensive pricing note

### CONTACT (contact.html)
- Contact form (Name, Email, Phone, Message — doesn't need to actually submit, just styled)
- Direct contact info (email, phone, fax)
- Emergency notice (dial 911)
- Provider notice
- FAQ accordion section (same 6 questions as home page)
- Google Maps embed (larger, prominent)

## TECHNICAL NOTES
- Use a shared CSS file (styles.css) for consistency
- Mobile-first responsive design
- Smooth scroll behavior
- FAQ should be accordion-style (click to expand/collapse)
- Navigation should highlight the current page
- All internal links should work between pages
- The PDF download link should open in a new tab
- Add appropriate medical-themed SVG icons for services (inline SVG or unicode, no external icon libraries that need CDN)
- Add a "Back to top" button
- Ensure WCAG accessibility basics (alt text, contrast, semantic HTML)

## FILES TO CREATE
- index.html
- about.html
- services.html
- patient-info.html
- contact.html
- styles.css
- script.js (for accordion, mobile menu, etc.)

## AFTER BUILDING
When completely finished building all pages, run:
git add -A && git commit -m "feat: complete FSWC preview site with all 5 pages"

Then run this command to notify me:
openclaw system event --text "Done: Built complete Full Spectrum Wound Care preview site — 5 pages (Home, About, Services, Patient Info, Contact) with all content, responsive design, FAQ accordions, and teal/sage medical theme. Ready for GitHub Pages deployment." --mode now
