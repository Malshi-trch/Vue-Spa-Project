<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ (e: 'filter', category: string): void }>();

const categories = ['All', 'Italian', 'Asian', 'Mexican', 'Indian', 'American', 'Mediterranean'];
const activeCategory = ref<string>('All');

const selectCategory = (cat: string) => {
  activeCategory.value = cat;
  emit('filter', cat);
};
</script>

<template>
  <div class="w-full overflow-x-auto no-scrollbar flex items-center gap-2 px-4 py-2 my-1">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="selectCategory(cat)"
      :class="[
        'px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200',
        activeCategory === cat 
          ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20' 
          : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-700'
      ]"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
/* Hidden utility scrollbar wrapper for modern touch scrolling */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>