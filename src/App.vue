<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref<boolean>(false);

const toggleTheme = (): void => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted((): void => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 dark:bg-zinc-950 flex justify-center items-start py-0 md:py-6 transition-colors duration-300">
    <!-- Viewport Container strictly bounded to mobile frames matching Figma screens -->
    <main class="w-full max-w-md min-h-screen md:min-h-[844px] bg-white dark:bg-zinc-900 shadow-2xl relative flex flex-col overflow-hidden md:rounded-[40px] border border-transparent md:border-gray-200/50 dark:md:border-zinc-800">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :isDark="isDark" @toggle-theme="toggleTheme" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>