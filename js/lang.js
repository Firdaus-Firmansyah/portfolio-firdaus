const translations = {
    // ─── NAVIGATION ───
    "nav-home": { id: "Beranda", en: "Home" },
    "nav-about": { id: "Tentang", en: "About" },
    "nav-projects": { id: "Proyek", en: "Projects" },
    "nav-skills": { id: "Keahlian", en: "Skills" },
    "nav-contact": { id: "Kontak", en: "Contact" },

    // ─── HERO ───
    "hero-role": { 
        id: "UI/UX Designer · Front-End Developer · Digital Creative", 
        en: "UI/UX Designer · Front-End Developer · Digital Creative" 
    },

    // ─── ABOUT ───
    "about-intro-p": {
        id: "Seorang ahli teknologi kreatif yang menciptakan pengalaman digital di persimpangan desain dan kode. Bersemangat tentang solusi yang berpusat pada pengguna dan penyampaian cerita visual.",
        en: "A creative technologist crafting digital experiences at the intersection of design and code. Passionate about user-centered solutions and visual storytelling."
    },
    "about-tag": { id: "01 — Tentang Saya", en: "01 — About Me" },
    "about-p1": { 
        id: "Mahasiswa <span class=\"keyword\">Teknik Informatika</span> semester 6 di UHAMKA dengan ketertarikan kuat dalam <span class=\"keyword\">UI/UX Design</span>, <span class=\"keyword\">Front-End Development</span>, dan konten kreatif digital. Dipercaya oleh universitas sebagai bagian dari Tim Project resmi untuk mengembangkan <span class=\"keyword\">virtual environment (Metaverse)</span> kampus di platform Roblox.",
        en: "6th-semester <span class=\"keyword\">Informatics Engineering</span> student at UHAMKA with a strong interest in <span class=\"keyword\">UI/UX Design</span>, <span class=\"keyword\">Front-End Development</span>, and digital creative content. Trusted by the university as part of the official Project Team to develop the campus <span class=\"keyword\">virtual environment (Metaverse)</span> on Roblox."
    },
    "about-p2": {
        id: "Aktif dalam <span class=\"keyword\">Core Team DSC UHAMKA</span> sebagai UI/UX Designer. Berpengalaman sebagai <span class=\"keyword\">pembicara workshop</span>, <span class=\"keyword\">content editor</span>, dan <span class=\"keyword\">penulis jurnal nasional</span>.",
        en: "Active in the <span class=\"keyword\">DSC UHAMKA Core Team</span> as a UI/UX Designer. Experienced as a <span class=\"keyword\">workshop speaker</span>, <span class=\"keyword\">content editor</span>, and <span class=\"keyword\">national journal author</span>."
    },

    // ─── EDUCATION ───
    "edu-tag": { id: "02 — Pendidikan", en: "02 — Education" },
    "edu-uhamka-title": { id: "S1 Teknik Informatika", en: "Bachelor of Informatics Engineering" },
    "edu-uhamka-date": { id: "2023 – Sekarang", en: "2023 – Present" },
    "edu-smk-major": { id: "Jurusan Multimedia", en: "Multimedia Major" },

    // ─── EXPERIENCE ───
    "exp-tag": { id: "03 — Pengalaman Profesional", en: "03 — Professional Experience" },
    "exp-roblox-desc": { id: "Tim Project Program Roblox UHAMKA — Penugasan Resmi Wakil Rektor IV", en: "UHAMKA Roblox Program Project Team — Official Assignment from Vice Rector IV" },
    "exp-roblox-date": { id: "Okt 2025 – Jan 2026", en: "Oct 2025 – Jan 2026" },
    "exp-intern-desc": { id: "Tim Promosi FTII UHAMKA — Magang", en: "FTII UHAMKA Promotion Team — Internship" },
    "exp-kpu-title": { id: "Petugas KPPS", en: "Polling Station Officer (KPPS)" },
    "exp-kpu-desc": { id: "Komisi Pemilihan Umum (KPU) — Paruh Waktu", en: "General Election Commission (KPU) — Part-time" },
    "exp-pkl-desc": { id: "Praktik Kerja Lapangan", en: "Field Work Practice (Internship)" },

    // ─── PROJECTS ───
    "proj-tag": { id: "04 — Proyek", en: "04 — Projects" },
    "proj-title": { id: "Collection of<br><span class=\"ml-12 md:ml-24 lg:ml-32\"><span class=\"font-condiment text-neon normal-case\">Creative</span> Projects</span>", en: "Collection of<br><span class=\"ml-12 md:ml-24 lg:ml-32\"><span class=\"font-condiment text-neon normal-case\">Creative</span> Projects</span>" },
    "proj-total-1": { id: "Total", en: "Total" },
    "proj-total-2": { id: "Proyek", en: "Projects" },

    // ─── ORGANIZATIONS & AWARDS ───
    "org-tag": { id: "05 — Organisasi & Penghargaan", en: "05 — Organizations & Awards" },
    "org-karang": { id: "Ketua Karang Taruna RT", en: "Head of Neighborhood Youth" },
    "org-speaker1": { id: "Pemateri Crash Course UI/UX", en: "UI/UX Crash Course Speaker" },
    "org-speaker2": { id: "Pemateri Workshop HIMA TI", en: "HIMA TI Workshop Speaker" },
    "org-award1": { id: "Juara 1 Desain Terbaik GDGOC", en: "1st Place Best Design GDGOC" },
    "org-award2": { id: "Juara 2 Sayembara Logo FTII", en: "2nd Place FTII Logo Competition" },
    "org-award3": { id: "Juara 1 Konten TikTok UHAMKA", en: "1st Place UHAMKA TikTok Content" },
    "org-award4": { id: "HAKI Buku \"Pengantar TI\"", en: "IPR Book \"Intro to IT\"" },
    "org-award5": { id: "HAKI Video Edukasi", en: "IPR Educational Video" },
    "org-award6": { id: "Kelompok Terbaik Workshop UI/UX", en: "Best Group UI/UX Workshop" },
    
    // Org detail list
    "org-detail-1": { id: "🏆 Juara 1 Desain Terbaik — Seminar UI/UX Deep Dive (GDGOC STT NF) — Des 2024", en: "🏆 1st Place Best Design — UI/UX Deep Dive Seminar (GDGOC STT NF) — Dec 2024" },
    "org-detail-2": { id: "🏆 Juara 2 Sayembara Logo Milad FTII ke-27 — Maret 2024", en: "🏆 2nd Place Logo Competition 27th FTII Anniversary — Mar 2024" },
    "org-detail-3": { id: "🏆 Juara 1 Konten TikTok Baitul Arqom UHAMKA — Okt 2023", en: "🏆 1st Place TikTok Content Baitul Arqom UHAMKA — Oct 2023" },
    "org-detail-4": { id: "📘 HAKI Buku \"Pengantar TI\" — ISBN: 978-623-10-3247-8 — Sep 2024", en: "📘 IPR Book \"Intro to IT\" — ISBN: 978-623-10-3247-8 — Sep 2024" },
    "org-detail-5": { id: "🎬 HAKI Video Edukasi Peternakan Ikan — Okt 2024", en: "🎬 IPR Educational Video on Fish Farming — Oct 2024" },

    // ─── SKILLS ───
    "skills-tag": { id: "06 — Keahlian", en: "06 — Skills" },
    "skills-hard": { id: "Hard Skills", en: "Hard Skills" },
    "skills-soft": { id: "Soft Skills", en: "Soft Skills" },
    "skills-time": { id: "Manajemen Waktu", en: "Time Management" },
    "skills-critical": { id: "Berpikir Kritis", en: "Critical Thinking" },
    "skills-comm": { id: "Komunikasi Efektif", en: "Effective Communication" },
    "skills-problem": { id: "Problem Solving", en: "Problem Solving" },

    // ─── CERTIFICATIONS ───
    "certs-tag": { id: "07 — Sertifikasi", en: "07 — Certifications" },

    // ─── CONTACT ───
    "contact-cta": { id: "Mari Terhubung", en: "Let's Connect" },
    "contact-close": { id: "Klik di mana saja untuk menutup", en: "Click anywhere to close" },
    
    // ─── FOOTER ───
    "footer-location": { id: "DKI Jakarta, Indonesia", en: "DKI Jakarta, Indonesia" },
};
