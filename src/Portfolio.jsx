import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  Star,
  GitFork,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Globe,
  Database
} from 'lucide-react'
import './App.css'

// ─── Data ──────────────────────────────────────────────────

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'SQL', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Libraries',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    title: 'Tools',
    items: ['Power BI', 'Excel', 'Tableau', 'GA4', 'n8n', 'Zapier'],
  }
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
    ],
  },
  {
    role: 'R&D Intern',
    company: 'CoCreate Ventures',
    period: 'Oct 2024 – Mar 2025',
    points: [
      'Conducted competitive research across 5+ startup domains.',
      'Samsung Innovation Challenge 2024 Finalist for AI-driven product concept.'
    ],
  }
]

const projects = [
  {
    title: 'Amazon Sales Analytics',
    stack: ['Python', 'Power BI', 'SQL'],
    summary: 'End-to-end analytics for sales performance and inventory forecasting.',
    image: 'https://images.unsplash.com/photo-1523474253046-2cd2c788f3ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Quick Commerce Analysis',
    stack: ['Python', 'Pandas', 'Seaborn'],
    summary: 'Behavioral analysis on 10k+ records to optimize category performance.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  }
]

const achievements = [
  'Samsung Innovation Challenge Finalist',
  'HackArCode National Hackathon Finalist',
  'Delivered 5+ AI workshops to 20+ students'
]

// ─── Components ───────────────────────────────────────────

const GithubRepos = ({ username }) => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [username])

  if (loading) return <div className="text-dim">Fetching live repos...</div>

  return (
    <div className="repo-grid">
      {repos.map(repo => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo-item"
          whileHover={{ borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg">{repo.name}</h4>
            <ArrowUpRight size={16} className="text-dim" />
          </div>
          <p className="text-sm text-dim mb-6 flex-grow">{repo.description || 'No description provided.'}</p>
          <div className="flex gap-4 text-xs text-dim">
            <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
            <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
            {repo.language && <span className="flex items-center gap-1"><Code2 size={12} /> {repo.language}</span>}
          </div>
        </motion.a>
      ))}
    </div>
  )
}

