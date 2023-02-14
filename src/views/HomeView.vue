<template>
  <!-- <a-space direction="vertical "> -->
  <a-input-search
    v-model:value="value.search"
    placeholder="input search domian url"
    enter-button
    @search="onSearch"
  />
</template>

<script lang="ts">
import { BOOK } from '@/constants';
import { get } from '@/utils/request';
import {
  defineComponent,
  reactive,
  getCurrentInstance,
  type ComponentInternalInstance,
} from 'vue';

export default defineComponent({
  setup() {
    const current = getCurrentInstance() as ComponentInternalInstance;
    const value = reactive({
      search: 'https://www.xbiquge.so/book/54523/',
    });

    const onSearch = async () => {
      if (current.proxy) {
        const data = await get<{
          data: { name: string; downloadUrl: string };
        }>(BOOK.DOWNLOAD, {
          url: value.search,
        });
        window.open(data.data.downloadUrl);
      }
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>
