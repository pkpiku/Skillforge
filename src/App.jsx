import React from 'react';
import { useState } from 'react';
import './index.css';

// These are temporary examples until we add the course list from the blueprint.
const sampleCourses = [
  {
    id: 'react',
    subject: 'FRONTEND DEVELOPMENT',
    title: 'React Foundations',
    description: 'Components, props, and state—the building blocks of interactive apps.',
    color: 'mint',
    initials: 'R',
  },
  {
    id: 'javascript',
    subject: 'PROGRAMMING',
    title: 'JavaScript Essentials',
    description: 'Practice the language that brings web pages to life.',
    color: 'gold',
    initials: 'JS',
  },
  {
    id: 'web-design',
    subject: 'DESIGN',
    title: 'Web Design Basics',
    description: 'Explore layout, color, and the details that make interfaces clear.',
    color: 'lavender',
    initials: 'UI',
  },
];

function NavIcon({ name }) {
  if (name === 'dashboard') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h6" />
    </svg>
  );
}

function Sidebar({ activePage, onNavigate }) {
  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'courses', label: 'Courses' },
  ];

  return (
    <aside className="sidebar">
      <div className="brand-lockup" aria-label="SkillForge">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span className="brand-copy">
          <strong>SkillForge</strong>
          <span>Learn by building</span>
        </span>
      </div>

      <p className="nav-label">YOUR SPACE</p>
      <nav className="primary-nav" aria-label="Main navigation">
        {links.map((link) => (
          <button
            className={`nav-link ${activePage === link.id ? 'is-active' : ''}`}
            key={link.id}
            type="button"
            aria-current={activePage === link.id ? 'page' : undefined}
            onClick={() => onNavigate(link.id)}
          >
            <NavIcon name={link.id} />
            <span>{link.label}</span>
            {link.id === 'courses' && <span className="nav-count">03</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-note">
        <span className="sidebar-note-icon" aria-hidden="true">✳</span>
        <p>Small steps. <strong>Real skills.</strong></p>
      </div>

      <div className="sidebar-footer">
        <span className="avatar" aria-hidden="true">SF</span>
        <span><strong>My learning space</strong><small>Growing one project at a time</small></span>
      </div>
    </aside>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className={`course-art ${course.color}`} aria-hidden="true">
        <span>{course.initials}</span>
        <i />
      </div>
      <div className="course-content">
        <p className="course-subject">{course.subject}</p>
        <h3>{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <span className="sample-label"><span /> Starter example</span>
      </div>
    </article>
  );
}

function PageHeading({ title, description, action }) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow">YOUR LEARNING SPACE</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {action}
    </div>
  );
}

function Dashboard({ onNavigate }) {
  return (
    <>
      <PageHeading
        title="Dashboard"
        description="A place to learn at your own pace and turn ideas into projects."
        action={(
          <button className="button button-outline" type="button" onClick={() => onNavigate('courses')}>
            Explore courses <span aria-hidden="true">↗</span>
          </button>
        )}
      />

      <section className="welcome-card" aria-labelledby="welcome-title">
        <div className="welcome-copy">
          <span className="welcome-kicker"><span /> YOUR NEXT CHAPTER</span>
          <h2 id="welcome-title">Learn something.<br />Build something.</h2>
          <p>Every skill gets stronger when you put it to work. Start with a topic that interests you.</p>
          <button className="button button-light" type="button" onClick={() => onNavigate('courses')}>
            Find a course <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="welcome-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-card">
            <span className="visual-card-label">THE SKILL LOOP</span>
            <div className="skill-loop">
              <span>Learn</span><i>→</i><span>Practice</span><i>→</i><span>Build</span>
            </div>
            <div className="visual-line"><span /></div>
            <p>Progress, made by you.</p>
          </div>
          <span className="visual-sparkle sparkle-one">✳</span>
          <span className="visual-sparkle sparkle-two">✦</span>
        </div>
      </section>

      <section className="courses-section" aria-labelledby="starter-courses-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A PLACE TO BEGIN</p>
            <h2 id="starter-courses-title">Explore a few examples</h2>
          </div>
          <button className="text-button" type="button" onClick={() => onNavigate('courses')}>
            View courses <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="section-note">These are sample cards to shape the first screen. We can replace them with the real SkillForge course plan.</p>
        <div className="course-grid">
          {sampleCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
    </>
  );
}

function Courses() {
  return (
    <>
      <PageHeading
        title="Courses"
        description="Choose a subject and build your understanding one lesson at a time."
      />
      <section className="courses-section course-page-section" aria-labelledby="all-courses-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STARTER CATALOG</p>
            <h2 id="all-courses-title">Explore topics</h2>
          </div>
          <span className="catalog-count">03 examples</span>
        </div>
        <p className="section-note">The catalog below is placeholder content. We’ll shape the actual topics and course flow from your blueprint.</p>
        <div className="course-grid">
          {sampleCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="workspace">
        <div className="workspace-inner">
          <div className="mobile-brand">
            <span className="brand-mark" aria-hidden="true">S</span>
            <strong>SkillForge</strong>
          </div>
          {activePage === 'dashboard'
            ? <Dashboard onNavigate={setActivePage} />
            : <Courses />}
          <footer className="page-footer">SkillForge <span>·</span> Learn by building</footer>
        </div>
      </main>
    </div>
  );
}
