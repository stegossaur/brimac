// Inicializa o mapa
const map = L.map('map', {
    zoomControl: false,
    worldCopyJump: true,
  }).setView([10, 0], 2);
  
  // Tile leve e gratuito
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors',
    maxZoom: 5,
  }).addTo(map);
  
  // Países
  const vendas = [
    { nome: "Brasil", coords: [-14.235, -51.9253] },
    { nome: "Argentina", coords: [-38.4161, -63.6167] },
    { nome: "Estados Unidos", coords: [37.0902, -95.7129] },
    { nome: "Portugal", coords: [39.3999, -8.2245] },
    { nome: "Espanha", coords: [40.4637, -3.7492] },
    { nome: "Alemanha", coords: [51.1657, 10.4515] },
    { nome: "África do Sul", coords: [-30.5595, 22.9375] },
    { nome: "Japão", coords: [36.2048, 138.2529] },
  ];
  
  // Ícone animado
  const pontoIcon = L.divIcon({
    className: "map-dot",
    html: '<span class="dot"></span>',
    iconSize: [16,16],
    iconAnchor: [8,8]
  });
  
  // Renderiza pontos
  vendas.forEach(pais => {
    L.marker(pais.coords, { icon: pontoIcon })
      .addTo(map)
      .bindPopup(`<strong>${pais.nome}</strong>`);
  });
  
  // Zoom no canto inferior direito
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  