const PROJECTS = [
    {
        title: "AI Burnrate Tool",
        description: "Real-time local token and API-equivalent cost tracker for Antigravity CLI, Claude Code, and Codex CLI, complete with a live React web dashboard and CLI reporter.",
        image: "./assets/projects/ai-burnrate.webp",
        width: 906,
        height: 546,
        alt: "AI Burnrate Tool web dashboard preview",
        category: "ai-python",
        featured: true,
        tags: ["React", "CLI", "Token Telemetry", "Developer Tools"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/ai-burnrate-tool", icon: "github" },
            { label: "Live Demo", url: "https://cise07.github.io/ai-burnrate-tool/", icon: "external" }
        ]
    },
    {
        title: "Android Sim Racing Dashboard",
        description: "Real-time GT3-style Android telemetry dashboard built with Kotlin and Jetpack Compose, powered by a low-latency Python WebSocket bridge for PC racing sims.",
        image: "./assets/projects/racing-dashboard.webp",
        width: 1104,
        height: 692,
        alt: "Android GT3 Sim Racing telemetry dashboard",
        category: "web-mobile",
        featured: true,
        tags: ["Kotlin", "Jetpack Compose", "Python", "WebSockets"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/android-racing-dashboard", icon: "github" }
        ]
    },
    {
        title: "bE-More — Smart Energy System",
        description: "Contest-winning fullstack IoT platform integrating Arduino sensors, React monitoring dashboards, and local AI analytics for greener office energy usage.",
        image: "./assets/projects/BEmore.webp",
        width: 720,
        height: 720,
        alt: "bE-More IoT energy monitoring platform",
        category: "iot-other",
        featured: false,
        tags: ["IoT", "Arduino", "React", "Local AI"],
        links: [
            { label: "Read Case Study", url: "https://medium.com/@gizano/winning-a-tech-contest-with-be-more-integrating-iot-and-local-ai-for-a-greener-office-f906ec921963", icon: "article" }
        ]
    },
    {
        title: "BMO Local AI Assistant",
        description: "Offline-first voice and chat AI assistant inspired by BMO, built in Python with local inference and optional online search capabilities.",
        image: "./assets/projects/bmo.webp",
        width: 800,
        height: 480,
        alt: "BMO Local AI Assistant interface",
        category: "ai-python",
        featured: false,
        tags: ["Python", "Local LLM", "Web Search", "WIP"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/bmo-ai-assistant", icon: "github" }
        ]
    },
    {
        title: "iOS System Status Widget",
        description: "Customizable iOS home-screen widget written in JavaScript for the Scriptable runtime, displaying live device metrics at a glance.",
        image: "./assets/projects/ios-widget.webp",
        width: 510,
        height: 490,
        alt: "iOS System Status Widget running on iPhone",
        category: "web-mobile",
        featured: false,
        tags: ["JavaScript", "iOS", "Scriptable"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/ios-system-status-widget", icon: "github" },
            { label: "Scriptable App", url: "https://scriptable.app", icon: "external" }
        ]
    },
    {
        title: "Burrows-Wheeler Calculator",
        description: "Client-server Python application implementing the Burrows-Wheeler Transform algorithm for lossless string reorganization and compression.",
        image: "./assets/projects/bwt.webp",
        width: 1536,
        height: 1024,
        alt: "Burrows-Wheeler Transform calculator interface",
        category: "ai-python",
        featured: false,
        tags: ["Python", "Client-Server", "Algorithms"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/burrows-wheeler-transform", icon: "github" }
        ]
    },
    {
        title: "Curious Traveler",
        description: "Interactive Python CLI utility that aggregates public REST APIs to generate structured travel itinerary cards in seconds.",
        image: "./assets/projects/Curious_traveler.webp",
        width: 1024,
        height: 682,
        alt: "Curious Traveler Python CLI app",
        category: "ai-python",
        featured: false,
        tags: ["Python", "REST APIs", "CLI"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/curious-traveler", icon: "github" }
        ]
    },
    {
        title: "E-Commerce SQL Simulation",
        description: "Web application modeling relational database schemas, inventory queries, and SQL operations for an online storefront.",
        image: "./assets/projects/e-commerce.webp",
        width: 1298,
        height: 756,
        alt: "E-Commerce SQL management simulation",
        category: "web-mobile",
        featured: false,
        tags: ["SQL", "Web App", "Relational DB"],
        links: [
            { label: "Repository", url: "https://github.com/Cise07/e-commerce-management-system", icon: "github" }
        ]
    },
    {
        title: "The Bench of Kindness",
        description: "Civic design initiative modeled in AutoCAD featuring an engraved peace quote, installed at ISIS Archimede in Treviglio.",
        image: "./assets/projects/kindness_bench.webp",
        width: 900,
        height: 678,
        alt: "The Bench of Kindness installed outdoors",
        category: "iot-other",
        featured: false,
        tags: ["AutoCAD", "Civic Design", "Community"],
        links: [
            { label: "Press Article", url: "https://primatreviglio.it/attualita/inaugurate-allarchimede-le-panchine-della-gentilezza/", icon: "article" }
        ]
    }
];

