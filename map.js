const lat = 19.075983
const long = 72.877655
mapboxgl.accessToken =
  'pk.eyJ1IjoiYmJodXBlbiIsImEiOiJja2VxbGFnd3cyZ3pvMnJwaTltZGdwMHQzIn0.9pCwq7adgwlE4CETQuBKbg'
var map = new mapboxgl.Map({
  container: 'mapid', // container id
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40], // starting position
  zoom: 9, // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl())
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true,
  })
)

var marker = new mapboxgl.Marker().setLngLat([long, lat]).addTo(map)

map.jumpTo({ center: [long, lat], zoom: 11 })
map.setPitch(30)
