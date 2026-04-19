<script setup lang="ts">
// 1. Define the event the parent (App.vue) will listen for
const emit = defineEmits<{
  (e: 'filter', category: string): void
}>();

// 2. Define your static categories (these could come from the API later)
const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

// 3. Simple function to send the selection to the parent
const selectCategory = (category: string) => {
  emit('filter', category);
};
</script>

<template>
  <div class="flex gap-2 p-4 justify-center">
    <button 
      v-for="cat in categories" 
      :key="cat"
      @click="selectCategory(cat)"
      class="px-4 py-2 border rounded-full hover:bg-blue-100 transition"
    >
      {{ cat }}
    </button>
  </div>
</template>