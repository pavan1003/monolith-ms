# Monolith Microsystems — Company Website

The official marketing website for **Monolith Microsystems Private Limited**, a specialized
embedded systems engineering firm based in Ahmedabad, India.

> _"Engineering should solve real problems. Technology must survive outside the lab."_
> — Milan Panchal, Founder

---

## About the company

Monolith Microsystems bridges the chasm between high-fidelity prototypes and ruggedized,
regulatory-compliant mass production. Founded by **Milan Panchal** — an embedded systems
architect with 14+ years across industrial automation, autonomous systems, satellite
communication, electric mobility, and medical infrastructure — the firm delivers ambitious
embedded hardware projects end to end: architecture, firmware, hardware, industrial
networking, edge AI, and lifecycle support, all under direct founder involvement.

**Track record**

| Metric | Value |
| --- | --- |
| Years of experience | 14+ |
| Projects delivered | 25+ |
| AGVs deployed | 500+ |
| Industrial devices running | 1,000+ |
| Engineers led | 30+ |
| Aerospace heritage | ISRO ecosystem |

**Solution domains:** Industrial Automation · Autonomous Systems (AGV/AMR) ·
Satellite & Remote Connectivity (SatIoT) · Edge AI · Medical Infrastructure · Electric Mobility

**Service regions:** India · Middle East · Europe · North America

**Contact:** milan@monolithms.com · Ahmedabad, India

---

## Tech stack

A client-side single-page application — **Vite + React** (not Next.js), with client-side
routing via React Router.

- **Build tool:** [Vite 7](https://vitejs.dev/)
- **Framework:** [React 18](https://react.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/) (`BrowserRouter`)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI components:** [shadcn/ui](https://ui.shadcn.com/) on [Radix UI](https://www.radix-ui.com/) primitives
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Forms & validation:** React Hook Form + Zod
- **Notifications:** Sonner

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (developed against Node 20)
- npm 10+

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:3000)
npm run dev
```

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Generate `llms.txt` then produce a production build |
| `npm run start` | Preview the production build on port 3000 |
| `npm run lint` | Run ESLint (errors only) |
| `npm run lint:warn` | Run ESLint including warnings |

## Project structure

```
.
├── index.html                # App entry HTML
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Router + route definitions
│   ├── index.css             # Global styles / Tailwind layers
│   ├── pages/                # Route pages (Home, About, Services, Industries, Projects, Contact)
│   ├── components/           # Shared components
│   │   └── ui/               # shadcn/ui primitives
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities
├── plugins/                  # Custom Vite plugins (visual editor, selection mode, auth, etc.)
├── tools/                    # Build-time scripts (generate-llms, install-missing-components)
├── public/                   # Static assets
├── tailwind.config.js
├── vite.config.js
└── components.json           # shadcn/ui config
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/industries` | Industries |
| `/projects` | Projects |
| `/contact` | Contact |

## Building for production

```bash
npm run build      # outputs to ../../dist/apps/web
npm run start      # serve the production build locally
```

---