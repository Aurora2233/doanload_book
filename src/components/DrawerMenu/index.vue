<template>
  <a-layout-sider class="Sider" width="200" style="background: #fff">
    <a-menu
      mode="inline"
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            item1
          </span>
        </template>
        <a-menu-item key="1">
          <RouterLink to="/">Download</RouterLink>
        </a-menu-item>
        <a-menu-item key="2">
          <RouterLink to="/list">Books</RouterLink>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { UserOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
</script>
<style scoped>
.Sider {
  min-height: calc(100vh - 64px);
}
</style>
