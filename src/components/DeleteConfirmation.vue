<template>
  <div class="modal">
    <div class="modal-content">
      <h3>Подтверждение удаления</h3>
      <p>Вы уверены, что хотите удалить пользователя "{{ user.name }}"?</p>
      <button @click="confirm">Удалить</button>
      <button @click="$emit('close')">Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm');
    }
  }
};
</script>

<style>
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