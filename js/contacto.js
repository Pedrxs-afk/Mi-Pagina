document.addEventListener('DOMContentLoaded', () => {
  const mapa = L.map('map').setView([40.416775, -3.703790], 13); // Centro: Madrid

  // Cargar mapa base
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapa);

  // Marcador de la empresa
  const marcadorEmpresa = L.marker([40.416775, -3.703790])
    .addTo(mapa)
    .bindPopup("Empresa Ficticia<br>Calle Falsa 123, Madrid")
    .openPopup();

  // Si el usuario permite geolocalización
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsUsuario = [pos.coords.latitude, pos.coords.longitude];

      L.marker(coordsUsuario)
        .addTo(mapa)
        .bindPopup("Tu ubicación");

      // Mostrar ruta desde el usuario hasta la empresa
      L.Routing.control({
        waypoints: [
          L.latLng(coordsUsuario),
          L.latLng(40.416775, -3.703790)
        ],
        routeWhileDragging: false
      }).addTo(mapa);
    }, err => {
      console.warn("No se pudo obtener tu ubicación.");
    });
  } else {
    alert("Tu navegador no soporta geolocalización.");
  }
});
