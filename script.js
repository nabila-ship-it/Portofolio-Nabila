/**
 * NABILA UI/UX DESIGNER PORTFOLIO - JAVASCRIPT LOGIC
 * Features: Filter projects, Case Study Modal Data & Dialog, Nav Scroll Effects, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Header Scroll Effect
    const navbar = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Section Scroll Highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when clicking a nav item on mobile
        navLinks.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });

        // Close mobile drawer when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            }
        });
    }

    // 3. Project Filter Tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // 4. Case Study Modal Data Store
    const caseStudies = {
        '1': {
            title: 'Honda EV Smart Mobility App (Mobile UX)',
            category: 'Mobile Application Design & Smart Telemetry',
            image: 'assets/images/project1.png',
            overview: 'Honda EV Smart Mobility App dirancang untuk mengatasi kecemasan pengguna (range anxiety) saat mengendarai kendaraan listrik. Aplikasi ini memfasilitasi pencarian stasiun pengisian terdekat, monitoring baterai realtime, dan sistem navigasi pintar.',
            role: 'Lead UI/UX Designer & UX Researcher',
            timeline: '3 Bulan (Q1 2024)',
            tools: 'Figma, FigJam, Protopie, Adobe Illustrator',
            problem: 'Pengguna sering kesulitan menemukan stasiun cas kendaraan listrik (EV) yang kompatibel dan mengalami rintangan saat memantau statistik daya tahan baterai secara intuitif.',
            solution: 'Merancang ulang antarmuka dashboard dengan kontras visual tinggi, status visualisasi baterai dengan warna dinamis, serta navigasi rute efisien hemat energi.',
            steps: [
                { title: 'User Research', desc: 'Wawancara dengan 12 pengguna EV untuk mengidentifikasi pain points utama dalam perjalanan.' },
                { title: 'Information Architecture', desc: 'Pemetaan ulang 4 tab navigasi utama: Home Telemetry, Charge Finder, Trip Planner, & Profile.' },
                { title: 'Hi-Fi Prototyping', desc: 'Pembuatan mikro-interaksi pengisian daya animated dan visualisasi peta glassmorphism.' }
            ],
            results: 'Meningkatkan kepuasan pengguna sebesar 35% dalam usability testing dan memangkas waktu pencarian SPKLU hingga 40%.'
        },
        '2': {
            title: 'Nexus Analytics & Data Web Platform',
            category: 'SaaS Web Dashboard UI & Data Visualization',
            image: 'assets/images/project2.png',
            overview: 'Nexus Analytics adalah antarmuka web dashboard tingkat lanjut untuk analisis performa produk e-commerce dan metrics data pengguna dalam satu layar terpusat.',
            role: 'UI Designer & Web Architect',
            timeline: '2 Bulan (Q2 2024)',
            tools: 'Figma, Design Tokens, HTML/CSS Prototyping',
            problem: 'Dashboard analytics lama memiliki kepadatan visual yang membingungkan dan rasio kontras data chart yang rendah.',
            solution: 'Menerapkan grid 12-kolom yang modular, dark mode berorientasi fokus data, dan penyusunan hierarchy card metrics.',
            steps: [
                { title: 'UX Audit & Metric Mapping', desc: 'Menganalisis 20+ widget data dan mengelompokkan ke dalam 3 hierarki prioritas.' },
                { title: 'Design System Integration', desc: 'Menggunakan token warna kontras tinggi HSL untuk chart batang, garis, dan pie.' },
                { title: 'Responsive Web Layout', desc: 'Memastikan dashboard dapat diakses dengan mulus pada layar laptop 13", 15", dan monitor 4K.' }
            ],
            results: 'Mempercepat pengambil keputusan bisnis dalam membaca tren data hingga 50% lebih cepat.'
        },
        '3': {
            title: 'Pulse Design System & UI Kit',
            category: 'Comprehensive Figma Component Library & Design Tokens',
            image: 'assets/images/project3.png',
            overview: 'Pulse adalah Design System komprehensif yang dirancang untuk menjaga konsistensi visual di seluruh produk web dan mobile.',
            role: 'Design System Architect',
            timeline: '4 Bulan (2023 - 2024)',
            tools: 'Figma Auto-Layout 5.0, Tokens Studio, CSS Variables',
            problem: 'Variasi komponen UI yang berantakan antar tim pengembang dan ketidaksesuaian standar aksesibilitas WCAG.',
            solution: 'Menciptakan library terpadu berisi 120+ varian tombol, input form, dialog modal, serta panduan tipografi responsive.',
            steps: [
                { title: 'Tokenization', desc: 'Mendefinisikan warna primer, sekunder, spacing, dan shadow ke dalam variabel desain.' },
                { title: 'Component Building', desc: 'Membuat komponen Figma interaktif dengan fitur Auto-Layout 5.0 dan Component Properties.' },
                { title: 'Documentation & Handoff', desc: 'Menyusun dokumentasi penggunaan komponen untuk konsumsi tim frontend developer.' }
            ],
            results: 'Menghemat waktu desain proyek baru hingga 60% dan menjamin kepatuhan aksesibilitas WCAG 2.1 AA.'
        },
        '4': {
            title: 'E-Commerce One-Tap Checkout Flow',
            category: 'Mobile UX Redesign & Funnel Optimization',
            image: 'assets/images/project1.png',
            overview: 'Studi kasus optimasi UX alur pembayaran (checkout flow) aplikasi e-commerce mobile untuk mengurangi angka abai keranjang (cart abandonment).',
            role: 'UX Researcher & Interaction Designer',
            timeline: '1.5 Bulan (2023)',
            tools: 'Figma, FigJam, Maze Usability Testing',
            problem: 'Proses pembayaran memerlukan 5 tahapan terpisah yang menyebabkan tingginya angka penghentian transaksi.',
            solution: 'Menyederhanakan alur pembayaran menjadi 2 langkah interaktif dengan pilihan sistem pembayaran instan.',
            steps: [
                { title: 'Funnel Analysis', desc: 'Melacak drop-off rate terbanyak yang terjadi pada bagian pengisian alamat dan metode bayar.' },
                { title: 'Wireframing & Test', desc: 'Membuat 2 iterasi wireframe dan melakukan A/B testing terhadap pengguna.' },
                { title: 'Micro-Interaction Design', desc: 'Menambahkan animasi sukses dan slide-to-confirm untuk memberikan feedback instan.' }
            ],
            results: 'Meningkatkan konversi penyelesaian checkout sebesar 28% dalam uji coba beta.'
        }
    };

    // 5. Modal & Figma Direct Link Interactivity
    const figmaDesignUrl = 'https://www.figma.com/design/BwWydjPd8QTRLzIJ9JL3tO/Kelompok-6?node-id=436-3841&t=BmH3xIV9TLswFZXr-0';
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');

    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetUrl = btn.getAttribute('href');
            if (targetUrl && targetUrl !== '#') {
                e.preventDefault();
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Escape key listener for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function renderModalContent(data) {
        modalBody.innerHTML = `
            <div class="modal-case-header">
                <span class="sub-title"><i class="fa-solid fa-folder-open"></i> ${data.category}</span>
                <h2>${data.title}</h2>
                <div class="project-meta" style="margin-top: 10px;">
                    <span><i class="fa-solid fa-user-tie"></i> <strong>Peran:</strong> ${data.role}</span> &bull; 
                    <span><i class="fa-regular fa-clock"></i> <strong>Waktu:</strong> ${data.timeline}</span>
                </div>
            </div>

            <img src="${data.image}" alt="${data.title}" class="modal-case-img">

            <div class="modal-case-details">
                <h3 class="modal-section-title"><i class="fa-solid fa-circle-info"></i> Gambaran Umum (Overview)</h3>
                <p>${data.overview}</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">
                    <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2); padding: 18px; border-radius: 12px;">
                        <h4 style="color: #f87171; margin-bottom: 8px;"><i class="fa-solid fa-triangle-exclamation"></i> Tantangan & Masalah</h4>
                        <p style="font-size: 0.9rem;">${data.problem}</p>
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); padding: 18px; border-radius: 12px;">
                        <h4 style="color: #4ade80; margin-bottom: 8px;"><i class="fa-solid fa-lightbulb"></i> Solusi Desain UI/UX</h4>
                        <p style="font-size: 0.9rem;">${data.solution}</p>
                    </div>
                </div>

                <h3 class="modal-section-title"><i class="fa-solid fa-gears"></i> Tahapan Proses Desain (UX Process)</h3>
                <div class="modal-process-steps">
                    ${data.steps.map((step, idx) => `
                        <div class="modal-process-box">
                            <h4>Langkah 0${idx + 1}: ${step.title}</h4>
                            <p>${step.desc}</p>
                        </div>
                    `).join('')}
                </div>

                <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); padding: 20px; border-radius: 14px; margin-top: 24px;">
                    <h4 style="color: #c084fc; font-size: 1.1rem; margin-bottom: 6px;"><i class="fa-solid fa-chart-line"></i> Hasil & Dampak (Impact & Results)</h4>
                    <p style="font-size: 0.95rem; color: #ffffff;">${data.results}</p>
                </div>

                <div style="margin-top: 24px; text-align: center;">
                    <a href="${figmaDesignUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 14px 28px; font-size: 1.05rem;">
                        <i class="fa-brands fa-figma"></i> Buka Project & Prototype di Figma
                    </a>
                </div>
            </div>
        `;
    }

    // 6. Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    const formAlert = document.getElementById('form-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('btn-submit-form');
            const originalText = submitBtn.innerHTML;

            // Loading State
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim Pesan...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Pesan Terkirim!';
                submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

                if (formAlert) {
                    formAlert.className = 'form-alert success';
                    formAlert.innerHTML = '<i class="fa-solid fa-circle-check"></i> Terima kasih! Pesan Anda telah berhasil terkirim. Nabila akan segera menghubungi Anda kembali.';
                }

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 4000);
            }, 1200);
        });
    }

    // 7. Dynamic Skill Bar Fill Animation on Scroll
    const skillBars = document.querySelectorAll('.skill-fill');
    let animated = false;

    function animateSkills() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animated) {
            skillBars.forEach(bar => {
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);
});
