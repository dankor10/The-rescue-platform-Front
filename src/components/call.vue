<template>
  <div id="app-container">
    <!-- Хэдер -->
    <header id="header">
      <div id="header-content">
        <div id="sos-button">
          <span>Срочная помощь кнопка: </span>
          <button @click="triggerSOS">SOS</button>
        </div>
        <nav>
          <ul>
            <li><a href="call" @click="goToMain">Вызов</a></li>
            <li><a href="statistika" @click="goToStatistics">Статистика</a></li>
            <li><a href="users" @click="goToUsers">Пользователи</a></li>
            <li><a href="Account22" @click="goToAccount">Аккаунт</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Основной контент -->
    <div id="content-container">
      <div id="map-container">
        <!-- Карта через iframe -->
        <iframe
          id="map"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="mapUrl"
        ></iframe>
      </div>
      <div id="sidebar">
        <h2>Группы</h2>
        <div v-for="group in groups" :key="group.id" class="group" @click="selectGroup(group)">
          {{ group.name }}
        </div>
        <div v-if="selectedGroup" id="incidents-list">
          <h3>Активные происшествия</h3>
          <ul>
            <li v-for="incident in activeIncidents" :key="incident.id" @click="focusOnIncident(incident)">
              <span class="incident-info">{{ incident.info }}</span>
              <span class="incident-coords">({{ incident.lat }}, {{ incident.lng }})</span>
            </li>
          </ul>
        </div>
        <!-- Кнопки для управления происшествиями -->
        <div class="incident-controls">
          <button @click="addIncident" class="control-button">+</button>
          <button @click="removeIncident" class="control-button">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        { id: 1, name: 'Группа 1' },
        { id: 2, name: 'Группа 2' },
        { id: 3, name: 'Группа 3' },
      ],
      selectedGroup: null,
      activeIncidents: [],
      incidents: [
        {
          id: 1,
          lat: 53.92092,
          lng: 27.59222,
          info: 'Адрес: Проспект Независимости 65; ФИО: Корсак Даниил Сергеевич; Статус: Ожидает; Важность: Срочно',
          groupId: 1, // Привязка к группе
        },
      ],
      // URL для карты через iframe
      mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=27.4000,53.8000,27.7000,54.0000&layer=mapnik&marker=53.902284,27.561831&zoom=12",
      nextIncidentId: 2, // Счетчик для новых происшествий
    };
  },
  methods: {
    selectGroup(group) {
      this.selectedGroup = group;
      // Фильтруем происшествия по выбранной группе
      this.activeIncidents = this.incidents.filter(
        (incident) => incident.groupId === group.id
      );
    },
    focusOnIncident(incident) {
      // Обновляем iframe с картой, чтобы центрироваться на происшествии
      this.mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${incident.lng - 0.1},${incident.lat - 0.1},${incident.lng + 0.1},${incident.lat + 0.1}&layer=mapnik&marker=${incident.lat},${incident.lng}&zoom=12`;
    },
    // Добавление нового происшествия
    addIncident() {
      const newIncident = {
        id: this.nextIncidentId++,
        lat: 53.902284 + (Math.random() - 0.5) * 0.02, // Случайные координаты рядом с центром
        lng: 27.561831 + (Math.random() - 0.5) * 0.02,
        info: `Происшествие #${this.nextIncidentId - 1}`,
        groupId: this.selectedGroup ? this.selectedGroup.id : 1, // Привязка к выбранной группе
      };
      this.incidents.push(newIncident);
      this.selectGroup(this.selectedGroup); // Обновляем список активных происшествий
    },
    // Удаление последнего добавленного происшествия
    removeIncident() {
      if (this.incidents.length > 0) {
        this.incidents.pop(); // Удаляем последнее происшествие
        this.selectGroup(this.selectedGroup); // Обновляем список активных происшествий
      } else {
        alert('Нет происшествий для удаления.');
      }
    },
  },
};
</script>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #121212;
  color: #ffffff;
}

#header {
  background-color: #1f1f1f;
  padding: 10px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
}

#header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#sos-button {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
}

#sos-button span {
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
}

#sos-button button {
  background-color: #ff4444;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

#sos-button button:hover {
  background-color: #cc0000;
  transform: scale(1.05);
}

#header nav {
  margin: 0 auto;
}

#header nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

#header nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

#header nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

#header nav ul li a.active {
  background-color: rgba(255, 255, 255, 0.1);
}

#content-container {
  display: flex;
  flex: 1;
}

#map-container {
  flex: 1;
  background-color: #e0e0e0;
}

#map {
  width: 100%;
  height: 100%;
  border: none;
}

#sidebar {
  width: 400px;
  padding: 20px;
  background-color: #1f1f1f;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}

h2 {
  margin-top: 0;
  font-size: 24px;
  color: #bb86fc;
}

h3 {
  font-size: 20px;
  color: #bb86fc;
  margin-bottom: 10px;
}

.group {
  padding: 15px;
  margin: 10px 0;
  background-color: #333333;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: bold;
  text-align: center;
}

.group:hover {
  background-color: #444444;
  transform: translateY(-2px);
}

#incidents-list {
  margin-top: 20px;
}

#incidents-list ul {
  list-style-type: none;
  padding: 0;
}

#incidents-list li {
  padding: 15px;
  margin: 10px 0;
  background-color: #333333;
  border: 1px solid #444444;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

#incidents-list li:hover {
  background-color: #444444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.incident-info {
  font-weight: bold;
  color: #ffffff;
}

.incident-coords {
  display: block;
  font-size: 12px;
  color: #bb86fc;
  margin-top: 5px;
}

.incident-controls {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.control-button {
  background-color: #1f1f1f;
  color: #272727;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.control-button:hover {
  background-color: #1f1f1f;
}
</style>