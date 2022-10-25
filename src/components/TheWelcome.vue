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
        const data = await current.proxy.$utils.get<{
          data: { name: string; downloadUrl: string };
        }>(BOOK.DOWNLOAD, {
          url: value.search,
        });
        var link = document.createElement('a');
        link.setAttribute('download', data.data.name);
        link.href = data.data.downloadUrl;
        document.body.appendChild(link); //添加到页面中，为兼容Firefox浏览器
        link.click();
        document.body.removeChild(link); //从页面移除
      }
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>
