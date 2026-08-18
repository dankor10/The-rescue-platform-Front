<template>
    <div class="login">
      <h2>Авторизация</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Имя пользователя:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Войти</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="accessToken" class="token">Access Token: {{ accessToken }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        error: null,
        accessToken: null
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('https://api.sos.lectoria.by/auth/api/auth/login', {
            username: this.username,
            password: this.password
          });
          console.log('Login successful:', response.data);
          // Сохранение access token
          this.accessToken = response.data.accessToken;
        } catch (error) {
          console.error('Login failed:', error.response);
          this.error = 'Login failed: ' + (error.response ? error.response.data.message : error.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #333;
  }
  
  input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    margin-top: 10px;
    color: red;
    text-align: center;
  }
  
  .token {
    margin-top: 10px;
    color: green;
    text-align: center;
    word-wrap: break-word;
  }
  </style>
  