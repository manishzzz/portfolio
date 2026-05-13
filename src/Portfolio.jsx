import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import './App.css'

const skillGroups = [
  {
    title: 'Languages & Querying',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'MySQL',
      'Window Functions',
      'CTEs',
      'Query Optimization',
    ],
  },
  {
    title: 'Analytics & Reporting',
    items: [
      'Exploratory Data Analysis',
      'Data Cleaning',
      'KPI Reporting',
      'Business Insights',
      'GA4',
      'Statistical Analysis',
    ],
  },
  {
    title: 'Visualization & Tools',
    items: [
      'Power BI',
      'DAX',
      'Star Schema',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook',
      'Excel',
      'Streamlit',
      'Git',
      'n8n',
      'Zapier',
      'Notion',
    ],
  },
]

const experiences = [
  {
    role: 'AI Research Intern',
    company: 'Laneway',
    period: 'Nov 2025 – Feb 2026',
    points: [
      'Automated document-heavy workflows with n8n and Zapier, reducing manual processing time by around 40% across internal operations.',
      'Evaluated and benchmarked 15+ AI tools, producing structured analysis reports that informed technology adoption decisions.',
      'Coordinated research deliverables across a 10-member cross-functional team and consistently hit milestones in a high-velocity environment.',
    ],
  },
  {
    role: 'Research & Development Intern',
    company: 'CoCreate Ventures',
    period: 'Oct 2024 – Mar 2025',
    points: [
      'Conducted structured competitive research across 5+ startup domains and translated findings into market analysis for go-to-market positioning.',
      'Became a finalist in Samsung Innovation Challenge 2024 for an AI-driven product concept supported by data analysis.',
    ],
  },
]

const projects = [
  {
    title: 'Amazon Sales Analytics',
    subtitle: 'Optimization & Forecasting',
    stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Excel'],
    summary:
      'Built an end-to-end analytics system for sales performance, PPC optimization, funnel analysis, and demand forecasting across an Amazon e-commerce dataset.',
    highlights: [
      'Designed a star schema model and built DAX measures for ROAS, ACOS, and conversion rate.',
      'Integrated reorder point and safety stock forecasting for inventory planning.',
      'Delivered a multi-page Power BI dashboard for ad spend, pricing, and inventory decisions.',
    ],
  },
  {
    title: 'Quick Commerce Analysis',
    subtitle: 'End-to-End Business Insights',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    summary:
      'Cleaned and analyzed a 10,000+ record e-commerce dataset to uncover patterns in customer behavior, category performance, and seasonality.',
    highlights: [
      'Resolved real-world data inconsistencies to create an analysis-ready dataset.',
      'Identified top-performing categories and seasonal trends with clear business takeaways.',
      'Presented 5+ actionable insights through stakeholder-friendly visual reporting.',
    ],
  },
  {
    title: 'Reusable Data Pipeline',
    subtitle: 'Data Cleaning & Preprocessing Framework',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    summary:
      'Engineered a modular preprocessing workflow for repeated analytics use cases, focused on trustworthy and ML-ready datasets.',
    highlights: [
      'Handled missing values, duplicates, type normalization, and outlier treatment using the IQR method.',
      'Standardized cleaning steps into a reusable workflow with validated output structure.',
      'Reduced repetitive preparation effort for downstream analysis and modeling.',
    ],
  },
]

const certifications = [
  'SQL for Data Analysis — Window Functions, Joins, CTEs, Subqueries (Udemy, 2025)',
  'Data Analysis with Python — NumPy, Pandas, Data Cleaning, Advanced Visualization (Udemy, 2025)',
  'Generative AI for Digital Marketing — Prompt Engineering, AI Content Strategy (Udemy, 2025)',
]

const achievements = [
  'Finalist — Samsung Innovation Challenge 2024 from 500+ nationwide entries',
  'Finalist — HackArCode National Hackathon 2024',
  'Delivered 5+ technical workshops on AI tools and data automation to 20+ students',
]

const metrics = [
  { value: '40%', label: 'workflow time reduced' },
  { value: '15+', label: 'AI tools evaluated' },
  { value: '10K+', label: 'records analyzed' },
  { value: '5+', label: 'insights delivered' },
]

