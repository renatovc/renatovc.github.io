// Opcional: Deshabilitar clic derecho en las imágenes para una protección básica.
// Nota: Esto no impide que alguien guarde las imágenes con herramientas de desarrollador,
// pero disuade al usuario casual. La mejor protección es una marca de agua.
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-grid img');
    
    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            alert('Images are copyrighted. Please do not save them.');
        });
    });
});

// Configuración opcional para Lightbox2
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true, // Permite navegar de la última a la primera imagen
  'showImageNumberLabel': false // Oculta el "Image x of y"
});