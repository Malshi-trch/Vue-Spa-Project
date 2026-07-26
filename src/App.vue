<template>
  <div class="app-container" :class="{ 'dark-theme': isDark }">
    <!-- Main Content Area managed by Vue Router -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Bottom Navigation Bar using RouterLink -->
    <nav class="bottom-nav">
      <RouterLink to="/" class="nav-item" exact-active-class="active">
        <span class="icon">🔍</span>
        <span class="label">search</span>
      </RouterLink>
      <RouterLink to="/recipes" class="nav-item" exact-active-class="active">
        <span class="icon">❤️</span>
        <span class="label">favorite</span>
      </RouterLink>
      <RouterLink to="/profile" class="nav-item" exact-active-class="active">
        <span class="icon">👤</span>
        <span class="label">profile</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDark = ref(true); 
</script>

<style>
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --card-bg: #f9f9f9;
  --primary-green: #2e6f40;
  --accent-gray: #e0e0e0;
  --nav-bg: #ffffff;
}

.dark-theme {
  --bg-color: #121212;
  --text-color: #ffffff;
  --card-bg: #1e1e1e;
  --primary-green: #42b983;
  --accent-gray: #333333;
  --nav-bg: #1a1a1a;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
}

.app-container {
  width: 100%;
  max-width: 450px;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  padding: 20px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  height: 65px;
  background-color: var(--nav-bg);
  border-top: 1px solid var(--accent-gray);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  font-size: 12px;
}

.nav-item.active {
  opacity: 1;
  font-weight: bold;
}

.nav-item .icon {
  font-size: 20px;
  margin-bottom: 2px;
}
</style>