function Portfolio() {
  return (
    <div className="portfolio-shell">

      {/* ── Navbar ─────────────────────────────────────────── */}
      <header className="topbar">
        <a className="brand" href="#home">Manish</a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="resume-link"
          href="/Manish_Data_Analyst_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </header>

      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Data Analyst Portfolio</p>
            <h1>
              Turning messy data into
              <span> clear business decisions.</span>
            </h1>
            <p className="hero-text">
              I'm Manish — a data analyst with hands-on experience in Python, SQL, Power BI, and
              analytics reporting. I build practical dashboards, clean pipelines, and insight-driven
              analyses that help teams act with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects <ArrowRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href="/Manish_Data_Analyst_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> Download Resume
              </a>
            </div>
            <div className="contact-strip">
              <a href="mailto:manishmaniyadhav@gmail.com">
                <Mail size={15} /> manishmaniyadhav@gmail.com
              </a>
              <a href="tel:+918139817262">
                <Phone size={15} /> +91 8139817262
              </a>
              <span>
                <MapPin size={15} /> Kasaragod, India
              </span>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-card hero-card-accent">
              <p>Current focus</p>
              <strong>Data analytics, reporting &amp; business insight generation</strong>
            </div>
            <div className="hero-grid">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Professional, insight-driven, and execution-focused.</h2>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p>
                I recently completed my Bachelor of Engineering in Computer Science and have been
                building a strong foundation in analytics through internships, reporting projects, and
                hands-on data work. My strengths sit at the intersection of data cleaning, exploratory
                analysis, visualization, and translating findings into business recommendations.
              </p>
              <p>
                I'm especially interested in analyst roles where I can support growth, operations,
                product, or e-commerce teams by building reliable reporting systems and surfacing the
                metrics that matter most.
              </p>
            </div>
            <div className="spotlight-card">
              <div className="spotlight-row">
                <GraduationCap size={18} />
                <div>
                  <strong>B.E. Computer Science</strong>
                  <span>Vivekananda College of Engineering and Technology</span>
                </div>
              </div>
              <div className="spotlight-row">
                <BarChart3 size={18} />
                <div>
                  <strong>Core stack</strong>
                  <span>Python, SQL, Power BI, Excel, GA4</span>
                </div>
              </div>
              <div className="spotlight-row">
                <BriefcaseBusiness size={18} />
                <div>
                  <strong>Internship exposure</strong>
                  <span>Research, automation, benchmarking, reporting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Work shaped by measurable outcomes and structured analysis.</h2>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={`${exp.role}-${exp.company}`} className="timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{exp.role}</h3>
                    <p>{exp.company}</p>
                  </div>
                  <span>{exp.period}</span>
                </div>
                <ul>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Case studies built around reporting, forecasting, and decision support.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <div className="project-stack-badge">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p className="project-summary">{project.summary}</p>
                <ul>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section className="section skills-section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to build reliable analytics workflows.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Credentials ──────────────────────────────────── */}
        <section className="section credentials-section">
          <div className="credentials-grid">
            <article className="credential-card">
              <p className="eyebrow">Certifications</p>
              <ul>
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="credential-card">
              <p className="eyebrow">Achievements</p>
              <ul>
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to data analyst roles, internships, and collaborative projects.</h2>
              <p className="contact-text">
                If you're hiring for analytics, BI, reporting, or operations insight work, I'd love to
                connect and discuss how I can contribute.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:manishmaniyadhav@gmail.com">
                <Mail size={17} /> Email Me
              </a>
              <a
                className="button button-secondary"
                href="https://linkedin.com/in/manish050"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/manishzzz"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="footer">
        <p>Built with React · Tailored for analytics-focused hiring.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/manish050" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a href="https://github.com/manishzzz" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={15} />
          </a>
          <a href="mailto:manishmaniyadhav@gmail.com" aria-label="Email">
            <Mail size={15} />
          </a>
          <a href="/Manish_Data_Analyst_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
            <ExternalLink size={15} />
          </a>
        </div>
      </footer>

    </div>
  )
}

export default Portfolio