const CERTIFICATES = [
    {
        title: "B2 First English Certificate",
        issuer: "Cambridge Assessment English · Milano",
        image: "./assets/certificates-badges/Statement.webp",
        width: 1300,
        height: 1838,
        alt: "Cambridge B2 English Certificate Statement of Results",
        actionLabel: "Open Certificate"
    },
    {
        title: "GitHub Foundations Course",
        issuer: "Sorint.lab · Hackersgen",
        image: "./assets/certificates-badges/Github_cert.webp",
        width: 1400,
        height: 990,
        alt: "Sorint.lab Hackersgen GitHub Certificate",
        actionLabel: "Open Certificate"
    },
    {
        title: "B2 English Listening Badge",
        issuer: "Verified Competency Badge",
        image: "./assets/certificates-badges/english-listening-badge.webp",
        width: 400,
        height: 400,
        alt: "B2 English Listening Badge",
        actionLabel: "Open Badge"
    },
    {
        title: "B2 English Reading Badge",
        issuer: "Verified Competency Badge",
        image: "./assets/certificates-badges/english-reading-badge.webp",
        width: 400,
        height: 400,
        alt: "B2 English Reading Badge",
        actionLabel: "Open Badge"
    },
    {
        title: "Level 3 Italian Language Badge",
        issuer: "INVALSI Verified Proficiency",
        image: "./assets/certificates-badges/ita-badge.webp",
        width: 400,
        height: 400,
        alt: "Level 3 Italian Language Badge",
        actionLabel: "Open Badge"
    },
    {
        title: "Level 3 Mathematics Badge",
        issuer: "INVALSI Verified Proficiency",
        image: "./assets/certificates-badges/math-badge.webp",
        width: 400,
        height: 400,
        alt: "Level 3 Mathematics Badge",
        actionLabel: "Open Badge"
    }
];

const ICONS = {
    github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    external: `<svg class="icon-external" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M7 7h10v10"/></svg>`,
    article: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
};

const INITIAL_PROJECTS_LIMIT = 4;
let currentProjectFilter = "all";
let isProjectsExpanded = false;

function getCardSpanClass(index, totalVisible) {
    if (totalVisible === 2 || totalVisible === 4) {
        return " span-6";
    }
    if (totalVisible === 9) {
        if (index < 4 || index >= 7) return " span-6";
        return "";
    }
    return "";
}

function updateProjectsToggleUI(totalFiltered) {
    const wrap = document.getElementById("projectsMoreWrap");
    const btn = document.getElementById("projectsToggleBtn");
    const label = document.getElementById("projectsToggleLabel");
    const badge = document.getElementById("projectsCountBadge");
    if (!wrap || !btn || !label || !badge) return;

    const hiddenCount = Math.max(0, totalFiltered - INITIAL_PROJECTS_LIMIT);
    if (hiddenCount === 0) {
        wrap.hidden = true;
        return;
    }

    wrap.hidden = false;
    btn.setAttribute("aria-expanded", String(isProjectsExpanded));

    if (isProjectsExpanded) {
        label.textContent = "Show fewer projects";
        badge.hidden = true;
    } else {
        label.textContent = `Show ${hiddenCount} more ${hiddenCount === 1 ? "project" : "projects"}`;
        badge.textContent = `+${hiddenCount}`;
        badge.hidden = false;
    }
}

