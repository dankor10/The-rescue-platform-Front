<template>
  <div id="statistics-page">
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
            <li><a href="statistika" @click="goToStatistics" class="active">Статистика</a></li>
            <li><a href="users">Пользователи</a></li>
            <li><a href="Account22">Аккаунт</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Основной контент -->
    <div id="content-container">
      <h1>Статистика по районам Минска</h1>
      <div id="statistics-list">
        <div v-for="district in districts" :key="district.id" class="statistics-item">
          <h2>{{ district.name }}</h2>
          <p>Количество происшествий: {{ district.incidents }}</p>
          <p>Количество протоколов: {{ district.responseTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      districts: [
        { id: 1, name: 'Центральный район', incidents: 15, responseTime: 10 },
        { id: 2, name: 'Советский район', incidents: 12, responseTime: 12 },
        { id: 3, name: 'Первомайский район', incidents: 8, responseTime: 15 },
        { id: 4, name: 'Партизанский район', incidents: 10, responseTime: 14 },
        { id: 5, name: 'Заводской район', incidents: 7, responseTime: 16 },
        { id: 6, name: 'Ленинский район', incidents: 9, responseTime: 13 },
        { id: 7, name: 'Октябрьский район', incidents: 11, responseTime: 11 },
        { id: 8, name: 'Московский район', incidents: 14, responseTime: 9 },
        { id: 9, name: 'Фрунзенский район', incidents: 6, responseTime: 17 },
      ],
    };
  },
  methods: {
    triggerSOS() {
      alert('SOS! Срочный вызов отправлен.');
    },
    goToMain() {
      this.$router.push('/');
    },
    goToStatistics() {
      this.$router.push('/statistics');
    },
  },
};
</script>

<style scoped>
#statistics-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Минимальная высота страницы */
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
  margin-right: auto; /* Сдвигаем в левый угол */
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
  margin: 0 auto; /* Центрируем навигацию */
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
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%; /* Ширина контейнера на всю страницу */
}

h1 {
  font-size: 28px;
  color: #bb86fc;
  margin-bottom: 20px;
}

#statistics-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); /* Шире блоки */
  gap: 20px;
  padding-bottom: 40px; /* Добавляем отступ снизу для прокрутки */
}

.statistics-item {
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;
}

.statistics-item:hover {
  transform: translateY(-5px);
}

.statistics-item h2 {
  font-size: 24px;
  color: #bb86fc;
  margin-bottom: 10px;
}

.statistics-item p {
  font-size: 16px;
  color: #ffffff;
  margin: 5px 0;
}
</style>