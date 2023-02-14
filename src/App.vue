<script lang="ts" setup>
// import { RouterView } from 'vue-router';
// import DrawerMenu from '@/components/DrawerMenu/index.vue';
</script>

<template>
  <div>
    <div class="todo">TODO</div>
    <footer class="footer">
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >湘ICP备2020019678号-1</a
      >
    </footer>
  </div>
  <!-- <a-layout>
    <a-layout>
      <DrawerMenu />
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>Tools</a-breadcrumb-item>
          <a-breadcrumb-item>Download</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout> -->
</template>

<style scoped>
.todo {
  font-size: 20px;
  height: 100vh;
}
.footer {
  height: 60px;
  text-align: center;
}
</style>
