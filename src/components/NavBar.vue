<script setup lang="ts">
// Define the "contract" for what this component sends to the parent
const emit = defineEmits<{
  (e: 'search', query: string): void
}>();

// Simple handler that adheres to the contract
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('search', target.value);
};
</script>

<template>
  <nav class="p-4 bg-white shadow-md border-b">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">Recipe Book</h1>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        @input="handleInput"
        class="border rounded-lg px-3 py-2 w-64"
      />
    </div>
  </nav>
</template>