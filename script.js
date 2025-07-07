document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Lógica para el Header y Menú Móvil ---
    const body = document.body;
    const header = document.querySelector('.main-header');
    const navToggle = document.querySelector('.nav-toggle');
    const navIcon = document.querySelector('.nav-toggle i');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // --- A. Abrir/Cerrar Menú, Cambiar Icono y Color ---
    if (navToggle && mainNav && navIcon) {
        navToggle.addEventListener('click', () => {
            // Muestra u oculta el menú
            mainNav.classList.toggle('nav-visible');
            // Añade una clase al body para permitir cambios de color con CSS
            body.classList.toggle('menu-open');
            
            // Cambia el icono de hamburguesa a 'X' y viceversa
            if (mainNav.classList.contains('nav-visible')) {
                navIcon.classList.remove('fa-bars');
                navIcon.classList.add('fa-times');
            } else {
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars');
            }
        });
    }

    // --- B. Cerrar el menú móvil al hacer clic en un enlace ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-visible')) {
                mainNav.classList.remove('nav-visible');
                body.classList.remove('menu-open'); // Quita la clase del body
                // Asegurarse de que el icono vuelva a ser de hamburguesa
                navIcon.classList.remove('fa-times');
                navIcon.classList.add('fa-bars');
            }
        });
    });

    // --- C. Ocultar/Mostrar Header al hacer scroll en móvil ---
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // Scroll hacia abajo: oculta el header
                header.classList.add('header-hidden');
            } else if (scrollTop < lastScrollTop) {
                // Scroll hacia arriba: muestra el header
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }
    });

    // --- 2. Lógica para el Textarea Autoajustable ---
    const textarea = document.querySelector('.contact-form textarea');
    if (textarea) {
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });
    }

    // --- 3. Protección de Clic Derecho en las Imágenes ---
    const imagesToProtect = document.querySelectorAll('.photo-grid img, .slide img, .story-gallery img');
    imagesToProtect.forEach(img => {
        img.addEventListener('contextmenu', (event) => {
            event.preventDefault();
        });
    });

});

// --- 4. Configuración Opcional para Lightbox2 ---
try {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
      'disableScrolling': true
    });
} catch (e) {
    // Evita un error si Lightbox2 no está cargado.
}