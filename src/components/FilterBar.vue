<template>
    <div class="p-4 space-y-3 bg-gray-50 dark:bg-gray-950 transition-colors">
        <!-- Top Primary Pills -->
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button v-for="cat in mainCategories" :key="cat" @click="selectMainCategory(cat)"
                class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150"
                :class="activeMain === cat
                    ? 'bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-900 shadow-sm'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'">
                {{ cat }}
            </button>
        </div>

        <!-- Subcategory Overlay Menu triggered by active category state -->
        <div v-if="isOpen"
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-3 shadow-md flex flex-col gap-2 max-h-48 overflow-y-auto">
            <button v-for="sub in submenus[activeMain] || []" :key="sub" @click="selectSubCategory(sub)"
                class="w-full text-center py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors">
                {{ sub }}
            </button>
            <button @click="isOpen = false" class="text-xs text-rose-500 font-medium py-1">✕ Close Menu</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['filter-change']);
const mainCategories = ['All Recipes', 'Breakfast', 'Lunch', 'Dinner', 'Vegetarian'];
const activeMain = ref('All Recipes');
const isOpen = ref(false);

const submenus: Record<string, string[]> = {
    'Breakfast': ['Milk rice', 'Hoppers', 'String-hoppers', 'Bread', 'Pancakes'],
    'Lunch': ['Rice and Curry', 'Noodles', 'Pasta', 'Coconut Rotti', 'Biryani'],
    'Dinner': ['Kottu', 'Noodles', 'Coconut Rotti', 'Soup'],
    'Vegetarian': ['Salad', 'Dhal Curry', 'Vegetable Soup', 'Tofu Stir-fry']
};

const selectMainCategory = (cat: string) => {
    activeMain.value = cat;
    isOpen.value = cat !== 'All Recipes';
    emit('filter-change', { main: cat, sub: '' });
};

const selectSubCategory = (sub: string) => {
    isOpen.value = false;
    emit('filter-change', { main: activeMain.value, sub });
};
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>