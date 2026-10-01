const experienceTracks = [
  {
    number: '01',
    title: 'C# / .NET',
    description:
      'Backend workflows for importing inventory data and making its history easier to inspect.',
    bullets: [
      'Implemented inventory-import and import-history APIs with request validation, SQL Server staging through SqlBulkCopy, database transactions, and stored-procedure calls.',
      'Added import-file storage/download and history filtering, then standardized response messages for Angular localization.',
      'Centralized public URL generation for approval and recovery flows, and passed frontend URLs through notification handling.',
    ],
    technologies: ['C#', '.NET', 'EF Core', 'SQL Server'],
  },
  {
    number: '02',
    title: 'Angular / TypeScript',
    description:
      'Product-facing workflows that connect file data, validation feedback, and shared UI behavior.',
    bullets: [
      'Built Excel import configuration, column mapping, preview, row validation, and error-file export with SheetJS; added the import-history UI.',
      'Implemented Vietnamese/English localization with Transloco, including runtime language switching and shared component translations.',
      'Integrated existing pagination and filtering into asset-management lists, and improved notification deep links and purchase-order terms dropdowns.',
    ],
    technologies: ['Angular', 'TypeScript', 'Transloco', 'SheetJS'],
  },
];

const projects = [
  {
    number: '01',
    type: 'Team project',
    title: 'FastFood Delivery Microservices',
    href: 'https://github.com/foodfast-delivery-microservice/FastfoodDelivery-microservice-monorepo',
    demoHref: 'https://foodfast-delivery-microservice.github.io/FastfoodDelivery-microservice-monorepo/',
    demoNote: 'Interface demo with sample data. API, login, and ordering are disabled.',
    stack: 'Java / Spring Boot / RabbitMQ',
    description:
      'A collaborative delivery platform where I worked on account recovery and notification behavior across services.',
    bullets: [
      'Implemented email OTP verification with expiry and resend limits, plus password recovery with expiring reset tokens.',
      'Implemented RabbitMQ-driven email notification flows; added JUnit/Mockito notification tests and fixed mocking/assertion issues in order and payment tests.',
    ],
  },
  {
    number: '02',
    type: 'Collaborative project',
    title: 'Smart Personal Finance Management System',
    href: 'https://github.com/Anphan0612/Smart-Personal-Finance-Management-System',
    demoHref: 'https://anphan0612.github.io/Smart-Personal-Finance-Management-System/',
    demoNote: 'Interface demo with sample data. API and write actions are disabled.',
    stack: 'Spring Boot / FastAPI / MySQL / React Native',
    description:
      'My work included dashboard grouping and error handling in Vietnamese transaction and receipt processing.',
    bullets: [
      'Updated backend dashboard logic to group weekly trends by weekday.',
      'Added CPU fallback and inference error handling in Vietnamese transaction extraction; improved CPU/CUDA model loading with CPU fallback for receipt OCR text correction.',
    ],
  },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#main-content" aria-label="Phan Quoc An home">
            <span className="brand-mark" aria-hidden="true">
              AN
            </span>
            <span className="brand-name">PHAN QUỐC AN</span>
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">BACKEND DEVELOPER · 2026</p>
            <h1 id="hero-title">
              Phan
              <span>Quốc An.</span>
            </h1>
            <p className="hero-lede">
              I build practical backend features and the product workflows around
              them — from Java/Spring Boot services to C#/.NET APIs and Angular
              interfaces.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">
                See my contributions <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Anphan0612?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repositories <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <aside className="hero-index" aria-label="Areas of focus">
            <div className="index-heading">
              <span>INDEX</span>
              <span>FOCUS</span>
            </div>
            <div className="index-list">
              <div className="index-item">
                <span className="index-number">01</span>
                <span>Backend APIs</span>
              </div>
              <div className="index-item">
                <span className="index-number">02</span>
                <span>Product workflows</span>
              </div>
              <div className="index-item">
                <span className="index-number">03</span>
                <span>Data handling</span>
              </div>
            </div>
            <p className="index-note">
              Based in Ho Chi Minh City
              <br />
              Open to Junior Backend roles
            </p>
          </aside>
        </section>

        <div className="shell rule" aria-hidden="true" />

        <section
          className="section shell experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-intro">
            <SectionLabel number="01">Experience</SectionLabel>
            <h2 id="experience-title">Product work, close to the code.</h2>
            <p>
              My internship contribution at HeraLabs covered both the API layer
              and the user workflows that depend on it: inventory imports,
              localization, and navigation.
            </p>
          </div>

          <article className="experience-entry">
            <div className="experience-meta">
              <p className="meta-date">JUN — AUG 2026</p>
              <p className="meta-company">HeraLabs</p>
              <p className="meta-role">Software Engineer Intern</p>
            </div>

            <div className="experience-body">
              <div className="entry-heading">
                <p className="eyebrow">Existing asset &amp; inventory product</p>
                <h3>Feature contributions across backend and frontend.</h3>
              </div>
              <div className="contribution-grid">
                {experienceTracks.map((track) => (
                  <div className="contribution-column" key={track.number}>
                    <div className="contribution-heading">
                      <span className="track-number">{track.number}</span>
                      <h4>{track.title}</h4>
                    </div>
                    <p className="contribution-description">{track.description}</p>
                    <ul>
                      {track.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <div
                      className="tag-list"
                      aria-label={`${track.title} technologies`}
                    >
                      {track.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section
          className="section shell projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-intro section-intro-wide">
            <SectionLabel number="02">Selected projects</SectionLabel>
            <h2 id="projects-title">Systems I learned by building with others.</h2>
            <p>
              My contributions to collaborative projects, from account recovery
              and notifications to transaction-processing features.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-entry" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p className="project-stack">{project.stack}</p>
                  <p className="project-description">{project.description}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="project-demo-note">
                    <span aria-hidden="true">●</span> {project.demoNote}
                  </p>
                </div>
                <div className="project-actions">
                  <a
                    className="project-demo-button"
                    href={project.demoHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open live demo <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-grid">
            <div>
              <SectionLabel number="03">About &amp; contact</SectionLabel>
              <h2 id="contact-title">Let’s build useful backend systems.</h2>
              <p className="contact-lede">
                I am an IT student at Sai Gon University in Ho Chi Minh City,
                Vietnam, expecting to graduate in 2027. I am looking for a Junior
                Backend Developer opportunity where I can keep turning real
                product requirements into dependable code.
              </p>
            </div>

            <div className="contact-details">
              <p className="contact-label">Get in touch</p>
              <a href="mailto:quocanphan123@gmail.com">quocanphan123@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/an-phan-quoc-4307782b5/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/Anphan0612"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <p className="contact-location">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>PHAN QUỐC AN</span>
          <span>BACKEND / JAVA / .NET</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}