function renderProjects(filter = currentProjectFilter, options = {}) {
    const { animateAll = false, animateFromIndex = Infinity } = options;
    currentProjectFilter = filter;

    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const filtered = filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter);

    const visibleCount = isProjectsExpanded
        ? filtered.length
        : Math.min(filtered.length, INITIAL_PROJECTS_LIMIT);

    updateProjectsToggleUI(filtered.length);

    grid.innerHTML = filtered.map((project, idx) => {
        const isExtraHidden = !isProjectsExpanded && idx >= INITIAL_PROJECTS_LIMIT;
        const hiddenClass = isExtraHidden ? " is-extra-hidden" : "";
        const spanClass = getCardSpanClass(idx, visibleCount);
        const shouldAnimate = !isExtraHidden && (animateAll || idx >= animateFromIndex);
        const animDelayIdx = animateAll ? idx : Math.max(0, idx - animateFromIndex);
        const filterAnimClass = shouldAnimate ? " is-filtering" : "";
        const featuredBadge = project.featured ? `<span class="featured-badge">Featured</span>` : "";
        const tagsHtml = project.tags
            .map((tag) => `<li class="tech-tag">${tag}</li>`)
            .join("");
        const linksHtml = project.links
            .map((link, index) => {
                const variant = index === 0 && project.featured ? "btn-primary" : "btn-secondary";
                return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn ${variant} btn-sm">${ICONS[link.icon] || ICONS.external}<span>${link.label}</span></a>`;
            })
            .join("");

        return `
            <article class="project-card${spanClass}${hiddenClass}${filterAnimClass}" style="--card-idx: ${animDelayIdx}">
                <div class="project-media">
                    <img src="${project.image}" alt="${project.alt}" width="${project.width}" height="${project.height}" loading="lazy" decoding="async">
                    ${featuredBadge}
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <ul class="tag-list project-tags" aria-label="${project.title} technologies">${tagsHtml}</ul>
                    <div class="project-links">${linksHtml}</div>
                </div>
            </article>
        `;
    }).join("");
}

function renderCertificates() {
    const list = document.getElementById("certificatesList");
    if (!list) return;

    list.innerHTML = CERTIFICATES.map((cert) => `
        <article class="cert-item">
            <div class="cert-thumb">
                <img src="${cert.image}" alt="${cert.alt}" width="${cert.width}" height="${cert.height}" loading="lazy" decoding="async">
            </div>
            <div class="cert-info">
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-meta">${cert.issuer}</p>
            </div>
            <a href="${cert.image}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="${cert.actionLabel}: ${cert.title}">
                <span>${cert.actionLabel}</span>
                ${ICONS.external}
            </a>
        </article>
    `).join("");
}

function syncGliderVars(container, target, prefix) {
    if (!container || !target) return;
    let x = 0;
    let y = 0;
    let w = 0;
    let h = 0;

    if (target.offsetParent === container) {
        x = target.offsetLeft;
        y = target.offsetTop;
        w = target.offsetWidth;
        h = target.offsetHeight;
    } else {
        const cRect = container.getBoundingClientRect();
        const tRect = target.getBoundingClientRect();
        x = tRect.left - cRect.left;
        y = tRect.top - cRect.top;
        w = tRect.width;
        h = tRect.height;
    }

    if (w === 0 || h === 0) return;

    container.style.setProperty(`--${prefix}-x`, `${x.toFixed(1)}px`);
    container.style.setProperty(`--${prefix}-y`, `${y.toFixed(1)}px`);
    container.style.setProperty(`--${prefix}-w`, `${w.toFixed(1)}px`);
    container.style.setProperty(`--${prefix}-h`, `${h.toFixed(1)}px`);
    container.style.setProperty(`--${prefix}-opacity`, "1");
    container.dataset.gliderReady = "true";
}

