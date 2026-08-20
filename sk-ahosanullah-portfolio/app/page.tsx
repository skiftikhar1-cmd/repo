"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Code2, Github, Youtube, Facebook, Mail, Phone,
  MapPin, Terminal, ShieldCheck, Cpu, Download, Send, Menu, X,
  ExternalLink, ChevronDown
} from "lucide-react";

const skills = [
  { name: "Python", level: 88, icon: "🐍" },
  { name: "Linux", level: 82, icon: "🐧" },
  { name: "Cyber Security", level: 78, icon: "🛡️" },
  { name: "Kali Linux", level: 80, icon: "⚡" },
  { name: "C++", level: 72, icon: "⚙️" },
  { name: "Java", level: 68, icon: "☕" },
  { name: "HTML / CSS", level: 90, icon: "🌐" },
  { name: "Git & GitHub", level: 76, icon: "🔗" },
];

const socials = {
  github: "https://github.com/skiftikhar1-cmd/RFB-tic-tac-toe",
  facebook: "https://www.facebook.com/sk.iftikhar.391825",
  youtube: "https://youtube.com/@risefrombroken?si=jTkKt6lWUFQ4W2Ve",
};

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submitContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setSent(false);

    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      e.currentTarget.reset();
      setSent(true);
    } catch {
      alert("Message could not be sent. Please configure Supabase first.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <div className="bg-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <nav className="nav">
        <a href="#home" className="logo"><span>SK</span> Ahosanullah</a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((x) => (
            <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>{x}</a>
          ))}
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={16}/></a>
      </nav>

      <section id="home" className="hero section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="hero-copy"
        >
          <div className="eyebrow"><span className="pulse-dot" /> Available for learning & projects</div>
          <h1>Hi, I&apos;m <span>SK Ahosanullah</span></h1>
          <h2>Computer Science & Technology Student <span className="blink">_</span></h2>
          <p>
            I&apos;m an aspiring developer passionate about programming, Linux, cybersecurity,
            and building useful digital experiences. I love learning by creating real projects.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View My Work <ArrowUpRight size={18}/></a>
            <a className="btn ghost" href="#contact">Contact Me <Mail size={18}/></a>
          </div>
          <div className="social-row">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .9, delay: .15 }}
          className="hero-card-wrap"
        >
          <div className="code-card">
            <div className="code-top"><div><i/><i/><i/></div><span>portfolio.py</span><Code2 size={16}/></div>
            <pre>{`class Developer:
    name = "SK Ahosanullah"
    field = "CST"
    passion = [
        "Python",
        "Linux",
        "Cyber Security",
        "Web Development"
    ]

    def keep_learning(self):
        return True

>>> developer.keep_learning()
True ✓`}</pre>
          </div>
          <div className="floating-tag tag-one"><Terminal size={16}/> Linux</div>
          <div className="floating-tag tag-two"><ShieldCheck size={16}/> Cyber Security</div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <div className="section-head"><span>01 / ABOUT</span><h2>My Journey</h2></div>
        <div className="about-grid">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 25 }} viewport={{ once: true }} className="about-text">
            <p>
              I completed my Primary Education from a Government Primary School and then
              completed my SSC from <strong>Rajghat Jafourpur Secondary School</strong>.
              I achieved a GPA of <strong>5.00</strong> in SSC and <strong>4.50</strong> in PSC.
            </p>
            <p>
              Currently, I am pursuing a <strong>Diploma in Computer Science & Technology</strong>
              at <strong>Akij Engineering Institute</strong>. I am continuously developing my
              programming and technical skills with a strong interest in software development,
              Linux, and cybersecurity.
            </p>
            <p>
              My goal is to become a highly skilled software developer and use technology to
              build meaningful products and solve real-world problems.
            </p>
          </motion.div>
          <div className="stats">
            <div className="stat"><strong>5.00</strong><span>SSC GPA</span></div>
            <div className="stat"><strong>4.50</strong><span>PSC GPA</span></div>
            <div className="stat"><strong>8+</strong><span>Technical Skills</span></div>
            <div className="stat"><strong>∞</strong><span>Learning Mindset</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head"><span>02 / SKILLS</span><h2>What I Work With</h2></div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .05 }}
            >
              <div className="skill-top"><span className="skill-icon">{skill.icon}</span><strong>{skill.name}</strong><span>{skill.level}%</span></div>
              <div className="bar"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head"><span>03 / PROJECTS</span><h2>Things I&apos;ve Built</h2></div>
        <motion.a
          href={socials.github} target="_blank" rel="noreferrer"
          className="project-card"
          whileHover={{ y: -6 }}
        >
          <div className="project-icon"><Code2 size={30}/></div>
          <div className="project-info">
            <div className="project-label">GitHub Project</div>
            <h3>RFB Tic-Tac-Toe</h3>
            <p>A Tic-Tac-Toe project published on GitHub. Check out the source code and explore my development work.</p>
            <div className="chips"><span>Programming</span><span>GitHub</span><span>RFB</span></div>
          </div>
          <ExternalLink className="project-arrow" />
        </motion.a>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-head"><span>04 / CONTACT</span><h2>Let&apos;s Connect</h2></div>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-lead">Have a project idea, collaboration, or just want to say hello? Send me a message.</p>
            <a href="tel:+8801625575345" className="contact-item"><Phone/><div><small>Phone</small><strong>+880 1625-575345</strong></div></a>
            <a href="mailto:skiftikhar01@gmail.com" className="contact-item"><Mail/><div><small>Email</small><strong>skiftikhar01@gmail.com</strong></div></a>
            <div className="contact-item"><MapPin/><div><small>Address</small><strong>Jafourpur, Rajghat, Abhainagar, Jashore, Bangladesh</strong></div></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <input name="name" required placeholder="Your name" />
            <input name="email" type="email" required placeholder="Your email" />
            <textarea name="message" required rows={6} placeholder="Your message..." />
            <button className="btn primary" disabled={sending}>{sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"} <Send size={17}/></button>
          </form>
        </div>
      </section>

      <footer>
        <div>© {new Date().getFullYear()} SK Ahosanullah. Built with passion & code.</div>
        <div className="footer-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={socials.youtube} target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </footer>
      <a className="top-btn" href="#home"><ChevronDown size={18}/></a>
    </main>
  );
}