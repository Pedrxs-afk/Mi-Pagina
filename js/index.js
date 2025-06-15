document.addEventListener('DOMContentLoaded', () => {
  fetch('data/noticias.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('news-container');
      container.innerHTML = '';
      data.forEach(noticia => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${noticia.titulo}</strong><p>${noticia.contenido}</p><hr>`;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Error cargando noticias:', error);
      document.getElementById('news-container').innerText = 'No se pudieron cargar las noticias.';
    });
});
