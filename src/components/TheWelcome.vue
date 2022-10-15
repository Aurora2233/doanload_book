<template>
  <!-- <a-space direction="vertical "> -->
  <a-input-search
    v-model:value="value.search"
    placeholder="input search domian url"
    enter-button
    @search="onSearch"
  />
  <!-- <a-button type="primary" @click="handleClickDownload">Downlod</a-button> -->
  <!-- </a-space> -->
</template>

<script lang="ts">
import { BaseURL } from '@/constants';
import { BOOK } from '@/constants/api';
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
        const data = await current.proxy.$utils.get<{ data: { id: string } }>(
          BOOK.DOWNLOAD,
          {
            url: value.search,
          }
        );
        window.open(`${BaseURL}${BOOK.DOWNLOAD_BOOK}?id=${data.data.id}`);
      }
    };

    // const handleClickDownload = () => {

    // };

    return {
      value,
      onSearch,
    };
  },
});
</script>