function initThemeToggle() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const toggle = document.getElementById("themeToggle");
    if (!meta || !toggle) return;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const getStoredScheme = () => {
        try {
            const val = localStorage.getItem("color-scheme");
            return val === "light" || val === "dark" ? val : null;
        } catch {
            return null;
        }
    };

    const syncThemeColorMeta = (scheme) => {
        const metas = document.querySelectorAll('meta[name="theme-color"]');
        if (metas.length === 0) return;
        const resolved = scheme === "light" || scheme === "dark"
            ? scheme
            : (systemDark.matches ? "dark" : "light");
        const color = resolved === "dark" ? "#120e24" : "#edf0f8";
        metas.forEach((m) => {
            m.removeAttribute("media");
            m.content = color;
        });
    };

    toggle.addEventListener("click", () => {
        const stored = getStoredScheme();
        const currentScheme = stored ?? (systemDark.matches ? "dark" : "light");
        const targetScheme = currentScheme === "dark" ? "light" : "dark";
        const systemScheme = systemDark.matches ? "dark" : "light";

        toggle.classList.remove("is-switching");
        void toggle.offsetWidth;
        toggle.classList.add("is-switching");

        if (targetScheme === systemScheme) {
            try {
                localStorage.removeItem("color-scheme");
            } catch {}
            meta.content = "light dark";
            syncThemeColorMeta("light dark");
        } else {
            try {
                localStorage.setItem("color-scheme", targetScheme);
            } catch {}
            meta.content = targetScheme;
            syncThemeColorMeta(targetScheme);
        }
    });

    systemDark.addEventListener("change", () => {
        if (!getStoredScheme()) {
            syncThemeColorMeta("light dark");
        }
    });

    window.addEventListener("storage", (event) => {
        if (event.key === "color-scheme") {
            const val = event.newValue;
            const next = val === "light" || val === "dark" ? val : "light dark";
            meta.content = next;
            syncThemeColorMeta(next);
        }
    });
}

