<template>
  <div class="index">
    <p>{{ $t("message.Home") }}</p>
    <button @click="changeLocale('zh')">中文</button>
    <button @click="changeLocale('en')">英文</button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const changeLocale = (lang) => {
  locale.value = lang;
};
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
