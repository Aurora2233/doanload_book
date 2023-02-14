import { ref } from 'vue';
import { defineStore } from 'pinia';

export const appStore = defineStore('appStore', () => {
  const login = ref(false);
  function setStatus() {
    login.value = !login.value;
  }

  return { login, setStatus };
});
