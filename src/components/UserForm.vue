<template>
    <div class="modal">
      <div class="modal-content">
        <h3>{{ user ? 'Редактировать' : 'Добавить' }} пользователя</h3>
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">ФИО:</label>
            <input class="inp" type="text" id="name" v-model="userData.name" required />
          </div>
          <div>
            <label for="email">Почта:</label>
            <input type="email" id="email" v-model="userData.email" required />
          </div>
          <div>
            <label for="phone">Телефон:</label>
            <input type="text" id="phone" v-model="userData.phone" required />
          </div>
          <div>
            <label for="position">Должность:</label>
            <input type="text" id="position" v-model="userData.position" required />
          </div>
          <div>
            <label for="title">Звание:</label>
            <input type="text" id="title" v-model="userData.title" required />
          </div>
          <button class="save" type="submit">Сохранить</button>
          <button class="otm" type="button" @click="$emit('close')">Отмена</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        userData: {
          name: this.user ? this.user.name : '',
          email: this.user ? this.user.email : '',
          phone: this.user ? this.user.phone : '',
          position: this.user ? this.user.position : '',
          title: this.user ? this.user.title : ''
        }
      };
    },
    methods: {
      submitForm() {
        this.$emit('save', { ...this.userData, id: this.user ? this.user.id : null });
      }
    },
    watch: {
      user(newUser) {
        this.userData = {
          name: newUser ? newUser.name : '',
          email: newUser ? newUser.email : '',
          phone: newUser ? newUser.phone : '',
          position: newUser ? newUser.position : '',
          title: newUser ? newUser.title : ''
        };
      }
    }
  };
  </script>
  
  <style>
  .inp{
    border: solid 2 px black;
  }
  .save{
    border: solid 2px black;
  background-color: #9e94bb;
  border-radius: 2px;
  }
.otm{
  border: solid 2px black;
  background-color: #d41313;
  border-radius: 2px;
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
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>