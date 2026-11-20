import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  focusAreas,
  journeyMilestones,
  projects,
  social,
  technologies,
  testimonials,
} from '../constants';
import { aboutParagraphs, profileIntro } from '../constants/about';
import { contactEmail } from '../constants/cityLocations';
import RichText from './RichText';
import style from './styles/portfolioPanel.module.css';

function Person({ item }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className={failed ? style.personPlain : style.person}>
      {!failed && (
        <img src={item.image} alt="" onError={() => setFailed(true)} />
      )}
      <div>
        <h3>{item.name}</h3>
        <p className={style.country}>{item.country}</p>
        <a href={item.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn profile
        </a>
      </div>
      <blockquote className={style.quote}>{item.text}</blockquote>
    </article>
  );
}

Person.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

function ProfileSection() {
  return (
    <>
      {/* <p className={style.intro}>
        Hi, I&apos;m
        {' '}
        {profileIntro.name}
      </p>
      <p className={style.alias}>
        Also known as
        {' '}
        {profileIntro.alias}
      </p> */}
      {/* <p className={style.role}>{profileIntro.role}</p> */}
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className={style.copy}>
          <RichText text={paragraph} />
        </p>
      ))}
    </>
  );
}

function TestimonialsSection() {
  return (
    <>
      <h3 className={style.sectionTitle}>Testimonials</h3>
      <p className={style.lead}>
        Notes from people I have built with — collaborators across teams and time zones.
      </p>
      {testimonials.map((item) => (
        <Person key={item.id} item={item} />
      ))}
    </>
  );
}

function ProjectsSection() {
  const [openId, setOpenId] = useState(projects[0] ? projects[0].id : null);
  return (
    <>
      <h3 className={style.sectionTitle}>My Recent Works</h3>
      {projects.map((project) => {
        const open = openId === project.id;
        return (
          <article key={project.id} className={style.project}>
            <div className={style.media}>
              <img src={project.img} alt={`${project.name} screenshot`} />
            </div>
            <h3>{project.name}</h3>
            <p className={open ? style.description : `${style.description} ${style.clamp}`}>
              {project.desc}
            </p>
            <button
              type="button"
              className={style.textButton}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : project.id)}
            >
              {open ? 'Show less' : 'Read more'}
            </button>
            <ul className={style.tech} aria-label="Technologies">
              {project.tech.map((item) => (
                <li key={item} className={style.chip}>{item}</li>
              ))}
            </ul>
            <p className={style.links}>
              <a href={project.source_link} target="_blank" rel="noreferrer">
                Source, opens in a new tab
              </a>
              <a href={project.live_link} target="_blank" rel="noreferrer">
                Live site, opens in a new tab
              </a>
            </p>
          </article>
        );
      })}
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <p className={style.lead}>Here are a few technologies I&apos;ve been working with recently:</p>
      <div className={style.techGrid}>
        {technologies.map((item) => (
          <div key={item.name} className={style.techItem}>
            <img src={item.icon} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <h3 className={style.sectionTitle}>What I Work On</h3>
      <p className={style.lead}>
        A quick look at the engineering problems and systems I spend most of my time working on.
      </p>
      {focusAreas.map((area) => (
        <article key={area.id} className={style.focus}>
          <img src={area.icon} alt="" />
          <h3>{area.title}</h3>
          <p>{area.text}</p>
        </article>
      ))}
    </>
  );
}

function ExperienceSection() {
  return (
    <>
      <h3 className={style.sectionTitle}>My Journey</h3>
      <p className={style.lead}>
        A non-traditional path into software engineering — shaped by deliberate choices,
        consistent learning, and real production work.
      </p>
      <ol className={style.timeline}>
        {journeyMilestones.map((milestone) => (
          <li key={milestone.id} className={style.milestone}>
            <time className={style.period} dateTime={milestone.dateTime}>{milestone.period}</time>
            <h3>{milestone.title}</h3>
            <p>{milestone.description}</p>
            <ul className={style.tags} aria-label="Milestone categories">
              {milestone.tags.map((tag) => (
                <li key={tag} className={style.tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    const node = event.target;
    if (!node.checkValidity()) return;
    event.preventDefault();
    node.submit();
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <h3 className={style.sectionTitle}>Get in Touch!</h3>
      <p className={style.lead}>
        I&apos;m always excited to hear about new opportunities and collaborations.
        Don&apos;t hesitate to reach out and let&apos;s make something great.
      </p>
      {contactEmail ? (
        <p>
          <a className={style.mail} href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      ) : (
        <div className={style.placeholder}>
          <strong>Placeholder</strong>
          <p>
            Email — add your address in
            {' '}
            <code>src/constants/cityLocations.js</code>
            {' '}
            as contactEmail.
          </p>
        </div>
      )}
      <ul className={style.socials}>
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.name}
              , opens in a new tab
            </a>
          </li>
        ))}
      </ul>
      <form
        className={style.form}
        action="https://formspree.io/f/mgeqgkdd"
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="city-contact-name">
          Name
          <input
            id="city-contact-name"
            name="name"
            type="text"
            required
            maxLength="30"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="city-contact-email">
          Email
          <input
            id="city-contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="city-contact-message">
          Message
          <textarea
            id="city-contact-message"
            name="message"
            required
            maxLength="500"
            value={form.message}
            onChange={handleChange}
          />
        </label>
        <button className={style.submit} type="submit">Get in touch</button>
      </form>
    </>
  );
}

const sections = {
  profile: ProfileSection,
  testimonials: TestimonialsSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  contact: ContactSection,
};

export default function PortfolioPanel({ location, onClose }) {
  const reduce = useReducedMotion();
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const closeRef = useRef(null);
  const Section = sections[location.id];

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    closeRef.current?.focus();
  }, [location.id]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll('button, a, input, textarea');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, location.id]);

  return (
    <motion.aside
      ref={dialogRef}
      className={style.panel}
      role="dialog"
      aria-modal="false"
      aria-labelledby="portfolio-panel-title"
      style={{ '--accent': location.color }}
      initial={reduce ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 1 } : { opacity: 0, x: 24 }}
      transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 280, damping: 32 }}
    >
      <header className={style.header}>
        <div>
          <p className={style.kicker}>{location.sign}</p>
          <h2 id="portfolio-panel-title">{location.name}</h2>
          <p className={style.summary}>{location.summary}</p>
        </div>
        <button ref={closeRef} type="button" className={style.close} onClick={onClose}>
          Back to city
        </button>
      </header>
      <div ref={bodyRef} className={style.body}>
        {Section ? <Section /> : null}
      </div>
    </motion.aside>
  );
}

PortfolioPanel.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sign: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
