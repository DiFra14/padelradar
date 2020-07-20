<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal__title">
        <slot name="modal-title">This is my modal title!</slot>
      </div>
      <div class="modal__content">
        <slot name="modal-content">
          This is my content!
        </slot>
      </div>
      <div class="modal__footer">
        <button class="btn btn-primary" @click="close">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
}

.modal {
  background: #FFFFFF;
  box-shadow: .5rem .3rem 1.2rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-width: 600px;
  padding: 2rem 5rem;

  &__title {
    border-bottom: 1px solid var(--dark-color);
    font-size: 2.5rem;
    font-weight: 300;
  }

  &__content {
    position: relative;
    padding: 5rem 0;
    width: 100%;
    display: flex;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: .5rem 0;
  }
}

.modal-input {
  flex: 1 0 0;
  padding: .3rem;
  border-radius: 10px;
  border: 1px solid var(--dark-color);
  margin-right: 1.5rem;
  color: var(--dark-color);
  padding: 1rem;
  outline: none;

  &::placeholder {
    color: var(--dark-color);
  }
}
</style>
