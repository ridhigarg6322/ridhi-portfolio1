import { ArrowDown, ArrowUpRight, Linkedin, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'SelectFi',
    period: 'July 2026 — Present',
    description:
      'Work on frontend and backend tickets across the admin panel and embeddable widget SDK in a production TypeScript codebase. Integrated Mixpanel alongside Google Analytics to improve tracking of widget interactions.',
    tags: ['TypeScript', 'JavaScript', 'React', 'Mixpanel'],
  },
  {
    role: 'Student-in-Residence (Internship)',
    company: 'MascotGO',
    period: 'January 2026 — August 2026',
    description:
      'Evaluated app user experience and shared structured feedback with the product team. Supported student and educator outreach and helped communicate user needs to the development team.',
    tags: ['UX Feedback', 'Product', 'User Research'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Company Project',
    type: 'Professional project · Coming soon',
    description:
      'A project developed during my internship. Details and a public write-up will be added when the work is complete and approved for sharing.',
    tags: ['Details to be added'],
    status: 'Coming soon',
  },
  {
    number: '02',
    title: 'Map Utilities',
    type: 'Course project · University at Buffalo',
    description:
      'Implemented graph-based map utilities, including shortest-path and range-based intersection searches.',
    tags: ['Java', 'Graphs', 'Algorithms'],
    status: 'Academic project',
  },
  {
    number: '03',
    title: 'Game of Life',
    type: 'Course project · University at Buffalo',
    description:
      'Built a grid-based simulation in C, working with two-dimensional arrays, memory, and generation updates.',
    tags: ['C', 'Memory', 'Data structures'],
    status: 'Academic project',
  },
]

const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'] },
  { group: 'Frameworks & tools', items: ['React', 'Git', 'GitHub', 'Linux', 'Unix', 'IntelliJ IDEA', 'Mixpanel', 'Linear'] },
  { group: 'Focus', items: ['Front-End Development', 'Back-End Development', 'Data Structures & Algorithms', 'Cybersecurity'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu}>RG<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href="/Ridhi-Garg-Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE STUDENT · UB HONORS COLLEGE</div>
            <h1>Hi, I'm Ridhi<span className="blue-period">.</span><br /><span className="headline-muted">I build things</span><br />for the web.</h1>
            <p className="hero-description">
              I'm a Computer Science student at the University at Buffalo's Honors College. At SelectFi, I work on frontend and backend features in a production TypeScript codebase. I'm focused on software engineering and interested in cybersecurity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowDown size={15} /></a>
            </div>
            <div className="hero-meta">
              <span>Based in Buffalo, NY</span>
              <span className="meta-divider" />
              <span>Open to learning & building</span>
            </div>
          </div>
          <div className="hero-aside">
            <div className="orbit-card">
              <div className="orbit-topline"><span>CURRENTLY</span><span>2026 — 2027</span></div>
              <div className="orbit-mark">RG<span>.</span></div>
              <div className="orbit-bottom">
                <div><strong>Software Engineering Intern</strong><small>SelectFi</small></div>
                <span className="arrow-circle"><ArrowUpRight size={18} /></span>
              </div>
            </div>
            <div className="floating-note"><span className="note-icon">✳</span><span>Curious by nature.<br /><b>Always learning.</b></span></div>
            <div className="hero-index">01 / 05</div>
          </div>
        </section>

        <div className="ticker"><span>SOFTWARE</span><i>✳</i><span>ENGINEERING</span><i>✳</i><span>CYBERSECURITY</span><i>✳</i><span>PROBLEM SOLVING</span></div>

        <section className="content-section section-wrap" id="about">
          <div className="section-label"><span>01</span> ABOUT</div>
          <div className="about-grid">
            <h2>Building my skills,<br /><span>one project at a time.</span></h2>
            <div className="about-copy">
              <p>I'm pursuing a B.S. in Computer Science at the University at Buffalo's Honors College, where I'm developing a strong foundation in programming, algorithms, and problem solving.</p>
              <p>Outside the classroom, I’ve worked on software features at SelectFi and evaluated product experiences at MascotGO. I enjoy learning how products are built and improving the experience for the people using them.</p>
              <div className="about-facts">
                <div><strong>UB</strong><small>University at Buffalo</small></div>
                <div><strong>2029</strong><small>Expected graduation</small></div>
                <div><strong>CS</strong><small>Bachelor of Science</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="experience">
          <div className="section-label"><span>02</span> EXPERIENCE</div>
          <div className="section-heading-row"><h2>Where I've <span>worked.</span></h2><p>Learning by contributing to real teams and products.</p></div>
          <div className="experience-list">
            {experiences.map((job, index) => (
              <article className="experience-item" key={job.company}>
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-title-row"><h3>{job.role}</h3><span>{job.period}</span></div>
                  <div className="company-name">{job.company}</div>
                  <p>{job.description}</p>
                  <div className="tag-row">{job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
                <ArrowUpRight className="experience-arrow" size={19} />
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <div className="section-heading-row"><h2>Things I've <span>worked on.</span></h2><p>A mix of professional and academic projects.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top"><span>{project.number} / PROJECT</span><span className="project-status">{project.status}</span></div>
                <div className="project-art"><div className="art-grid" /><span className="art-monogram">{project.number}</span><ArrowUpRight size={22} className="art-arrow" /></div>
                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-label"><span>04</span> TOOLKIT</div>
          <div className="section-heading-row"><h2>Tools I <span>work with.</span></h2><p>Technologies I've used in coursework and projects.</p></div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-group" key={skill.group}>
                <h3>{skill.group}</h3>
                <div className="skill-items">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-label"><span>05</span> CONTACT</div>
            <h2>Have something<br />in mind<span>?</span></h2>
            <p>I'm always happy to connect, learn about opportunities, or talk about technology.</p>
            <a className="button button-light" href="mailto:ridhigarg7989@gmail.com">Say hello <ArrowUpRight size={16} /></a>
            <div className="contact-bottom">
              <span>Ridhi Garg · Buffalo, NY</span>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/ridhi-garg-369371332/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="mailto:ridhigarg7989@gmail.com" aria-label="Email"><Mail size={18} /></a>
              </div>
              <span>© 2026 Ridhi Garg</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App