# Project memory

## Product intent & audience

- Patient-facing bariatric surgery website in Spanish for Dr. Carlos de Jesús Hernández López.
- Audience: potential patients seeking weight-loss surgery information, candidacy assessment, and consultation.
- Goal: significantly improve upon a reference page with richer content and modern UX.

## Brand personality & voice

- Professional, trustworthy, premium medical practice tone.
- All content in Spanish.
- Clear, empathetic, informative — balances clinical credibility with approachability.

## Visual design & UX direction

- **Palette**: teal / blue primary with orange accents.
- **Typography**: Poppins (headings) + Inter (body).
- **Navbar**: fixed, transparent-to-solid on scroll, active-section indicator, WhatsApp button (desktop & mobile).
- **Hero**: animated background with floating procedure cards; WhatsApp CTA button.
- **Procedures**: tabbed interface; each shows description, duration, hospital stay, recovery, expected weight loss; WhatsApp button per procedure with personalized pre-filled message.
- **BMI calculator**: interactive with visual scale bar and personalized recommendations based on result.
- **Testimonials**: carousel format.
- **FAQ**: animated accordions.
- **Locations**: dedicated section with two offices (Naucalpan de Juárez, Tijuana — Hospital Punta Médica); each shows address, hours, phone, and "Cómo llegar" button linking to Google Maps.
- **Contact**: functional form with visual confirmation on submit; WhatsApp button alongside form.
- **WhatsApp floating button**: fixed bottom-right, green, pulse animation, invitation bubble; visible on scroll.
- **Footer**: includes WhatsApp number and link to locations.
- Fully responsive across mobile, tablet, desktop.
- Smooth animations and transitions throughout.

## Decisions, constraints & rationale

- 6 procedures included: manga gástrica, bypass gástrico, mini bypass, SADI-S, cirugía de revisión, balón intragástrico.
- Specialist credentials highlighted: cédulas profesionales, Consejo Mexicano de Cirugía General certification, Da Vinci robotic surgery experience.
- Reference page content could not be extracted directly; content built from general bariatric surgery knowledge.
- WhatsApp number: 5666052103 (displayed as 56 6605 2103); integrated across multiple touchpoints.
- Locations derived from professional profile (Naucalpan de Juárez and Tijuana); addresses are placeholders pending confirmation.
- Build completed successfully with no errors; `@/` alias verified in tsconfig and vite config.

## Open questions & assumptions

- Exact addresses for both offices (Naucalpan de Juárez and Tijuana) are placeholders — user has been asked to provide real addresses.
- Potential future additions mentioned: more procedures, blog.
- Assumes patient information details (durations, recovery times, expected weight loss) are medically accurate — not verified against a clinical source.