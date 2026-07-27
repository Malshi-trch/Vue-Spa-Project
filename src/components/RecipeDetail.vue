<template>
    <div class="recipe-detail bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-gray-100 dark:border-zinc-800">
        <!-- Hero Image Placeholder -->
        <div
            class="w-full aspect-video bg-gray-100 dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-4xl">
            🍲
        </div>

        <!-- Title & Meta -->
        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-1">
            {{ recipe.title || recipe.name }}
        </h3>
        <div class="flex gap-3 text-xs font-medium text-gray-500 dark:text-zinc-400 mb-4">
            <span>⭐ {{ recipe.rating }}</span>
            <span>⏱️ {{ recipe.time }}</span>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex border-b border-gray-100 dark:border-zinc-800 mb-4">
            <button @click="activeTab = 'ingredients'"
                :class="['pb-2 px-4 text-xs font-bold border-b-2 transition-colors', activeTab === 'ingredients' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-400']">
                Ingredients
            </button>
            <button @click="activeTab = 'instructions'"
                :class="['pb-2 px-4 text-xs font-bold border-b-2 transition-colors', activeTab === 'instructions' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-400']">
                Instructions
            </button>
        </div>

        <!-- Dynamic Content Panels -->
        <div class="text-sm text-gray-600 dark:text-zinc-300">
            <ul v-if="activeTab === 'ingredients'" class="list-disc list-inside space-y-1.5">
                <li v-for="(ingredient, idx) in recipe.ingredients" :key="idx">
                    {{ ingredient }}
                </li>
            </ul>
            <ol v-else class="list-decimal list-inside space-y-2">
                <li v-for="(step, idx) in recipe.instructions" :key="idx" class="leading-relaxed">
                    {{ step }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Recipe {
    id: number;
    title?: string;
    name?: string;
    rating: string;
    time: string;
    ingredients?: string[];
    instructions?: string[];
    [key: string]: any;
}

// Accept the selected recipe from the parent view
defineProps<{
    recipe: Recipe;
}>();

const activeTab = ref<'ingredients' | 'instructions'>('ingredients');
</script>