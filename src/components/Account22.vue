<template>
  <div id="account-page">
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
            <li><a href="Account22" @click="goToAccount" class="active">Аккаунт</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Основной контент -->
    <div id="content-container">
      <h1>Мой аккаунт</h1>
      <div id="account-info">
        <div class="info-item">
          <span class="label">ФИО:</span>
          <span class="value">{{ account.fullName }}</span>
        </div>
        <div class="info-item">
          <span class="label">Роль:</span>
          <span class="value">{{ account.role }}</span>
        </div>
        <div class="info-item">
          <span class="label">Должность:</span>
          <span class="value">{{ account.position }}</span>
        </div>
        <div class="info-item">
          <span class="label">Место работы:</span>
          <span class="value">{{ account.workplace }}</span>
        </div>
        <div class="info-item">
          <span class="label">Звание:</span>
          <span class="value">{{ account.rank }}</span>
        </div>
        <div class="info-item">
          <span class="label">Почта:</span>
          <span class="value">{{ account.email }}</span>
        </div>
        <div class="info-item">
          <span class="label">Телефон:</span>
          <span class="value">{{ account.phone }}</span>
        </div>
        <div class="info-item">
          <span class="label">Возраст:</span>
          <span class="value">{{ account.age }}</span>
        </div>
        <div class="info-item">
          <span class="label">Пол:</span>
          <span class="value">{{ account.gender }}</span>
        </div>
        <div class="info-item">
          <span class="label">Дата регистрации:</span>
          <span class="value">{{ account.registrationDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        fullName: 'Корсак Даниил Сергеевич',
        role: 'Администратор',
        position: 'Начальник РУВД',
        workplace: 'Центральный район',
        rank: 'Подполковник',
        email: 'dfdgdrf@gmail.com',
        phone: '+375 29 123 45 67',
        age: 35,
        gender: 'Мужской',
        registrationDate: '15.03.2020',
      },
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
    goToUsers() {
      this.$router.push('/users');
    },
    goToAccount() {
      this.$router.push('/account');
    },
  },
};
</script>

<style scoped>
#account-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

h1 {
  font-size: 28px;
  color: #bb86fc;
  margin-bottom: 20px;
}

#account-info {
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #444444;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: bold;
  color: #bb86fc;
}

.value {
  color: #ffffff;
}
</style>