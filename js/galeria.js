document.addEventListener('DOMContentLoaded', () => {
  const imagenes = document.querySelectorAll('.gallery-img');

  imagenes.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = 1000;

      const imagenAmpliada = document.createElement('img');
      imagenAmpliada.src = img.src;
      imagenAmpliada.style.maxWidth = '90%';
      imagenAmpliada.style.maxHeight = '90%';
      imagenAmpliada.style.border = '5px solid white';
      imagenAmpliada.style.borderRadius = '10px';
      overlay.appendChild(imagenAmpliada);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });

      document.body.appendChild(overlay);
    });
  });
});
