# cpie Renaissance

# MASTER PROMPT: Recreate cpie Enterprise NetSuite Website

Act as an expert Senior Full-Stack Developer and UI/UX Designer. Build a modern, high-converting enterprise website for **cpie** — a premium NetSuite ERP consulting, SuiteScript engineering, and integration agency.

---

## 1. Project Overview & Technology Stack

- **Framework / Core**: React 19 + TypeScript + Vite + TanStack Router (SSR-ready architecture).

- **Styling**: TailwindCSS v4 with CSS variable design tokens.

- **Animations**: Framer Motion (smooth entrance transitions, accordion states, and interactive cards).

- **Icons**: `react-icons` (`hi2`, `hi`, `fa`) and `lucide-react`.

- **Theme**: Clean Off-White Light Mode primary with sleek Forest Dark Mode support.

---

## 2. Design System & Aesthetics

- **Color Palette**:

  - Primary Brand Green: `#2F5D50`

  - Secondary Soft Sage: `#5E8B7E`

  - Vibrant Accent Cherry: `#F05A28` / `#EA580C`

  - Light Background: `#FAFAF7`

  - Dark Surface / Dark Mode: `#101F1B` / `#1E293B`

  - Text Color: `#263238` (slate/foreground)

  - Borders & Dividers: `#DDE8E0`

- **Typography**:

  - Headings: `"Space Grotesk", sans-serif`

  - Body Text: `"Inter", sans-serif`

- **UI Elements**:

  - Glassmorphism backdrop filters (`backdrop-blur-md`, `glass`, `glass-strong`).

  - Subtle radial background glows (`bg-[#5E8B7E]/20 blur-[140px]`).

  - Rounded pill badges and crisp horizontal divider lines (`divide-y divide-[#E2E8F0]`).

  - Floating WhatsApp action widget (bottom-left) and Back-to-Top button (bottom-right).

---

## 3. Site Navigation & Page Structure

### Page 1: Home / About (`/`)

1. **Sticky Header Navbar**:

   - Brand logo `"cpie"` (Font: Space Grotesk).

   - Nav items: `"About"` (`/`), `"Services"` (`/services`), `"Thoughts from the Cloud"` (`/thoughts`).

   - Action Button: `"Book Consultation"` (scrolls to `#contact`).

2. **Hero Section**:

   - Background: Forest Green gradient with soft radial glow particles.

   - Pill Badge: `Certified NetSuite Experts` with glowing icon indicator.

   - Main Title: `"Accelerate Business Growth with cpie"` (with animated orange gradient highlight).

   - Subtitle: *"Helping enterprises streamline operations, automate workflows, and maximize ROI through Oracle NetSuite consulting, development, and implementation services."*

   - Trust Badges: `Enterprise Expertise` • `ISO Standards` • `Global Delivery`.

   - Right Side Cards: 4 floating cards highlighting NetSuite Implementation, SuiteScript Development, Workflow Automation, and ERP Consulting.

3. **Quick Facts & Stats Bar**:

   - 15+ Projects Delivered, 10+ Happy Clients, 25+ Automations Created, 24x7 Customer Support, 98% Client Satisfaction.

4. **Why NetSuite / Core Capabilities Grid**:

   - Interactive feature cards with icons and descriptions covering Financials, Supply Chain, Commerce, and SuiteCloud Platform.

5. **AI & SuiteScript Automation Feature Highlight**:

   - Showcasing Generative AI, predictive analytics, and automated SuiteScript 2.1 integration.

6. **Implementation Method Section**:

   - **Left Column**: Title *"Our Proven Implementation Approach"*, Subtitle *"Follow our battle-tested 6-step framework to transform your NetSuite ERP operations."*

   - **Right Column**: Numbered 6-step list separated by clean horizontal lines (`1.` to `6.`), formatted as single-line items:

     1. **Discovery & Consultation.** We uncover goals, pain points, and success metrics to define your project scope.

     2. **Planning & Solution Design.** Architecting your ideal NetSuite blueprint with tailored workflows and security roles.

     3. **Development & Configuration.** Building, customizing, and configuring custom SuiteScripts with precision.

     4. **Testing & Deployment.** Rigorous QA, sandboxed testing, and clean data migration before a confident cutover.

     5. **Training & Go-Live.** Empowering your team for day-one success with hands-on training and transition support.

     6. **Support & Optimization.** Continuous improvement, SLA-backed hypercare, and ongoing system administration.

7. **FAQ Accordion**:

   - Interactive collapsible accordion answering common enterprise questions (timelines, cost, support, customizations, integrations).

8. **Contact / Consultation Booking Section**:

   - Form with input fields (Name, Email, Phone, Company, Message) and direct email/phone/WhatsApp contact details.

9. **Footer**:

   - Brand blurb, quick links, legal modals trigger (Privacy Policy & Terms of Service), social links, and copyright notice.

---

### Page 2: Services & Integrations (`/services`)

1. **Services Hero**:

   - Headline: *"Enterprise NetSuite Services Engineered for Scale"*.

2. **Core Services Breakdown Grid**:

   - NetSuite Implementation, SuiteScript 2.1 Engineering, System Integrations, Managed Admin & 24/7 Support, Workflow & SuiteFlow Automation, Data Migration & Cleansing, ERP Health Audit, Financial Reporting & Dashboards.

3. **Detailed Industry Expertise**:

   - Sector-specific solutions for Manufacturing, Retail & E-Commerce, Healthcare, Distribution, Technology/SaaS, and Professional Services.

4. **Integration Architecture Grid**:

   - Showcasing connectors for Shopify, Salesforce, 3PL Logistics (ShipStation/FedEx), Payment Gateways (Stripe/PayPal), Custom RESTlets, and middleware (Celigo/Boomi).

---

### Page 3: Thoughts from the Cloud (`/thoughts`)

1. **Blog Header & Category Filter**:

   - Headline: *"Thoughts from the Cloud"*.

   - Filter Tabs: `All`, `ERP Strategy`, `NetSuite Administration`, `Engineering`, `Integrations`.

2. **Article Grid & Reader Modal**:

   - Article cards featuring read times, dates, categories, excerpts, and full modal reader view.

---

## 4. UX & Technical Requirements

1. **Initial Session Loader**: Show the brand splash screen (`cpie`) **only once** on the initial visit per browser session (using `sessionStorage`). No loader on page redirects.

2. **Smooth Page Transitions**: Ensure no layout shifts, blinking header elements, or vertical scroll jumps during route navigation (`window.scrollTo(0, 0)`).

3. **Accessibility & SEO**: Include JSON-LD schema markup (`ProfessionalService`), meta titles, alt attributes, semantic tags, and fully responsive layouts for mobile, tablet, and desktop.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9e9a3c8c-3c84-4875-91cb-774ce27c0a9a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
