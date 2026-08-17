# Portfolio - Ridwan Syarifudin

Personal portfolio website built with React and Tailwind CSS. This project is also an experiment in **vibe coding** — using AI as a pair programmer to rapidly build, iterate, and ship a real project.

## Live Preview

👉 [testproject-alpha-seven.vercel.app](https://testproject-alpha-seven.vercel.app)

## About This Project

This portfolio showcases my experience as a **Software QA Engineer** with 2+ years in web & mobile testing, API inspection, SIT/UAT, and defect tracking.

### Features

- Responsive design (mobile, tablet, desktop)
- Dark mode toggle with localStorage persistence
- Smooth scroll navigation
- Animated hero section with floating background elements
- Skill bars with animated progress
- Project showcase with hover effects
- Work experience & education timeline
- Contact form via mailto integration
- Security headers configured in Vercel

## Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 8
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Linting:** OxLint
- **Deployment:** Vercel

## Vibe Coding Experiment

This project was built using **vibe coding** — a workflow where I collaborate with an AI agent (OpenCode) to plan, build, test, and iterate on code. Instead of writing every line manually, I describe what I want and the AI generates, debugs, and refactors the code.

### What was vibe-coded

- All component implementations (Hero, About, Skills, Projects, Experience, Education, Contact, Footer)
- Responsive layout and dark mode system
- SVG project images generation
- Contact form with mailto integration
- Bug fixes and manual testing
- Code comments and documentation
- Security testing and validation

### What I provided

- Design direction and preferences
- Personal data (work experience, skills, education)
- Feedback and testing results
- Final decisions on features and styling

The entire development session — from initial setup to final bug fixes — was done in a single conversation with the AI, making real-time decisions and iterating based on what I saw.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rdwnivan/TestProject.git

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
│   ├── Navbar.jsx    # Navigation bar with dark mode toggle
│   ├── Hero.jsx      # Landing section with animated background
│   ├── About.jsx     # About me with stats cards
│   ├── Skills.jsx    # Skill bars and tech stack tags
│   ├── Projects.jsx  # Project showcase grid
│   ├── Experience.jsx # Work experience timeline
│   ├── Education.jsx # Education timeline
│   ├── Contact.jsx   # Contact form and social links
│   └── Footer.jsx    # Footer with copyright
├── lib/
│   └── data.js       # All data (profile, skills, projects, experience)
├── App.jsx           # Main app composition
├── main.jsx          # React entry point
└── index.css         # Global styles and Tailwind config
public/
└── projects/         # SVG images for project cards
```

## Author

**Ridwan Syarifudin**
- GitHub: [@rdwnivan](https://github.com/rdwnivan)
- LinkedIn: [ridwansyarifudin](https://www.linkedin.com/in/ridwansyarifudin/)
- Email: ridwansyarifudin07@gmail.com

---

*Built with vibe coding using [OpenCode](https://opencode.ai)*
