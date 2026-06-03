/**
 * ═══════════════════════════════════════════════════
 * PORTFOLIO FIRDAUS FIRMANSYAH — APP.JS
 * Main application logic: loader, animations, navigation
 *
 * Dependencies:
 *   - GSAP 3.12.5 (gsap.min.js)
 *   - GSAP ScrollTrigger plugin
 *
 * Sections animated:
 *   1. Loader      → word cycling intro
 *   2. Hero        → staggered character reveal
 *   3. Scroll      → fade-up reveal on scroll (IntersectionObserver via GSAP)
 *   4. Nav Dots    → active section tracking
 *   5. Contact     → click-to-reveal overlay toggle
 *   6. Smooth Nav  → smooth scroll for anchor links
 * ═══════════════════════════════════════════════════
 */

// ─── Register GSAP Plugin ───
gsap.registerPlugin(ScrollTrigger);


// ─── DOM References ───
const loader     = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');
const loaderSub  = document.getElementById('loader-sub');
const mainContent = document.getElementById('main-content');
const sideNav    = document.getElementById('side-nav');


// ═══════════════════════════════════════
// 1. LOADER — Word cycling intro animation
// ═══════════════════════════════════════
function runLoader() {
    const words = ['FIRDAUS', 'FIRMANSYAH', 'UI/UX', 'PORTFOLIO'];
    const subs  = ['', '', 'Designer', '2026'];

    const tl = gsap.timeline({
        onComplete: () => {
            // Slide loader up and reveal main content
            gsap.to(loader, {
                yPercent: -100,
                duration: 0.9,
                ease: 'power4.inOut',
                onComplete: () => {
                    loader.style.display = 'none';
                    showMain();
                }
            });
        }
    });

    // Cycle through each word with fade in/out
    words.forEach((word, idx) => {
        tl.to({}, {
            duration: 0.05,
            onStart: () => {
                loaderText.textContent = word;
                loaderSub.textContent = subs[idx];
            },
        })
        .fromTo(loaderText,
            { opacity: 0, scale: 0.92 },
            { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
        )
        .to(loaderText, {
            opacity: 0, scale: 0.96,
            duration: 0.25, ease: 'power2.in', delay: 0.15
        });
    });
}


// ═══════════════════════════════════════
// 2. SHOW MAIN — Initialize all animations
// ═══════════════════════════════════════
function showMain() {
    mainContent.style.display = 'block';
    window.scrollTo(0, 0);

    // Hero name — staggered character fly-in from below
    gsap.to('#hero-name .reveal-char', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power3.out',
        delay: 0.15,
    });

    // Side navigation dots fade in
    gsap.to(sideNav, { opacity: 1, duration: 0.6, delay: 0.8 });

    // Initialize sub-systems
    setupScrollReveal();
    setupNavDots();
    setupContactReveal();
    setupSmoothScroll();
    setupMobileMenu();
}


// ═══════════════════════════════════════
// 3. SCROLL REVEAL — Fade-up on scroll
//    Uses GSAP ScrollTrigger for each
//    element with .reveal-text class
// ═══════════════════════════════════════
function setupScrollReveal() {
    document.querySelectorAll('.reveal-text').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                }
            }
        );
    });
}


// ═══════════════════════════════════════
// 4. NAVIGATION DOTS — Section tracking
//    Highlights active dot based on
//    current scroll position
// ═══════════════════════════════════════
function setupNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    const sections = [
        'hero', 'about', 'education', 'experience',
        'projects', 'orgs', 'skills', 'certs', 'contact'
    ];

    // Click handler — scroll to target section
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.getElementById(dot.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ScrollTrigger — update active dot on enter/enterBack
    sections.forEach((id, idx) => {
        const section = document.getElementById(id);
        if (!section) return;

        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveDot(idx),
            onEnterBack: () => setActiveDot(idx),
        });
    });

    /**
     * Sets the active navigation dot
     * @param {number} idx - Index of the active section
     */
    function setActiveDot(idx) {
        dots.forEach(d => d.classList.remove('active'));
        if (dots[idx]) dots[idx].classList.add('active');
    }
}


// ═══════════════════════════════════════
// 5. CONTACT REVEAL — Toggle overlay
//    Click CTA text → blur it, show links
//    Click overlay area → close it
// ═══════════════════════════════════════
function setupContactReveal() {
    const contactWord  = document.getElementById('contact-word');
    const contactLinks = document.getElementById('contact-links');
    if (!contactWord || !contactLinks) return;

    let expanded = false;

    /**
     * Toggles the contact reveal state
     * Opens: blurs CTA text, fades in contact links
     * Closes: restores CTA text, hides contact links
     */
    function toggleContact() {
        expanded = !expanded;
        if (expanded) {
            contactWord.classList.add('contact-expanded');
            gsap.to(contactLinks, { opacity: 1, duration: 0.5, ease: 'power2.out' });
            contactLinks.style.pointerEvents = 'auto';
        } else {
            contactWord.classList.remove('contact-expanded');
            gsap.to(contactLinks, { opacity: 0, duration: 0.3, ease: 'power2.in' });
            contactLinks.style.pointerEvents = 'none';
        }
    }

    // Open on CTA text click (only when closed)
    contactWord.addEventListener('click', () => {
        if (!expanded) toggleContact();
    });

    // Close on overlay click (except actual <a> links)
    contactLinks.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A' && expanded) toggleContact();
    });
}


// ═══════════════════════════════════════
// 6. SMOOTH SCROLL — Anchor link handler
//    Prevents default jump, uses smooth scroll
// ═══════════════════════════════════════
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


// ═══════════════════════════════════════
// 7. MOBILE MENU — Toggle logic for mobile dropdown
// ═══════════════════════════════════════
function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');
    let isOpen = false;

    if (!btn || !menu) return;

    function toggleMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
            menu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
            btn.classList.add('bg-white/10', 'text-neon');
        } else {
            menu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
            menu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
            btn.classList.remove('bg-white/10', 'text-neon');
        }
    }

    btn.addEventListener('click', toggleMenu);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen && !menu.contains(e.target) && !btn.contains(e.target)) {
            toggleMenu();
        }
    });
}


// ═══════════════════════════════════════
// INIT — Start loader on DOM ready
// ═══════════════════════════════════════
window.addEventListener('DOMContentLoaded', runLoader);
