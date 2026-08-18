<template>
  <div id="users-page">
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
            <li><a href="users" @click="goToUsers" class="active">Пользователи</a></li>
            <li><a href="Account22" @click="goToAccount">Аккаунт</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Основной контент -->
    <div id="content-container">
      <h1>Управление пользователями</h1>
      <button @click="openAddUserModal" class="add-user-button">Добавить пользователя</button>
      <table id="users-table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Почта</th>
            <th>Телефон</th>
            <th>Звание</th>
            <th>Должность</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.fullName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.rank }}</td>
            <td>{{ user.position }}</td>
            <td>
              <button @click="editUser(user)" class="edit-button">Редактировать</button>
              <button @click="deleteUser(user)" class="delete-button">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Модальное окно для добавления/редактирования пользователя -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h2>{{ isEditing ? 'Редактировать пользователя' : 'Добавить пользователя' }}</h2>
        <form @submit.prevent="saveUser">
          <div class="form-group">
            <label for="fullName">ФИО:</label>
            <input type="text" id="fullName" v-model="currentUser.fullName" required />
          </div>
          <div class="form-group">
            <label for="email">Почта:</label>
            <input type="email" id="email" v-model="currentUser.email" required />
          </div>
          <div class="form-group">
            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" v-model="currentUser.phone" required />
          </div>
          <div class="form-group">
            <label for="rank">Звание:</label>
            <input type="text" id="rank" v-model="currentUser.rank" required />
          </div>
          <div class="form-group">
            <label for="position">Должность:</label>
            <input type="text" id="position" v-model="currentUser.position" required />
          </div>
          <div class="modal-actions">
            <button type="button" @click="closeModal">Отмена</button>
            <button type="submit">{{ isEditing ? 'Сохранить' : 'Добавить' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          fullName: 'Иванов Иван Иванович',
          email: 'ivanov@example.com',
          phone: '+375 29 123 45 67',
          rank: 'Капитан',
          position: 'Зам начальника дежурной службы',
        },
        {
          id: 2,
          fullName: 'Петров Петр Петрович',
          email: 'petrov@example.com',
          phone: '+375 29 234 56 78',
          rank: 'Лейтенант',
          position: 'Дежурный',
        },
        {
          id: 3,
          fullName: 'Сидорова Анна Владимировна',
          email: 'sidorova@example.com',
          phone: '+375 29 345 67 89',
          rank: 'Сержант',
          position: 'ППС',
        },
      ],
      isModalOpen: false,
      isEditing: false,
      currentUser: {
        id: null,
        fullName: '',
        email: '',
        phone: '',
        rank: '',
        position: '',
      },
    };
  },
  methods: {
    // Открытие модального окна для добавления пользователя
    openAddUserModal() {
      this.isEditing = false;
      this.currentUser = {
        id: null,
        fullName: '',
        email: '',
        phone: '',
        rank: '',
        position: '',
      };
      this.isModalOpen = true;
    },
    // Открытие модального окна для редактирования пользователя
    editUser(user) {
      this.isEditing = true;
      this.currentUser = { ...user };
      this.isModalOpen = true;
    },
    // Сохранение пользователя (добавление или редактирование)
    saveUser() {
      if (this.isEditing) {
        const index = this.users.findIndex((u) => u.id === this.currentUser.id);
        this.users[index] = { ...this.currentUser };
      } else {
        this.currentUser.id = this.users.length + 1;
        this.users.push({ ...this.currentUser });
      }
      this.closeModal();
    },
    // Удаление пользователя
    deleteUser(user) {
      if (confirm(`Вы уверены, что хотите удалить пользователя ${user.fullName}?`)) {
        this.users = this.users.filter((u) => u.id !== user.id);
      }
    },
    // Закрытие модального окна
    closeModal() {
      this.isModalOpen = false;
    },
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
#users-page {
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

.add-user-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
}

.add-user-button:hover {
  background-color: #0056b3;
}

#users-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #1f1f1f;
  color: #ffffff;
}

#users-table th,
#users-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #444444;
}

#users-table th {
  background-color: #333333;
  color: #bb86fc;
}

#users-table tr:hover {
  background-color: #2a2a2a;
}

.edit-button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #ff4444;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #cc0000;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
}

.modal-content h2 {
  font-size: 24px;
  color: #bb86fc;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  color: #bb86fc;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #444444;
  border-radius: 4px;
  background-color: #333333;
  color: #ffffff;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.modal-actions button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.modal-actions button:hover {
  background-color: #0056b3;
}

.modal-actions button[type="button"] {
  background-color: #ff4444;
}

.modal-actions button[type="button"]:hover {
  background-color: #cc0000;
}
</style>