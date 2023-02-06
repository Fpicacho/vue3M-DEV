<template>
  <!-- 首页导航 -->
  <Header />
  <!-- 首页路由出口 -->
  <div class="HomeRouterExit">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component
          :is="Component"
          v-if="$route.meta.keepAlive"
          :key="$route.name"
        />
      </keep-alive>
      <component
        :is="Component"
        v-if="!$route.meta.keepAlive"
        :key="$route.name"
      />
    </router-view>
  </div>
</template>

<script setup>
import Header from "@/components/Home/Header.vue";
</script>
