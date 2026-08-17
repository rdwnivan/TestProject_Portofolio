// ============================================
// Data Pribadi - Info kontak dan profil
// ============================================
export const personalInfo = {
  name: "Ridwan Syarifudin",
  tagline: "Software QA Engineer | Web & Mobile Testing, API Inspection, SIT/UAT",
  email: "ridwansyarifudin07@gmail.com",
  github: "https://github.com/rdwnivan",
  linkedin: "https://www.linkedin.com/in/ridwansyarifudin/",
  location: "Indonesia",
  about: `Software QA Engineer with 2+ years of experience in Web & Mobile Manual Testing, 
  API Inspection, SIT/UAT, and Defect Tracking. 
  Passionate about ensuring product quality and finding bugs before they reach users. 
  Experienced in both manual and automated testing methodologies.`,
};

// ============================================
// Skills - Level kemampuan untuk skill bar
// ============================================
export const skills = [
  { name: "Manual Testing", level: 95 },
  { name: "Test Documentation", level: 90 },
  { name: "Test Script Production", level: 85 },
  { name: "Katalon Studio", level: 85 },
  { name: "Playwright", level: 80 },
  { name: "Postman", level: 85 },
  { name: "JIRA", level: 90 },
  { name: "Azure", level: 85 },
];

// ============================================
// Projects - Daftar project yang ditampilkan
// ============================================
export const projects = [
  {
    id: 1,
    title: "Katalon Demo Project",
    description: "Automated testing project using Katalon Studio for web application testing with comprehensive test cases and reporting.",
    tech: ["Katalon Studio", "Groovy", "Web Testing"],
    github: "https://github.com/rdwnivan/KatalonDemoProject",
    demo: null,
    image: "/projects/katalon.svg",
  },
  {
    id: 2,
    title: "Playwright TypeScript Project",
    description: "End-to-end testing project using Playwright with TypeScript for modern web application testing and automation.",
    tech: ["Playwright", "TypeScript", "E2E Testing"],
    github: "https://github.com/rdwnivan/PlaywrightTSProject",
    demo: null,
    image: "/projects/playwright.svg",
  },
  {
    id: 3,
    title: "Git Demo Repository",
    description: "Demonstration repository for Git hands-on practices including branching, merging, and version control workflows.",
    tech: ["Git", "Version Control", "Collaboration"],
    github: "https://github.com/rdwnivan/Git-Demo",
    demo: null,
    image: "/projects/git.svg",
  },
  {
    id: 4,
    title: "Professional Profile",
    description: "Personal GitHub profile showcasing software QA engineering skills, certifications, and professional experience.",
    tech: ["README", "Profile", "Documentation"],
    github: "https://github.com/rdwnivan/Ridwan_Syarifudin",
    demo: null,
    image: "/projects/profile.svg",
  },
];

// ============================================
// Experience - Riwayat pekerjaan (timeline)
// ============================================
export const experience = [
  {
    id: 1,
    role: "Software Tester",
    company: "PT Graha Karya Informasi",
    period: "Feb 2024 - Jun 2024",
    description: "Software Tester for Astra International. Responsible for SIT/UAT testing, documentation, bug reports using Azure, and testing mobile & web applications for Astra Sales App Management.",
  },
  {
    id: 2,
    role: "Software Tester",
    company: "Bank Mandiri Taspen",
    period: "Jun 2023 - Oct 2023",
    description: "Responsible for SIT/UAT testing, ensuring apps work across all projects, daily bug reports, and API testing with Postman.",
  },
  {
    id: 3,
    role: "Software Tester",
    company: "Stockbit",
    period: "Oct 2021 - Mar 2023",
    description: "Focused on testing microservices, daily maintenance, bug reports using Jira, Android testing with Chucker, and comprehensive test scenarios with Xray. Led feature testing for Stockbit Malaysia.",
  },
];

// ============================================
// Education - Riwayat pendidikan
// ============================================
export const education = [
  {
    id: 1,
    degree: "Bachelor Degree in Computer Science",
    school: "Bina Nusantara University",
    location: "Jakarta",
    period: "2016 - 2020",
  },
];

// ============================================
// Tech Stack - Kategori tools dan teknologi
// ============================================
export const techStack = {
  tools: ["JIRA", "Azure", "Postman", "Katalon Studio", "Playwright"],
  testing: ["Manual Testing", "Test Documentation", "Test Script Production"],
  softSkills: ["Collaborative Team Player", "Communication", "Problem Solving", "Multitasking"],
};