const BentoItem = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`bento-item ${className}`}
  >
    {children}
  </motion.div>
)

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <nav className="navbar">
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Work</a>
        <a href="#experience" className="nav-link">Exp</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <main className="bento-container" id="home">
        
        {/* Hero */}
        <BentoItem className="hero-card">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-dim uppercase tracking-widest text-[10px] mb-6 font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Available for high-impact roles
            </p>
            <h1 className="gradient-text">Engineering <br />Data Clarity.</h1>
            <p className="text-dim text-lg max-w-xl mb-12">
              I'm Manish. I transform complex data into strategic advantages through 
              rigorous analysis and high-fidelity visualization.
            </p>
            <div className="flex gap-6 items-center">
              <a href="#contact" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2">
                Connect <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/manishzzz" target="_blank" className="text-white hover:text-white/60 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/manish050" target="_blank" className="text-white hover:text-white/60 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </BentoItem>

        {/* Profile Image */}
        <BentoItem className="profile-card">
          <img src="/manish-profile.jpg" alt="Manish" className="profile-img" />
        </BentoItem>

        {/* Metrics */}
        <BentoItem className="stat-card">
          <span className="stat-value">40%</span>
          <span className="text-dim text-[10px] uppercase tracking-widest font-bold">Automation Lift</span>
        </BentoItem>

        <BentoItem className="stat-card">
          <span className="stat-value">15+</span>
          <span className="text-dim text-[10px] uppercase tracking-widest font-bold">Tech Evaluations</span>
        </BentoItem>

        {/* About / Core Stack */}
        <BentoItem className="grid-col-span-4 flex flex-col justify-center">
          <h3 className="text-xl mb-6 flex items-center gap-3"><Database size={20} className="text-white/40" /> Core Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skillGroups.flatMap(g => g.items).map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-white/10 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </BentoItem>

        {/* Achievements Section */}
        <BentoItem className="grid-col-span-4 flex flex-col justify-center">
          <h3 className="text-xl mb-6 flex items-center gap-3"><Zap size={20} className="text-white/40" /> Key Milestones</h3>
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-dim">
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </BentoItem>

        {/* Work Gallery Heading */}
        <div className="col-span-12 mt-20 mb-8" id="projects">
          <p className="text-dim uppercase tracking-[0.3em] text-[10px] font-black mb-2 px-2">Featured Projects</p>
          <h2 className="text-6xl font-bold px-1">Case Studies</h2>
        </div>

        {/* Projects */}
        {projects.map((project, i) => (
          <BentoItem key={project.title} className="project-bento" delay={i * 0.1}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl">{project.title}</h3>
              <div className="flex gap-2">
                {project.stack.map(s => <span key={s} className="text-[10px] uppercase font-black text-white/40 border border-white/5 px-3 py-1 rounded-full">{s}</span>)}
              </div>
            </div>
            <p className="text-dim text-md leading-relaxed">{project.summary}</p>
          </BentoItem>
        ))}

        {/* Experience Section */}
        <BentoItem className="experience-card mt-20" id="experience">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-5xl font-bold">Experience</h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>
          <div className="space-y-0">
            {experiences.map((exp) => (
              <div key={exp.role} className="exp-item">
                <div className="text-dim font-bold uppercase tracking-widest text-xs pt-2">{exp.period}</div>
                <div>
                  <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                  <p className="text-white/40 font-medium mb-6 uppercase text-xs tracking-tighter">{exp.company}</p>
                  <ul className="space-y-4">
                    {exp.points.map(p => (
                      <li key={p} className="text-dim text-md flex items-start gap-3">
                        <ArrowUpRight size={14} className="mt-1 text-white/20 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </BentoItem>

        {/* GitHub Live Integration */}
        <BentoItem className="github-card mt-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-4"><Github size={32} /> GitHub Ecosystem</h2>
              <p className="text-dim text-lg">Real-time repository sync directly from my developer profile.</p>
            </div>
            <a href="https://github.com/manishzzz" target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/10 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
              Live Feed <Globe size={14} />
            </a>
          </div>
          <GithubRepos username="manishzzz" />
        </BentoItem>

        {/* Education & Credentials */}
        <BentoItem className="cert-card">
          <div className="flex items-center gap-3 mb-8">
            <Award size={24} className="text-white/40" />
            <h3 className="text-2xl font-bold">Credentials</h3>
          </div>
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase font-black text-white/20 mb-1">State Board</p>
              <h4 className="text-lg group-hover:text-white transition-colors">12th Grade Board Certificate</h4>
              <p className="text-dim text-sm mt-1">Higher Secondary Examination Record</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase font-black text-white/20 mb-1">State Board</p>
              <h4 className="text-lg group-hover:text-white transition-colors">10th Grade Board Certificate</h4>
              <p className="text-dim text-sm mt-1">SSLC Examination Record</p>
            </div>
          </div>
        </BentoItem>

        <BentoItem className="cert-card">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={24} className="text-white/40" />
            <h3 className="text-2xl font-bold">Academic</h3>
          </div>
          <div className="border-l-2 border-white/5 pl-6 py-2">
             <h4 className="text-xl font-bold">B.E. Computer Science</h4>
             <p className="text-dim text-sm mt-1 leading-relaxed">
               Vivekananda College of Engineering & Technology. <br />
               Focus on Algorithms, Data Structures, and Analytics.
             </p>
          </div>
        </BentoItem>

        {/* Contact CTA */}
        <BentoItem className="col-span-12 bg-white text-black mt-20 py-32 text-center" id="contact">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl font-bold mb-8 tracking-tighter">Let's create <br />something exceptional.</h2>
            <p className="text-black/50 text-xl mb-16 max-w-2xl mx-auto font-medium">
              Open for Data Analytics roles, AI research partnerships, and strategic consulting.
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              <a href="mailto:manishmaniyadhav@gmail.com" className="text-3xl font-black hover:opacity-50 transition-opacity border-b-4 border-black">Email</a>
              <a href="https://linkedin.com/in/manish050" className="text-3xl font-black hover:opacity-50 transition-opacity border-b-4 border-black">LinkedIn</a>
              <a href="https://github.com/manishzzz" className="text-3xl font-black hover:opacity-50 transition-opacity border-b-4 border-black">GitHub</a>
            </div>
          </motion.div>
        </BentoItem>

      </main>

      <footer className="py-20 text-center text-dim text-xs uppercase tracking-[0.5em] font-black opacity-30">
        <p>© 2026 Manish · Kasaragod, India</p>
      </footer>
    </div>
  )
}

export default Portfolio
