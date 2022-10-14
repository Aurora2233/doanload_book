<template>
  <a-input-search
    v-model:value="value.search"
    placeholder="input search domian url"
    enter-button
    @search="onSearch"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  setup() {
    const value = reactive({
      search: 'https://www.xbiquge.so/book/54523/',
    });

    const onSearch = () => {
      console.log('or use this.value', value);
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>