function initNavigation() {
    const header = document.getElementById("siteHeader");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("primaryNav");
    const navList = document.getElementById("navList");
    const navLinks = document.querySelectorAll(".nav-link");

    const updateScrollHeader = () => {
        if (header) {
            header.classList.toggle("is-scrolled", window.scrollY > 24);
        }
    };
    updateScrollHeader();
    window.addEventListener("scroll", updateScrollHeader, { passive: true });

    const getActiveNavLink = () =>
        document.querySelector(".nav-menu a:target-current") ||
        document.querySelector(".nav-menu a.target-current") ||
        navLinks[0];

    const syncActiveNavPill = () => {
        const active = getActiveNavLink();
        if (navList && active) {
            syncGliderVars(navList, active, "pill");
        }
    };

    const mobileQuery = window.matchMedia("(max-width: 860px)");

    const setMenuOpen = (open) => {
        if (!navToggle || !navMenu) return;
        const isMobile = mobileQuery.matches;
        const effectiveOpen = isMobile ? open : false;

        navMenu.classList.toggle("is-open", effectiveOpen);
        navMenu.inert = isMobile ? !effectiveOpen : false;
        navToggle.setAttribute("aria-expanded", String(effectiveOpen));
        navToggle.setAttribute("aria-label", effectiveOpen ? "Close navigation menu" : "Open navigation menu");
        if (effectiveOpen) {
            requestAnimationFrame(syncActiveNavPill);
        }
    };

    const closeMenu = () => setMenuOpen(false);
    setMenuOpen(false);

    const activateAndScrollToLink = (link, shouldScrollSection = false, delayCloseMs = 0) => {
        if (!link) return;
        navLinks.forEach((item) => {
            const active = item === link;
            item.classList.toggle("target-current", active);
            item.classList.remove("is-scrub-hover");
            item.setAttribute("aria-current", String(active));
        });
        if (navList) {
            navList.style.setProperty("--hover-opacity", "0");
            syncGliderVars(navList, link, "pill");
        }

        if (shouldScrollSection) {
            const targetId = link.getAttribute("href");
            const smooth = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
            if (targetId === "#top") {
                window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
            } else {
                const targetEl = targetId ? document.querySelector(targetId) : null;
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
                }
            }
            if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        }

        if (delayCloseMs > 0) {
            setTimeout(closeMenu, delayCloseMs);
        } else {
            closeMenu();
        }
    };

    if (navToggle && navMenu) {
        let scrubState = null;
        let suppressToggleClickUntil = 0;
        let suppressLinkClickUntil = 0;

        const clearScrubHover = () => {
            navLinks.forEach((item) => item.classList.remove("is-scrub-hover"));
            if (navList) navList.style.setProperty("--hover-opacity", "0");
        };

        const updateScrubPosition = (clientX, clientY) => {
            if (!scrubState) return;
            const hit = document.elementFromPoint(clientX, clientY);
            const hoveredLink = hit ? hit.closest(".nav-link") : null;

            if (hoveredLink && navMenu.contains(hoveredLink)) {
                scrubState.enteredMenu = true;
                if (scrubState.hoveredLink !== hoveredLink) {
                    navLinks.forEach((item) => item.classList.remove("is-scrub-hover"));
                    hoveredLink.classList.add("is-scrub-hover");
                    scrubState.hoveredLink = hoveredLink;
                    if (navList) syncGliderVars(navList, hoveredLink, "hover");
                }
            } else if (scrubState.hoveredLink) {
                clearScrubHover();
                scrubState.hoveredLink = null;
            }
        };

        const beginMobileScrub = (event, startedFromToggle) => {
            if (!mobileQuery.matches) return;
            if (event.button !== undefined && event.button !== 0) return;

            const wasOpen = navMenu.classList.contains("is-open");
            if (startedFromToggle && !wasOpen) {
                setMenuOpen(true);
            }

            scrubState = {
                pointerId: event.pointerId,
                startedFromToggle,
                wasOpen,
                enteredMenu: !startedFromToggle,
                startX: event.clientX,
                startY: event.clientY,
                moved: false,
                hoveredLink: null
            };

            try {
                event.currentTarget.setPointerCapture(event.pointerId);
            } catch {}

            if (!startedFromToggle) {
                updateScrubPosition(event.clientX, event.clientY);
            }
        };

        const moveMobileScrub = (event) => {
            if (!scrubState || event.pointerId !== scrubState.pointerId) return;
            const dist = Math.hypot(event.clientX - scrubState.startX, event.clientY - scrubState.startY);
            if (dist > 6) scrubState.moved = true;
            if (scrubState.startedFromToggle && !scrubState.moved) return;
            updateScrubPosition(event.clientX, event.clientY);
        };

        const endMobileScrub = (event) => {
            if (!scrubState || event.pointerId !== scrubState.pointerId) return;
            const state = scrubState;
            scrubState = null;

            if (state.startedFromToggle) {
                suppressToggleClickUntil = Date.now() + 450;
                if (state.hoveredLink) {
                    suppressLinkClickUntil = Date.now() + 450;
                    activateAndScrollToLink(state.hoveredLink, true, 140);
                } else if (state.wasOpen && !state.moved) {
                    closeMenu();
                } else {
                    clearScrubHover();
                }
                return;
            }

            if (state.hoveredLink && (state.moved || event.pointerType === "touch")) {
                suppressLinkClickUntil = Date.now() + 450;
                activateAndScrollToLink(state.hoveredLink, true, 140);
            } else {
                clearScrubHover();
            }
        };

        const cancelMobileScrub = (event) => {
            if (!scrubState || event.pointerId !== scrubState.pointerId) return;
            scrubState = null;
            clearScrubHover();
            syncActiveNavPill();
        };

        navToggle.addEventListener("pointerdown", (e) => beginMobileScrub(e, true));
        navToggle.addEventListener("pointermove", moveMobileScrub);
        navToggle.addEventListener("pointerup", endMobileScrub);
        navToggle.addEventListener("pointercancel", cancelMobileScrub);

        navMenu.addEventListener("pointerdown", (e) => beginMobileScrub(e, false));
        navMenu.addEventListener("pointermove", moveMobileScrub);
        navMenu.addEventListener("pointerup", endMobileScrub);
        navMenu.addEventListener("pointercancel", cancelMobileScrub);

        navToggle.addEventListener("click", (event) => {
            if (Date.now() < suppressToggleClickUntil) {
                event.preventDefault();
                return;
            }
            const willOpen = !navMenu.classList.contains("is-open");
            setMenuOpen(willOpen);
        });

        document.addEventListener("pointerdown", (event) => {
            if (!navMenu.classList.contains("is-open")) return;
            if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
                closeMenu();
            }
        });

        if (header) {
            header.addEventListener("focusout", (event) => {
                if (!navMenu.classList.contains("is-open")) return;
                if (event.relatedTarget && !header.contains(event.relatedTarget)) {
                    closeMenu();
                }
            });
        }

        mobileQuery.addEventListener("change", () => {
            scrubState = null;
            setMenuOpen(false);
            requestAnimationFrame(syncActiveNavPill);
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                if (Date.now() < suppressLinkClickUntil) {
                    return;
                }
                activateAndScrollToLink(link, true);
            });

            link.addEventListener("pointerenter", () => {
                if (!mobileQuery.matches && navList) {
                    syncGliderVars(navList, link, "hover");
                }
            });
        });

        if (navList) {
            navList.addEventListener("pointerleave", () => {
                navList.style.setProperty("--hover-opacity", "0");
            });
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
                closeMenu();
                navToggle.focus();
            }
        });
    }

    const sections = document.querySelectorAll("main section[id]");
    const supportsScrollTargetGroup =
        typeof CSS !== "undefined" &&
        typeof CSS.supports === "function" &&
        CSS.supports("scroll-target-group: auto");

    if (supportsScrollTargetGroup) {
        const syncAriaCurrent = () => {
            const currentLink = document.querySelector(".nav-menu a:target-current");
            navLinks.forEach((link) => {
                link.setAttribute("aria-current", link === currentLink ? "true" : "false");
            });
            syncActiveNavPill();
        };
        syncAriaCurrent();
        window.addEventListener("scroll", syncActiveNavPill, { passive: true });
        document.addEventListener("scrollend", syncAriaCurrent);
    } else if ("IntersectionObserver" in window && sections.length > 0) {
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const activeId = `#${entry.target.id}`;
                    navLinks.forEach((link) => {
                        const isActive = link.getAttribute("href") === activeId;
                        link.classList.toggle("target-current", isActive);
                        link.setAttribute("aria-current", String(isActive));
                    });
                    syncActiveNavPill();
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );
        sections.forEach((section) => spy.observe(section));
    }

    requestAnimationFrame(syncActiveNavPill);
    document.fonts?.ready?.then(syncActiveNavPill);
    window.addEventListener("resize", syncActiveNavPill, { passive: true });
    if ("ResizeObserver" in window && navList) {
        new ResizeObserver(syncActiveNavPill).observe(navList);
    }
}

