const portfolio = {
  meta: {
    title: "Asif Dar - Senior Software Engineer",
    description:
      "Portfolio of Asif Dar, Senior Software Engineer specializing in Angular, Spring Boot, and Node.js.",
  },
  nav: {
    logo: "ASIF<span>.</span>DAR",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
    ],
    cta: { label: "Hire Me", href: "mailto:asifdar.cuk@gmail.com" },
  },
  hero: {
    eyebrow: "Available for opportunities",
    name: "Asif Dar",
    role: "Senior Software Engineer",
    tagline:
      "Full-stack engineer with 4+ years building scalable, production-grade applications. Specializing in Angular, Java Spring Boot, and Node.js with a passion for clean architecture and measurable impact.",
    ctas: [
      { label: "View My Work", href: "#experience", className: "btn-primary" },
      { label: "Get In Touch", href: "mailto:asifdar.cuk@gmail.com", className: "btn-outline" },
    ],
    stats: [
      { value: "4+", color: "accent", label: "Years of Experience" },
      { value: "35%", color: "green", label: "Performance Gain Delivered" },
      { value: "60%", color: "red", label: "Testing Cycle Reduction" },
      { value: "10K+", color: "gold", label: "Daily Reports Processed" },
    ],
    badge: {
      mutedText: "Currently @",
      strongText: "CitiusTech Healthcare",
      location: "Bangalore, India",
    },
  },
  about: {
    title: "Who I Am",
    paragraphs: [
      "I'm a Senior Software Engineer based in India, with deep expertise in building healthcare-grade, enterprise-scale applications. My work lives at the intersection of robust backend systems and fluid, intuitive frontends.",
      "At CitiusTech, I architect radiology workflow systems that serve 50+ healthcare facilities - processing thousands of reports daily with 99.9% uptime. I'm particularly proud of leading a full AngularJS to Angular migration and reducing manual testing effort by 60% through BDD automation.",
      "I thrive in Agile teams, mentor junior engineers, and champion clean architecture practices. When I'm not shipping features, I'm learning, building, and refining my craft.",
    ],
    contacts: [
      { label: "email", href: "mailto:asifdar.cuk@gmail.com", text: "asifdar.cuk@gmail.com" },
      { label: "phone", href: "tel:+919086811422", text: "+91 9086811422" },
      { label: "github", href: "https://github.com/AsifAhmadDar", text: "github.com/AsifAhmadDar", external: true },
      { label: "linkedin", href: "https://linkedin.com/in/iamasifdar", text: "linkedin.com/in/iamasifdar", external: true },
    ],
    certifications: [
      {
        icon: "🏆",
        name: "Best Performance Award Q3 2024",
        by: "CitiusTech - Top Performer in Engineering",
      },
      { icon: "⚡", name: "Angular Certified Developer", by: "CitiusTech" },
      { icon: "☁️", name: "AWS Cloud Practitioner", by: "Amazon Web Services" },
      { icon: "📊", name: "Google Analytics Certification", by: "Google" },
    ],
  },
  skills: [
    {
      title: "Frontend",
      tags: [
        ["Angular", "tag-accent"],
        ["TypeScript", "tag-accent"],
        ["RxJS", "tag-accent"],
        ["NgRx", "tag-accent"],
        ["React", "tag-accent"],
        ["HTML5", "tag-accent"],
        ["CSS3", "tag-accent"],
        ["JavaScript ES6+", "tag-muted"],
      ],
    },
    {
      title: "Backend",
      tags: [
        ["Java 21", "tag-green"],
        ["Spring Boot", "tag-green"],
        ["Node.js", "tag-green"],
        ["Express.js", "tag-green"],
        ["C#", "tag-green"],
        [".NET Core 7", "tag-green"],
        ["REST APIs", "tag-muted"],
        ["Microservices", "tag-muted"],
      ],
    },
    {
      title: "Cloud & DevOps",
      tags: [
        ["AWS EC2", "tag-gold"],
        ["AWS S3", "tag-gold"],
        ["AWS CodePipeline", "tag-gold"],
        ["GCP", "tag-gold"],
        ["Docker", "tag-gold"],
        ["Jenkins", "tag-muted"],
        ["Git", "tag-muted"],
        ["Firebase", "tag-muted"],
      ],
    },
    {
      title: "Databases & Testing",
      tags: [
        ["MongoDB", "tag-red"],
        ["MySQL", "tag-red"],
        ["SQL Server", "tag-red"],
        ["PostgreSQL", "tag-red"],
        ["Jasmine", "tag-muted"],
        ["Karma", "tag-muted"],
        ["Jest", "tag-muted"],
        ["Selenium BDD", "tag-muted"],
      ],
    },
  ],
  experience: [
    {
      period: "Mar 2024 - Present",
      company: "CitiusTech Healthcare",
      location: "Bangalore, India",
      role: "Senior Software Engineer",
      current: true,
      bullets: [
        "Architected Radiology Workflow Management System serving 50+ healthcare facilities for diagnostic imaging, patient records, and reporting",
        "Built scalable RESTful APIs and microservices with Java 21 and Spring Boot, processing 10,000+ radiology reports daily at 99.9% uptime",
        "Designed Angular components with RxJS for real-time data sync, boosting radiologist productivity by 40%",
        "Led migration of 60% legacy AngularJS 1.x codebase to modern Angular with full backward compatibility",
        "Implemented end-to-end BDD automation with Selenium, reducing manual testing effort by 60%",
        "Drove component-based refactoring, improving code reusability 45% and cutting bundle size 30%",
        "Integrated DICOM imaging systems and HL7 interfaces ensuring HIPAA compliance",
        "Mentored junior developers on Angular best practices, RxJS patterns, and Spring Boot development",
      ],
      stack: [
        ["Angular", "tag-accent"],
        ["TypeScript", "tag-accent"],
        ["RxJS", "tag-accent"],
        ["Java 21", "tag-green"],
        ["Spring Boot", "tag-green"],
        ["SQL Server", "tag-red"],
        ["Docker", "tag-gold"],
        ["AWS", "tag-gold"],
        ["Selenium", "tag-muted"],
        ["BDD", "tag-muted"],
      ],
    },
    {
      period: "Oct 2021 - Mar 2024",
      company: "LeLafe IT Solutions",
      location: "Jammu & Kashmir, India",
      role: "Software Engineer",
      current: false,
      bullets: [
        "Built Dynamic Forms and Workflow Engine enabling no-code form creation for enterprise clients, reducing dev time by 70%",
        "Developed rich reusable Angular UI components with NgRx state management for 20+ enterprise clients across education and finance",
        "Created real-time education platform for 5,000+ students with online classes, attendance tracking, and registrations",
        "Implemented microservices backend using Node.js, Express.js, and .NET Core 7 with MongoDB and SQL Server",
        "Achieved 85% unit test coverage with Jasmine and Karma, significantly reducing production bugs",
        "Deployed on AWS EC2 with S3 storage and Docker containerization, integrating Stripe, SMS, and cloud storage APIs",
      ],
      stack: [
        ["Angular", "tag-accent"],
        ["NgRx", "tag-accent"],
        ["Node.js", "tag-green"],
        [".NET Core 7", "tag-green"],
        ["MongoDB", "tag-red"],
        ["AWS", "tag-gold"],
        ["Docker", "tag-gold"],
        ["Jasmine", "tag-muted"],
      ],
    },
  ],
  projects: [
    {
      index: "01 / Healthcare",
      title: "Radiology Workflow Platform",
      cardClass: "p1",
      desc: "Enterprise-grade radiology management system connecting 50+ healthcare facilities, built for diagnostic imaging, patient records, and report generation.",
      highlights: [
        "Angular + Java Spring Boot microservices",
        "DICOM, HL7, and PACS integration",
        "BDD Selenium compliance test suite",
        "99.9% uptime, 10K+ daily reports",
      ],
      stack: [
        ["Angular", "tag-accent"],
        ["Spring Boot", "tag-green"],
        ["DICOM", "tag-muted"],
        ["HIPAA", "tag-muted"],
      ],
    },
    {
      index: "02 / Enterprise SaaS",
      title: "Dynamic Forms Builder",
      cardClass: "p2",
      desc: "No-code form builder allowing drag-and-drop creation of complex forms with validation rules and automated workflows, adopted by 20+ enterprise clients.",
      highlights: [
        "JSON schema-based form definitions",
        "70% reduction in client dev time",
        "Angular + NgRx + MongoDB backend",
        "From weeks to hours per custom form",
      ],
      stack: [
        ["Angular", "tag-accent"],
        ["NgRx", "tag-accent"],
        ["Node.js", "tag-green"],
        ["MongoDB", "tag-red"],
      ],
    },
    {
      index: "03 / EdTech",
      title: "Education Management System",
      cardClass: "p3",
      desc: "Real-time online education platform supporting video streaming, attendance, assignments, and grade management for 5,000+ students and 200+ instructors.",
      highlights: [
        "Role-based access control (RBAC)",
        "MEAN stack + AWS auto-scaling",
        "10,000+ concurrent user support",
        "Live class, attendance and grade modules",
      ],
      stack: [
        ["Angular", "tag-accent"],
        ["Node.js", "tag-green"],
        ["MongoDB", "tag-red"],
        ["AWS", "tag-gold"],
      ],
    },
  ],
  education: {
    title: "Academic Background",
    icon: "🎓",
    degree: "B.Tech in Computer Science & Engineering",
    school: "Central University of Kashmir",
    meta: "Jammu & Kashmir, India - Nov 2017 to Oct 2021 - CGPA: 7.1/10",
    coursework:
      "Object Oriented Programming - Databases - Discrete Mathematics - Data Structures & Algorithms - Operating Systems - Computer Networks - Web Development",
  },
  awards: [
    { emoji: "🏆", title: "Best Performance Award Q3 2024", by: "CitiusTech - Top Engineer" },
    { emoji: "⚡", title: "Angular Certified Developer", by: "CitiusTech" },
    { emoji: "☁️", title: "AWS Cloud Practitioner", by: "Amazon Web Services" },
    { emoji: "📊", title: "Google Analytics Certification", by: "Google" },
  ],
  footer: {
    name: "Asif",
    surname: "Dar",
    tagline: "// Senior Software Engineer - Full-Stack - Healthcare Tech",
    links: [
      { href: "mailto:asifdar.cuk@gmail.com", label: "asifdar.cuk@gmail.com" },
      { href: "tel:+919086811422", label: "+91 9086811422" },
      { href: "https://github.com/AsifAhmadDar", label: "GitHub", external: true },
      { href: "https://linkedin.com/in/iamasifdar", label: "LinkedIn", external: true },
    ],
    copy: "Designed & built with care - 2025",
  },
};

