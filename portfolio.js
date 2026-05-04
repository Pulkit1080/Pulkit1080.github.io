// ─── Data ────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    when: "Jan 2026 - Present",
    role: "Business Ops & Strategy Intern",
    org: "Biiibo Inc. · Toronto",
    tags: ["Python", "ERP Next", "Automation", "Category strategy"],
    bullets: [
      "Reduced catalogue processing time by 35% by building Python scripts for ERP image upload and validation.",
      "Identified 64% zero-sales SKUs and key ABC revenue drivers by analyzing 2 years of sales data using Python, enabling portfolio rationalization.",
      "Improved product classification accuracy by developing a structured category mapping system covering multiple categories across 100+ products.",
    ],
  },
  {
    when: "Jan 2025 - April 2026",
    role: "MBA Candidate",
    org: "Schulich · York University",
    tags: ["Strategy", "Finance", "Case comps", "Athletics Director"],
    bullets: [
      "1st place, Dean's Cup 2025-26 Round 1 · Top-3 every round.",
      "Athletics Director, Graduate Business Council.",
      "Dean's Entrance Award · Stewart Family Scholarship.",
      "1st place Ivey Soccer Cup 2025-26 (Team Captain)",
    ],
  },
  {
    when: " Dec 2020 - Dec 2024",
    role: "Business Technology Associate → Associate Consultant",
    org: "ZS Associates · Gurugram",
    tags: [
      "Tableau",
      "QlikView",
      "Qlik Sense",
      "SQL",
      "AWS Athena",
      "Python",
      "Excel",
      "Agile",
    ],
    bullets: [
      "1,000+ QlikView enhancements · 15 executive dashboards.",
      "Cut testing turnaround by ~50%, building intermediate Athena tables on S3 to pre-stage validation queries.",
      "4 enterprise Tableau dashboards adopted by global commercial teams at a top-10 US pharma.",
      "Led 3-person Agile team · onboarded 5+ junior associates.",
    ],
  },
  {
    when: "Aug 2017 - July 2021",
    role: "BSc Computer Science & Engineering",
    org: "Indraprastha University · 9/10 CGPA",
    tags: ["Unity / C#", "Web dev", "ML"],
    bullets: [
      "3rd / 450 at Unite India Gamethon 2019.",
      "Game dev, full-stack web, applied ML.",
    ],
  },
];

