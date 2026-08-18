<!-- <template>
  <div id="map" style="width: 50%; height: 600px;
  border:solid 2px black;
  margin-top: 20px;
  margin-left:20px ;">
  </div>
  <div class="marker-buttons">
    <button class="minus" @click="removeMarkers">-</button>
    <button class="plus"@click="addMarkers">+</button>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapComponent',
  setup() {
    let map;
    const markers = [];
    const initialCoords = [
      { lat: 53.893009, lng: 27.567444, message: 'Адрес: Гвардейская 3; ФИО: Корсак Даниил; Статус: Ожидает; Важность: Срочно' }
    ];

    const fetchMarkers = async () => {
      try {
        const response = await fetch('https://example.com/api/coordinates'); // Замените на свой URL
        const data = await response.json();
        return data.coordinates.map(coord => ({
          lat: coord.latitude,
          lng: coord.longitude
        }));
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        return [];
      }
    };

    const updateMarkers = (coords) => {
      markers.forEach(marker => map.removeLayer(marker));
      markers.length = 0;
      coords.forEach(coord => {
        const marker = L.marker([coord.lat, coord.lng], {
          icon: L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          })
        }).addTo(map);
        marker.bindPopup(coord.message);
        markers.push(marker);
      });
    };

    onMounted(() => {
      map = L.map('map').setView([53.9, 27.5667], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      updateMarkers(initialCoords);
    });

    const removeMarkers = () => {
      markers.forEach(marker => map.removeLayer(marker));
      markers.length = 0;
    };

    const addMarkers = () => {
      updateMarkers(initialCoords);
    };

    return {
      removeMarkers,
      addMarkers
    };
  }
};

</script>



<style>
 legend{
    position: relative;
    bottom: 200px;
    width: 600px;
    height: 100px;
   }
   .but-ch{
    position: relative;
    left: 780px;
    bottom: 580px;

   }

   .list{
    border:solid 5px #0F62FE;
    width: 130px;
    height: 40px;
    margin-right:20px ;
    border-radius: 3px;
   }
   .maP{
    border:solid 5px #0F62FE;
    width: 130px;
    height: 40px;
    margin-right:20px ;
    background-color: #0F62FE;
    color: white;
    border-radius: 3px;
   }
   .incident{
    border:solid 5px #0F62FE;
    width: 130px;
    height: 40px;
    margin-right:20px ;
    border-radius: 3px;
    background-color: #0F62FE;
    color: white;
   }
   .grp{
    border:solid 5px #0F62FE;
    width: 130px;
    height: 40px;
    margin-right:20px ;
    border-radius: 3px;
   }
   .calling{
    border-radius: 3px;
    margin-left: 200px;
   }
    .non-calling{
      margin-left: 250px;
    }
   .calng{
    color: black;
   }
  .header {
    background-color: #7D97B1;
    color: #fff;
    padding: 10px 0; 
    width: 100%; 
    position: fixed; 
    top: 0; 
    z-index: 1000; 
    clear: both;
  }
  
  .navigation {
    .container {
      display: flex;
      justify-content: center; 
      max-width: 1200px; 
      padding-left: 0 auto; 
      
    }
  
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
  
      li {
        margin: 0 15px; 
  
        a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
  
          &:hover {
            color: #ddd; 
          }
        }
      }
    }
  }
  
  .spacer {
    height: 20px;
  }
   .container {
    display: flex;
    color:black;
    flex-direction: column;
    border-radius: 7px;
    position: relative;
    width: 30%;
    height: 400px;
    left: 800px;
    bottom: 350px;
    background-color: #525252;
    
  }
  
  
  .group-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color: #FAFAFA;
    width: 455px;
    position: relative;
    top: 100px; 
  }
  
  .group-info {
    display: flex;
    align-items: center;
  }
  
  .yellow-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:#24A148;
    margin-right: 5px;
  }
 
  
  .Map-add {
    display: flex;
    justify-content: center;
    align-items: center; 
    
  }
  .Map{
    border: solid 2px black;
    border-radius: 5px
  }
  
  body { 
      font-family: Arial, sans-serif; 
      background-color: #f4f4f4; 
      margin: 0; 
      overflow: hidden; 
      background-size: cover; 
      background-image: url(background-image.svg); 
      font-family: "Poiret One", sans-serif;
       
  } 
  header{ 
      width: max-content; 
      padding: 0; 
      margin: 0 auto; 
      display: flex; 
  } 

.Map {
  height: 100px;
  width: 600px;
  margin-left: 200px;
}

.leaflet-control-attribution a[href*="leaflet"] {
  display: none !important;
}

.minus{
  color:  rgb(231, 223, 223);
  width: 20px;
  height: 20px;
}
.plus{
  color: rgb(231, 223, 223);
  width: 20px;
  height: 20px;
}
</style> -->
