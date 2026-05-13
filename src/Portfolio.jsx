import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Star,
  GitFork,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Database,
  Globe
} from 'lucide-react'
import './App.css'

// ─── Data ──────────────────────────────────────────────────

const skillGroups = [
  { title: 'Languages', items: ['Python', 'SQL', 'PostgreSQL', 'MySQL'] },
  { title: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'] },
  { title: 'Tools', items: ['Power BI', 'Excel', 'Tableau', 'GA4', 'n8n', 'Zapier'] }
]

const experiences = [
  {
    role: 'AI Research Intern',
    company: 'Laneway',
    period: 'Nov 2025 – Feb 2026',
    points: [
      'Automated document-heavy workflows with n8n and Zapier, reducing manual processing time by 40%.',
      'Evaluated 15+ AI tools, producing analysis reports for tech adoption.',
      'Led research deliverables across a 10-member cross-functional team.'
    ]
  },
  {
    role: 'R&D Intern',
    company: 'CoCreate Ventures',
    period: 'Oct 2024 – Mar 2025',
    points: [
      'Conducted competitive research across 5+ startup domains.',
      'Samsung Innovation Challenge 2024 Finalist for AI-driven product concept.'
    ]
  }
]

const projects = [
  {
    title: 'Amazon Sales Analytics',
    stack: ['Python', 'Power BI', 'SQL'],
    summary: 'End-to-end analytics for sales performance and inventory forecasting.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Quick Commerce Analysis',
    stack: ['Python', 'Pandas', 'Seaborn'],
    summary: 'Behavioral analysis on 10k+ records to optimize category performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  }
]

const achievements = [
  'Samsung Innovation Challenge Finalist',
  'HackArCode National Hackathon Finalist',
  'Delivered 5+ AI workshops to 20+ students'
]

// ─── Components ───────────────────────────────────────────

const RepoCard = ({ repo }) => (
  <motion.a
    href={repo.html_url}
    target="_blank"
    rel="noreferrer"
    className="card repo-card flex flex-col"
    whileHover={{ y: -5, borderColor: 'var(--border-bright)' }}
  >
    <div className="flex justify-between items-start mb-4">
      <h4 className="font-bold text-lg">{repo.name}</h4>
      <ArrowUpRight size={16} className="text-dim" />
    </div>
    <p className="text-sm text-dim mb-6 flex-grow">{repo.description || 'Live development repository.'}</p>
    <div className="flex gap-4 text-[10px] font-bold text-dim uppercase tracking-widest">
      <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
      <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
      {repo.language && <span className="flex items-center gap-1"><Code2 size={12} /> {repo.language}</span>}
    </div>
  </motion.a>
)

const GithubFeed = ({ username }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  if (loading) return <div className="text-dim py-12">Fetching live code...</div>

  return (
    <div className="repo-grid">
      {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
    </div>
  )
}

function Portfolio() {
  return (
    <div className="page-shell">
      
      {/* Navigation */}
      <div className="nav-wrapper">
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Work</a>
          <a href="#experience" className="nav-link">Exp</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>

      <main className="container">
        
        {/* Hero Section */}
        <section id="home" className="bento-grid">
          <div className="card hero-main">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="badge mb-6 inline-block">Available for 2026 roles</div>
              <h1>Engineering <br />Data Clarity.</h1>
              <p className="text-dim text-lg max-w-xl mb-10">
                I'm Manish, a Data Analyst focused on building high-fidelity pipelines 
                and strategic dashboards that turn raw numbers into clear direction.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="btn">Get in touch</a>
                <a href="/Manish_Data_Analyst_Resume.pdf" className="btn btn-outline">Resume</a>
              </div>
            </motion.div>
          </div>

          <div className="card hero-image-card">
            <img src="/manish-profile.jpg" alt="Manish" className="hero-img" />
          </div>

          {/* Stats Section */}
          <div className="card stat-box">
            <span className="stat-num">40%</span>
            <span className="stat-label">Efficiency Gain</span>
          </div>
          <div className="card stat-box">
            <span className="stat-num">15+</span>
            <span className="stat-label">AI Benchmarks</span>
          </div>
          <div className="card stat-box">
            <span className="stat-num">10k+</span>
            <span className="stat-label">Records Analyzed</span>
          </div>
          <div className="card stat-box">
            <span className="stat-num">5+</span>
            <span className="stat-label">Insights Shipped</span>
          </div>
        </section>

        {/* Work Section */}
        <section id="projects">
          <h2 className="section-title">Selected Work</h2>
          <div className="bento-grid">
            {projects.map((project, i) => (
              <motion.div 
                key={project.title} 
                className="card project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="project-img-box">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="badge-group">
                      {project.stack.map(s => <span key={s} className="badge">{s}</span>)}
                    </div>
                  </div>
                  <p className="text-dim">{project.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="card">
            <h2 className="section-title mb-0">Experience</h2>
            <div className="exp-list">
              {experiences.map((exp) => (
                <div key={exp.role} className="exp-row">
                  <div className="exp-date">{exp.period}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-dim mb-6 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.points.map((p, i) => (
                        <li key={i} className="text-dim text-sm flex gap-3 items-start">
                          <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-1.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Milestones */}
        <section className="bento-grid">
          <div className="card span-6" style={{ gridColumn: 'span 6' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Database size={20} /> Core Stack</h3>
            <div className="badge-group">
              {skillGroups.flatMap(g => g.items).map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card span-6" style={{ gridColumn: 'span 6' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Zap size={20} /> Milestones</h3>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div key={i} className="text-sm text-dim flex gap-3 items-center">
                  <div className="w-1 h-1 bg-white/30 rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Integration */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-dim uppercase tracking-[0.2em] text-[10px] font-bold mb-2">Live Development</p>
              <h2 className="text-4xl font-bold">GitHub Pulse</h2>
            </div>
            <a href="https://github.com/manishzzz" target="_blank" rel="noreferrer" className="btn btn-outline py-2 px-6 text-xs">
              View Profile <Globe size={14} />
            </a>
          </div>
          <GithubFeed username="manishzzz" />
        </section>

        {/* Credentials */}
        <section className="bento-grid">
          <div className="card" style={{ gridColumn: 'span 6' }}>
             <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><Award size={20} /> Credentials</h3>
             <div className="space-y-4">
                <div>
                   <p className="text-[10px] uppercase font-black text-white/20 mb-1">State Board</p>
                   <h4 className="font-bold">12th Grade Board Certificate</h4>
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black text-white/20 mb-1">State Board</p>
                   <h4 className="font-bold">10th Grade Board Certificate</h4>
                </div>
             </div>
          </div>
          <div className="card" style={{ gridColumn: 'span 6' }}>
             <h3 className="text-xl font-bold mb-8 flex items-center gap-3"><GraduationCap size={20} /> Academic</h3>
             <h4 className="font-bold mb-2">B.E. Computer Science</h4>
             <p className="text-dim text-sm">Vivekananda College of Engineering & Technology.</p>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact">
          <div className="card text-center py-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let's create <br />something exceptional.</h2>
            <p className="text-dim text-lg mb-16 max-w-2xl mx-auto">
              Available for analytics roles, research collaborations, and high-impact internships.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <a href="mailto:manishmaniyadhav@gmail.com" className="text-2xl font-bold hover:text-white/60 transition-colors border-b-2 border-white">Email</a>
              <a href="https://linkedin.com/in/manish050" className="text-2xl font-bold hover:text-white/60 transition-colors border-b-2 border-white">LinkedIn</a>
              <a href="https://github.com/manishzzz" className="text-2xl font-bold hover:text-white/60 transition-colors border-b-2 border-white">GitHub</a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black">© 2026 Manish · Kasaragod, India</p>
      </footer>
    </div>
  )
}

export default Portfolio