const PROJECTS = [
  {
    cat: "strategy",
    title: "MBA Case Competitions",
    desc: "Decks from Schulich Dean's Cup: FableAI, oneRBC, Blanc Labs, Optimus SBR.",
    meta: "Schulich · 2025–26",
    img: "assets/deans-cup-r1-winners.png",
    contain: false,
    gallery: [
      "assets/slide-fableai.png",
      "assets/slide-rbc-hsbc.png",
      "assets/slide-rbc-3s.png",
      "assets/slide-blanc-labs.png",
      "assets/slide-blanc-risks.png",
      "assets/slide-optimus-cdm.png",
    ],
    problem:
      "Four cases across the Dean's Cup 2025-26: Agentic AI in financial services (R1), Canadian banking M&A (R2), AI-enabled lending (R3), and consulting strategy (Finale, the only live round).",
    approach:
      "Each case: 4-person team, senior industry judges, compressed sprint. Won R1; top-3 every round.",
    metrics: [
      ["1st", "Round 1"],
      ["Top-3", "every round"],
      ["4", "rounds"],
      ["Accenture", "judges"],
    ],
    links: [
      {
        label: "R1 Deck · FableAI",
        href: "assets/KeepinItCaseual_DeansCup_Round1.pdf",
      },
      {
        label: "R2 Deck · oneRBC",
        href: "assets/DeansCup_R2_KeepinItCaseual_Deck.pdf",
      },
      {
        label: "R3 Deck · Blanc Labs",
        href: "assets/DeansCup_R3_KeepinItCaseual_Deck.pdf",
      },
      {
        label: "Finale Deck · Optimus",
        href: "assets/DeansCup_Finale_KeepinItCaseual_Deck.pdf",
      },
    ],
  },
  {
    cat: "analytics",
    title: "Commercial KPI Tableau Suite",
    desc: "4 enterprise dashboards used by global commercial teams to track KPIs, pipeline performance, and revenue trends.",
    meta: "ZS · Pharma · 2024",
    img: "assets/tableau-mock.svg",
    contain: false,
    problem:
      "Commercial leaders had no single pipeline-to-revenue view across geographies. KPIs lived in Excel and decks.",
    approach:
      "Scoped requirements with 4 stakeholder groups, designed the semantic layer, shipped 4 Tableau dashboards, ran hypercare.",
    metrics: [
      ["4", "dashboards"],
      ["12+", "stakeholders"],
      ["Tableau", "+ Qlik Sense"],
      ["Pharma", "global rollout"],
    ],
  },
  {
    cat: "analytics",
    title: "QlikView Testing Optimization",
    desc: "Cut SQL validation time by ~50% by automating queries and optimizing AWS Athena workflows.",
    meta: "ZS · 2020–23",
    img: "assets/qlik-dashboard.png",
    contain: false,
    problem:
      "Validation across a sprawling QlikView stack: slow loads, expensive ad-hoc SQL, defects piling up against tight SLAs.",
    approach:
      "Built intermediate tables in S3 + AWS Athena to pre-stage validation queries. Repeatable test scaffolding instead of one-off SQL. Restructured data models, codified review standards, mentored juniors.",
    metrics: [
      ["~50%", "faster testing"],
      ["1,000+", "enhancements"],
      ["15", "exec dashboards"],
      ["50+", "defects closed"],
    ],
  },
  {
    cat: "product",
    title: "Biiibo Catalogue Automation",
    desc: "Automated ERP workflows, built a scalable product taxonomy, and improved data accuracy across thousands of SKUs using Python and structured audits.",
    meta: "Biiibo · 2026",
    img: "assets/biiibo-storefront.png",
    contain: false,
    problem:
      "Manual image upload, validation, and category tagging across 100+ SKUs was the bottleneck.",
    approach:
      "Python scripts for ERP Next image handoff + validation. Category-mapping taxonomy. Zero-sales SKU analysis.",
    metrics: [
      ["-35%", "ops time"],
      ["64%", "zero-sales SKUs"],
      ["100+", "products"],
      ["2 yrs", "data analyzed"],
    ],
  },
];

const WINS = [
  {
    rank: "1",
    sup: "st",
    where: "Dean's Cup · Round 1",
    detail: "Schulich · 2025–26",
    img: "assets/deans-cup-r1-team.jpg",
  },
  {
    rank: "1",
    sup: "st",
    where: "Ivey Soccer Tournament",
    detail: "Captain · Schulich, 2026",
    img: "assets/soccer-team.jpg",
  },
  {
    rank: "3",
    sup: "rd",
    where: "Unite India Gamethon",
    detail: "3rd / 450 nationally · 2019",
    img: "assets/unite-india-gamethon.png",
  },
];

// ─── Render Experience ──────────────────────────────────────────
const expList = document.getElementById("exp-list");
if (expList) {
  EXPERIENCE.forEach((e) => {
    const el = document.createElement("div");
    el.className = "exp-row reveal";
    el.innerHTML = `
      <div class="when">${e.when}</div>
      <div class="what">
        <div class="role">${e.role}</div>
        <div class="org">${e.org}</div>
        <div class="tags">${e.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <div class="why">
        <ul>${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>
    `;
    expList.appendChild(el);
  });
}