function initFiltersAndCopy() {
    const filterBar = document.getElementById("projectFilters");
    const toggleBtn = document.getElementById("projectsToggleBtn");
    const prefersMotion = window.matchMedia("(prefers-reduced-motion: no-preference)");

    if (filterBar) {
        const filterChips = filterBar.querySelectorAll(".filter-chip");
        const syncFilterPill = () => {
            const activeChip = filterBar.querySelector('.filter-chip[aria-pressed="true"]');
            if (activeChip) {
                syncGliderVars(filterBar, activeChip, "pill");
            }
        };

        filterChips.forEach((chip) => {
            chip.addEventListener("pointerenter", () => {
                syncGliderVars(filterBar, chip, "hover");
            });
        });

        filterBar.addEventListener("pointerleave", () => {
            filterBar.style.setProperty("--hover-opacity", "0");
        });

        filterBar.addEventListener("click", (event) => {
            const chip = event.target.closest("[data-filter]");
            if (!chip || chip.getAttribute("aria-pressed") === "true") return;
            const filter = chip.dataset.filter;

            isProjectsExpanded = false;
            filterChips.forEach((btn) => {
                btn.setAttribute("aria-pressed", String(btn === chip));
            });
            syncGliderVars(filterBar, chip, "pill");
            renderProjects(filter, { animateAll: prefersMotion.matches });
        });

        requestAnimationFrame(syncFilterPill);
        document.fonts?.ready?.then(syncFilterPill);
        window.addEventListener("resize", syncFilterPill, { passive: true });
        if ("ResizeObserver" in window) {
            new ResizeObserver(syncFilterPill).observe(filterBar);
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const wasExpanded = isProjectsExpanded;
            isProjectsExpanded = !wasExpanded;

            renderProjects(currentProjectFilter, {
                animateFromIndex: !wasExpanded && prefersMotion.matches ? INITIAL_PROJECTS_LIMIT : Infinity
            });

            if (wasExpanded) {
                const portfolioSection = document.getElementById("portfolio");
                if (portfolioSection && portfolioSection.getBoundingClientRect().top < -120) {
                    portfolioSection.scrollIntoView({ behavior: prefersMotion.matches ? "smooth" : "auto", block: "start" });
                }
            }
        });
    }

    const copyBtn = document.getElementById("copyEmailBtn");
    const copyLabel = document.getElementById("copyEmailLabel");
    const copyFeedback = document.getElementById("copyFeedback");

    if (copyBtn && copyLabel) {
        let resetTimer = null;
        copyBtn.addEventListener("click", async () => {
            const email = copyBtn.dataset.email || "";
            try {
                await navigator.clipboard.writeText(email);
                copyLabel.textContent = "Copied!";
                if (copyFeedback) copyFeedback.textContent = "Email address copied to clipboard.";
                clearTimeout(resetTimer);
                resetTimer = setTimeout(() => {
                    copyLabel.textContent = "Copy email";
                    if (copyFeedback) copyFeedback.textContent = "";
                }, 2200);
            } catch {
                window.location.href = `mailto:${email}`;
            }
        });
    }
}

