<template>
    <nav
        class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-around items-center py-2 z-40 shadow-lg">
        <button @click="actions.setTab('search')" class="flex flex-col items-center flex-1 transition-colors"
            :class="state.currentTab === 'search' ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-500 dark:text-gray-400'">
            <span class="text-lg">🔍</span>
            <span class="text-xs mt-0.5">search</span>
        </button>
        <button @click="actions.setTab('favorite')" class="flex flex-col items-center flex-1 transition-colors"
            :class="state.currentTab === 'favorite' ? 'text-rose-600 dark:text-rose-400 font-semibold' : 'text-gray-500 dark:text-gray-400'">
            <span class="text-lg">⭐</span>
            <span class="text-xs mt-0.5">favorite</span>
        </button>
        <button @click="actions.setTab('profile')" class="flex flex-col items-center flex-1 transition-colors"
            :class="state.currentTab === 'profile' ? 'text-amber-600 dark:text-amber-400 font-semibold' : 'text-gray-500 dark:text-gray-400'">
            <span class="text-lg">👤</span>
            <span class="text-xs mt-0.5">profile</span>
        </button>
    </nav>
</template>

<script setup lang="ts">
import { state, actions } from '../store/appStore';
</script>