// ─── Render Projects ────────────────────────────────────────────
const projList = document.getElementById("proj-list");
if (projList) {
  PROJECTS.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "proj-card reveal";
    card.dataset.cat = p.cat;

    const visualHTML = p.img
      ? `<div class="proj-visual ${p.contain ? "contain" : ""}"><span class="stamp">${p.meta}</span><img src="${p.img}" alt="" /></div>`
      : `<div class="proj-visual" style="background: repeating-linear-gradient(45deg, var(--paper-2) 0 14px, var(--paper) 14px 28px); display:flex; align-items:flex-end; padding:16px;"><span class="stamp">${p.meta}</span></div>`;

    const galleryHTML = p.gallery
      ? `<div class="proj-gallery">${p.gallery.map((g) => `<img src="${g}" alt="" />`).join("")}</div>`
      : "";

    const linksHTML = p.links
      ? `<div class="proj-links">${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label} &#8599;</a>`).join("")}</div>`
      : "";

    card.innerHTML = `
      <div class="proj-head" role="button" tabindex="0" aria-expanded="false">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <span class="title">${p.title}</span>
        <span class="desc">${p.desc}</span>
        <span class="meta">${p.meta}</span>
        <span class="chev" aria-hidden="true">+</span>
      </div>
      <div class="proj-body"><div><div class="proj-body-inner">
        <div>
          ${visualHTML}
          ${galleryHTML}
        </div>
        <div class="proj-detail">
          <div class="proj-metrics">
            ${p.metrics.map(([v, k]) => `<div class="proj-metric"><div class="v">${v}</div><div class="k">${k}</div></div>`).join("")}
          </div>
          <h4>Problem</h4><p>${p.problem}</p>
          <h4>Approach</h4><p>${p.approach}</p>
          ${linksHTML}
        </div>
      </div></div></div>
    `;
    projList.appendChild(card);

    const head = card.querySelector(".proj-head");
    const toggle = () => {
      card.classList.toggle("open");
      head.setAttribute("aria-expanded", card.classList.contains("open"));
    };
    head.addEventListener("click", toggle);
    head.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });

  function updateCount() {
    const visible = projList.querySelectorAll(
      ".proj-card:not([hidden])",
    ).length;
    const total = PROJECTS.length;
    document.getElementById("filter-count").textContent =
      `${visible} of ${total}`;
  }
  updateCount();

  document.querySelectorAll(".proj-filters .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".proj-filters .filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.f;
      projList.querySelectorAll(".proj-card").forEach((c) => {
        c.hidden = !(f === "all" || c.dataset.cat === f);
        if (c.hidden) c.classList.remove("open");
      });
      updateCount();
    });
  });
}

// ─── Render Wins ────────────────────────────────────────────────
const winsGrid = document.getElementById("wins-grid");
if (winsGrid) {
  WINS.forEach((w, i) => {
    const el = document.createElement("div");
    el.className = "win reveal";
    el.innerHTML = `
      <div class="pill">0${i + 1}</div>
      <div class="win-thumb"><img src="${w.img}" alt="" /></div>
      <div class="rank">${w.rank}<sup>${w.sup}</sup></div>
      <div class="where">${w.where}</div>
      <div class="detail">${w.detail}</div>
    `;
    winsGrid.appendChild(el);
  });
}

// ─── Scroll reveal ───────────────────────────────────────────
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ─── Smooth scroll ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ─── Mobile nav toggle ──────────────────────────────────────
const navToggle = document.querySelector(".nav-toggle");
const navLinksEl = document.querySelector(".nav-links");
if (navToggle && navLinksEl) {
  navToggle.addEventListener("click", () => {
    navLinksEl.classList.toggle("active");
    navToggle.classList.toggle("active");
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksEl.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });
}

// ─── Active nav tracking ─────────────────────────────────────
const navAnchors = document.querySelectorAll(".nav-links a");
const sectionIds = Array.from(navAnchors).map((a) =>
  a.getAttribute("href").slice(1),
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.15, rootMargin: "-80px 0px -45% 0px" },
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

// ─── Skill filters ───────────────────────────────────────────
document.querySelectorAll(".skill-filters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".skill-filters .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.skill;
    document.querySelectorAll(".skill-col").forEach((col) => {
      if (f === "all" || col.dataset.skill === f) {
        col.style.opacity = "1";
        col.style.transform = "none";
      } else {
        col.style.opacity = "0.25";
        col.style.transform = "scale(0.97)";
      }
    });
  });
});

// ─── Lightbox ────────────────────────────────────────────────
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox ? lightbox.querySelector("img") : null;

if (lightbox && lightboxImg) {
  document
    .querySelectorAll(
      ".portrait img, .beyond-card .img img, .community-photo img, .win-thumb img, .proj-visual img, .proj-gallery img",
    )
    .forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