function initScrollAndInteractiveMotion() {
    const prefersMotion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!prefersMotion.matches) return;

    if (!window.CSS?.supports?.("animation-timeline", "scroll()")) {
        const progressEl = document.getElementById("scrollProgress");
        if (progressEl) {
            const updateProgress = () => {
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                const ratio = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
                progressEl.style.opacity = ratio > 0.005 ? "1" : "0";
                progressEl.style.transform = `scaleX(${ratio})`;
            };
            updateProgress();
            window.addEventListener("scroll", updateProgress, { passive: true });
        }
    }

    const supportsViewTimeline = window.CSS?.supports?.("(animation-timeline: view()) and (animation-range: entry)");
    if (!supportsViewTimeline && "IntersectionObserver" in window) {
        const targets = document.querySelectorAll(".section-header, .bento-cell, .project-card, .cert-item, .contact-panel");
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        targets.forEach((el) => {
            el.classList.add("reveal-fallback");
            observer.observe(el);
        });
    }

    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener(
            "pointermove",
            (event) => {
                const surface = event.target.closest(".bento-cell, .project-card, .cert-item, .contact-panel");
                if (surface) {
                    const rect = surface.getBoundingClientRect();
                    surface.style.setProperty("--spot-x", `${(event.clientX - rect.left).toFixed(0)}px`);
                    surface.style.setProperty("--spot-y", `${(event.clientY - rect.top).toFixed(0)}px`);
                }
            },
            { passive: true }
        );

        const heroFrame = document.getElementById("heroFrame");
        if (heroFrame) {
            heroFrame.addEventListener(
                "pointermove",
                (event) => {
                    const rect = heroFrame.getBoundingClientRect();
                    const nx = (event.clientX - rect.left) / rect.width - 0.5;
                    const ny = (event.clientY - rect.top) / rect.height - 0.5;
                    heroFrame.style.setProperty("--tilt-x", `${(-ny * 9).toFixed(2)}deg`);
                    heroFrame.style.setProperty("--tilt-y", `${(nx * 9).toFixed(2)}deg`);
                },
                { passive: true }
            );
            heroFrame.addEventListener("pointerleave", () => {
                heroFrame.style.setProperty("--tilt-x", "0deg");
                heroFrame.style.setProperty("--tilt-y", "0deg");
            });
        }
    }
}

