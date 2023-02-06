<template>
  <!-- 账号相关路由出口 -->
  <div class="LoginRouterExit">
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

<script setup></script>
