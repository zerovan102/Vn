import setupTypingEffect from './typing.js';

document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA MENU MOBILE ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (menuButton && mobileMenu && iconMenu && iconClose) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });

        // Tutup menu saat link di-klik
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });
    }

    // --- LOGIKA TAHUN SAAT INI ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- LOGIKA ANIMASI FADE-IN SAAT SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
            // Opsional: hapus 'else' jika Anda tidak ingin animasi berulang saat scroll ke atas
            else {
                // entry.target.classList.remove('fade-in-visible');
            }
        });
    }, {
        threshold: 0.1 // Picu saat 10% elemen terlihat
    });

    const hiddenElements = document.querySelectorAll('.fade-in-element');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- LOGIKA EFEK MENGETIK ---
    setupTypingEffect();

    // --- LOGIKA NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // main.js
    document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA MENU MOBILE ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (menuButton && mobileMenu && iconMenu && iconClose) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });

        // Tutup menu saat link di-klik
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                iconMenu.classList.remove('hidden');
                iconClose.classList.add('hidden');
            });
        });
    }

    // --- LOGIKA TAHUN SAAT INI ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- LOGIKA ANIMASI FADE-IN SAAT SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
            // Opsional: hapus 'else' jika Anda tidak ingin animasi berulang saat scroll ke atas
            else {
                // entry.target.classList.remove('fade-in-visible');
            }
        });
    }, {
        threshold: 0.1 // Picu saat 10% elemen terlihat
    });

    const hiddenElements = document.querySelectorAll('.fade-in-element');
    hiddenElements.forEach((el) => observer.observe(el));

    // --- LOGIKA EFEK MENGETIK ---
    setupTypingEffect();

    // ============= PINDAHKAN KODE BUG KE SINI =============
    // (JIKA elemen ini ada di halaman lain, tambahkan pengecekan null)
    const input = document.getElementById('user-input');
    const button = document.getElementById('display-btn');
    const display = document.getElementById('display-area');

    if (input && button && display) { // <--- Tambahkan pengecekan ini
        button.addEventListener('click', () => {
            const text = input.value.trim();
            if(text === "") {
                display.innerHTML = "<span class='text-red-500'>Silakan tulis sesuatu terlebih dahulu!</span>";
            } else {
                display.textContent = text;
            }
        });
    }
    // ========================================================

    // --- LOGIKA NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // main.js
    document.addEventListener('DOMContentLoaded', () => {

    // ============= PINDAHKAN KODE BUG KE SINI =============
    // (JIKA elemen ini ada di halaman lain, tambahkan pengecekan null)
    const input = document.getElementById('user-input');
    const button = document.getElementById('display-btn');
    const display = document.getElementById('display-area');

    if (input && button && display) { // <--- Tambahkan pengecekan ini
        button.addEventListener('click', () => {
            const text = input.value.trim();
            if(text === "") {
                display.innerHTML = "<span class='text-red-500'>Silakan tulis sesuatu terlebih dahulu!</span>";
            } else {
                display.textContent = text;
            }
        });
    }
    // ========================================================

    // --- LOGIKA NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // main.js
    document.addEventListener('DOMContentLoaded', () => {

    // ============= PINDAHKAN KODE BUG KE SINI =============
    // (JIKA elemen ini ada di halaman lain, tambahkan pengecekan null)
    const input = document.getElementById('user-input');
    const button = document.getElementById('display-btn');
    const display = document.getElementById('display-area');

    if (input && button && display) { // <--- Tambahkan pengecekan ini
        button.addEventListener('click', () => {
            const text = input.value.trim();
            if(text === "") {
                display.innerHTML = "<span class='text-red-500'>Silakan tulis sesuatu terlebih dahulu!</span>";
            } else {
                display.textContent = text;
            }
        });
    }
    // ========================================================

    // --- LOGIKA NAVIGASI AKTIF SAAT SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    // main.js
    document.addEventListener('DOMContentLoaded', () => {
        const updateActiveLink = () => {
            let fromTop = window.scrollY + (header ? header.offsetHeight : 0) + 10;
            sections.forEach(section => {
                if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
                    const id = section.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active-nav-link');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active-nav-link');
                        }
                    });
                }
            });
        };
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink();
    });
});
});
});
});