const TYPEWRITER_WORDS = [
    "Fullstack Developer",
    "Software Developer",
    "Junior Android Developer",
    "Skilled in Python and...",
    "CSS",
    "Java",
    "HTML",
    "Kotlin"
];

function initTypewriter() {
    const el = document.getElementById("typewriter");
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = TYPEWRITER_WORDS[0];
        return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const tick = () => {
        const currentWord = TYPEWRITER_WORDS[wordIndex];
        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        el.textContent = currentWord.slice(0, charIndex);

        let delay = isDeleting ? 45 : 85;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = currentWord.length <= 6 ? 700 : 1150;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
            delay = 220;
        }

        setTimeout(tick, delay);
    };

    el.textContent = "";
    tick();
}

function initScrollPersistenceAndAnchors() {
    document.querySelectorAll('a[href^="#"]:not(.nav-link):not(.skip-link)').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            event.preventDefault();
            const smooth = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
            if (href === "#top") {
                window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
                }
            }
            if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        });
    });

    const saveScrollState = () => {
        try {
            sessionStorage.setItem("cise-scroll-y", String(Math.round(window.scrollY)));
            sessionStorage.setItem("cise-projects-expanded", String(isProjectsExpanded));
            sessionStorage.setItem("cise-projects-filter", currentProjectFilter);
        } catch {}
    };

    window.addEventListener("scroll", saveScrollState, { passive: true });
    window.addEventListener("pagehide", saveScrollState);
}

function bootstrapPortfolio() {
    const navEntry = performance.getEntriesByType?.("navigation")?.[0];
    const isReload = navEntry ? navEntry.type === "reload" : false;
    let savedY = null;

    if (isReload) {
        try {
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
            }
            const rawY = sessionStorage.getItem("cise-scroll-y");
            if (rawY !== null) savedY = Number(rawY);
            isProjectsExpanded = sessionStorage.getItem("cise-projects-expanded") === "true";
            const savedFilter = sessionStorage.getItem("cise-projects-filter");
            if (savedFilter) currentProjectFilter = savedFilter;
        } catch {}

        if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }
    }

    initTypewriter();
    renderProjects(currentProjectFilter);
    renderCertificates();

    if (isReload && currentProjectFilter !== "all") {
        document.querySelectorAll("#projectFilters .filter-chip").forEach((btn) => {
            btn.setAttribute("aria-pressed", String(btn.dataset.filter === currentProjectFilter));
        });
    }

    initThemeToggle();
    initNavigation();
    initFiltersAndCopy();
    initScrollAndInteractiveMotion();
    initScrollPersistenceAndAnchors();

    if (isReload && savedY !== null && !Number.isNaN(savedY)) {
        let userInteracted = false;
        const markInteracted = () => { userInteracted = true; };
        window.addEventListener("touchstart", markInteracted, { once: true, passive: true });
        window.addEventListener("wheel", markInteracted, { once: true, passive: true });

        window.scrollTo(0, savedY);
        requestAnimationFrame(() => {
            if (!userInteracted) window.scrollTo(0, savedY);
            document.documentElement.classList.add("is-ready");
        });
        window.addEventListener("load", () => {
            if (!userInteracted) window.scrollTo(0, savedY);
        }, { once: true });
    } else {
        if (window.location.hash) {
            const initialTarget = document.querySelector(window.location.hash);
            if (initialTarget) {
                initialTarget.scrollIntoView({ behavior: "auto", block: "start" });
            }
        }
        requestAnimationFrame(() => {
            document.documentElement.classList.add("is-ready");
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrapPortfolio);
} else {
    bootstrapPortfolio();
}