function renderTags(tags) {
  return tags
    .map(function (item) {
      return '<span class="tag ' + item[1] + '">' + item[0] + "</span>";
    })
    .join("");
}

function renderLink(link, className) {
  const targetAttrs = link.external ? ' target="_blank" rel="noreferrer"' : "";
  return '<a class="' + className + '" href="' + link.href + '"' + targetAttrs + ">" + link.label + "</a>";
}

function applyMeta(meta) {
  document.title = meta.title;

  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }
  description.setAttribute("content", meta.description);
}

function buildPortfolio(data) {
  const app = document.getElementById("app");
  if (!app) {
    return;
  }

  app.innerHTML = `
    <nav>
      <a class="nav-logo" href="#hero">${data.nav.logo}</a>
      <ul class="nav-links">
        ${data.nav.links.map(function (tab) {
          return "<li>" + renderLink(tab, "") + "</li>";
        }).join("")}
      </ul>
      ${renderLink(data.nav.cta, "nav-cta")}
    </nav>

    <div id="hero">
      <div class="hero-grid">
        <div class="hero-left">
          <div class="hero-eyebrow">${data.hero.eyebrow}</div>
          <h1 class="hero-name">
            ${data.hero.name}
            <span class="line2">${data.hero.role}</span>
          </h1>
          <p class="hero-tagline">${data.hero.tagline}</p>
          <div class="hero-ctas">
            ${data.hero.ctas.map(function (cta) {
              return renderLink(cta, cta.className);
            }).join("")}
          </div>
        </div>

        <div class="hero-right">
          <div class="stat-grid">
            ${data.hero.stats.map(function (stat) {
              return '<div class="stat-card"><div class="stat-num ' + stat.color + '">' + stat.value + '</div><div class="stat-label">' + stat.label + "</div></div>";
            }).join("")}
          </div>
          <div class="hero-badge">
            <div class="badge-dot"></div>
            <span style="color: var(--muted); font-family: var(--font-mono); font-size: 0.8rem;">
              ${data.hero.badge.mutedText} <strong style="color: var(--text);">${data.hero.badge.strongText}</strong> - ${data.hero.badge.location}
            </span>
          </div>
        </div>
      </div>
    </div>

    <section id="about">
      <div class="section-label">About</div>
      <h2 class="section-title">${data.about.title}</h2>
      <div class="about-grid">
        <div class="about-text fade-in">
          ${data.about.paragraphs.map(function (paragraph) {
            return "<p>" + paragraph + "</p>";
          }).join("")}
          <div class="about-contact">
            ${data.about.contacts.map(function (item) {
              const attrs = item.external ? ' target="_blank" rel="noreferrer"' : "";
              return '<a class="contact-item" href="' + item.href + '"' + attrs + '><span class="ci-label">' + item.label + "</span>" + item.text + "</a>";
            }).join("")}
          </div>
        </div>
        <div class="fade-in">
          <div class="certs-block">
            ${data.about.certifications.map(function (cert) {
              return '<div class="cert-item"><div class="cert-icon">' + cert.icon + '</div><div><div class="cert-name">' + cert.name + '</div><div class="cert-by">' + cert.by + "</div></div></div>";
            }).join("")}
          </div>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="section-label">Skills</div>
      <h2 class="section-title">Tech Stack</h2>
      <div class="skills-layout fade-in">
        ${data.skills.map(function (group) {
          return '<div class="skill-group"><div class="skill-group-title">' + group.title + '</div><div class="skill-tags">' + renderTags(group.tags) + "</div></div>";
        }).join("")}
      </div>
    </section>

    <section id="experience">
      <div class="section-label">Experience</div>
      <h2 class="section-title">Where I've Worked</h2>
      <div class="exp-timeline">
        ${data.experience.map(function (item) {
          return '<div class="exp-item fade-in"><div class="exp-meta"><div class="exp-period">' + item.period + '</div><div class="exp-company">' + item.company + '</div><div class="exp-location">' + item.location + '</div></div><div class="exp-content"><div class="exp-role">' + item.role + (item.current ? '<span class="current-badge">Current</span>' : '') + '</div><ul class="exp-bullets">' + item.bullets.map(function (bullet) { return '<li>' + bullet + '</li>'; }).join('') + '</ul><div class="exp-stack">' + renderTags(item.stack) + '</div></div></div>';
        }).join("")}
      </div>
    </section>

    <section id="projects">
      <div class="section-label">Projects</div>
      <h2 class="section-title">What I've Built</h2>
      <div class="projects-grid">
        ${data.projects.map(function (project) {
          return '<div class="project-card ' + project.cardClass + ' fade-in"><div class="project-num">' + project.index + '</div><div class="project-title">' + project.title + '</div><p class="project-desc">' + project.desc + '</p><ul class="project-highlights">' + project.highlights.map(function (highlight) { return '<li>' + highlight + '</li>'; }).join('') + '</ul><div class="exp-stack">' + renderTags(project.stack) + '</div></div>';
        }).join("")}
      </div>
    </section>

    <section id="education">
      <div class="section-label">Education</div>
      <h2 class="section-title">${data.education.title}</h2>
      <div class="edu-card fade-in">
        <div class="edu-icon">${data.education.icon}</div>
        <div>
          <div class="edu-degree">${data.education.degree}</div>
          <div class="edu-school">${data.education.school}</div>
          <div class="edu-meta">${data.education.meta}</div>
          <div class="edu-courses">
            <strong style="color: var(--muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em;">Relevant Coursework</strong><br>
            ${data.education.coursework}
          </div>
        </div>
      </div>
    </section>

    <section id="awards">
      <div class="section-label">Recognition</div>
      <h2 class="section-title">Awards & Certifications</h2>
      <div class="awards-grid">
        ${data.awards.map(function (award) {
          return '<div class="award-card fade-in"><div class="award-emoji">' + award.emoji + '</div><div class="award-title">' + award.title + '</div><div class="award-by">' + award.by + '</div></div>';
        }).join("")}
      </div>
    </section>

    <footer>
      <div class="footer-name">${data.footer.name}<span>.</span>${data.footer.surname}</div>
      <div class="footer-tagline">${data.footer.tagline}</div>
      <div class="footer-links">
        ${data.footer.links.map(function (link) {
          return renderLink(link, "");
        }).join("")}
      </div>
      <div class="footer-copy">${data.footer.copy}</div>
    </footer>
  `;
}

function startFadeInObserver() {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach(function (element) {
    observer.observe(element);
  });
}

applyMeta(portfolio.meta);
buildPortfolio(portfolio);
startFadeInObserver();
