# Portfolio - Ridwan Syarifudin

Personal portfolio website built with React and Tailwind CSS.

## Live Preview

👉 [testproject-alpha-seven.vercel.app](https://testproject-alpha-seven.vercel.app)

## About This Project

This portfolio showcases my experience as a **Software QA Engineer** with 2+ years in web & mobile testing, API inspection, SIT/UAT, and defect tracking — across Stockbit, Bank Mandiri Taspen, and Astra International.

### Features

- Responsive design (mobile, tablet, desktop)
- Light-only editorial layout for hiring-manager readability
- Single-column hero with role, value proposition, and employer proof
- Flat row-list projects and experience sections (no mock visuals)
- Work history with CV-sourced bullets per role
- Contact form via mailto integration
- Security headers configured in Vercel

## Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 8
- **Animation:** Motion
- **Icons:** Phosphor Icons
- **Linting:** OxLint
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rdwnivan/TestProject_Portofolio.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Navbar.jsx    # Fixed nav with active-section highlight
│   ├── Hero.jsx      # Single-column intro, CTAs, employer proof
│   ├── About.jsx     # Bio + fact table
│   ├── Skills.jsx    # Capability grid + tool lists
│   ├── Projects.jsx  # Flat project rows with repo links
│   ├── Experience.jsx # Work history + education, CV bullets
│   ├── Contact.jsx   # Contact links + mailto form
│   └── Footer.jsx    # Footer with copyright
├── lib/
│   └── data.js       # All data (profile, capabilities, projects, experience)
├── App.jsx           # Main app composition
├── main.jsx          # React entry point
└── index.css         # Global styles and Tailwind theme
public/
├── favicon.svg       # RS monogram
├── robots.txt        # Crawler rules + sitemap
└── sitemap.xml       # Single-page sitemap
```

## Author

**Ridwan Syarifudin**
- GitHub: [@rdwnivan](https://github.com/rdwnivan)
- LinkedIn: [ridwansyarifudin](https://www.linkedin.com/in/ridwansyarifudin/)
- Email: ridwansyarifudin07@gmail.com
