<template>
    <div class="bg-white dark:bg-gray-900 min-h-screen pb-24 transition-colors animate-fade-in">
        <!-- Context Top Bar -->
        <div
            class="p-4 flex items-center justify-between sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur z-10 border-b border-gray-100 dark:border-gray-800">
            <button @click="actions.selectRecipe(null)"
                class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-xs font-semibold rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                ← Back to recipes
            </button>
            <span class="text-sm font-bold text-gray-800 dark:text-white truncate max-w-xs">{{ recipe.name }}</span>
        </div>

        <!-- Image Showcase Frame -->
        <div class="w-full aspect-[4/3] md:max-h-96 overflow-hidden bg-gray-100 relative">
            <img :src="recipe.image" :alt="recipe.name" class="w-full h-full object-cover" />
            <div
                class="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md p-3 rounded-xl flex justify-between text-white text-sm">
                <span>⭐ {{ recipe.rating }} Rating</span>
                <span>⏱️ {{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} mins Total</span>
            </div>
        </div>

        <!-- Info Detail Body -->
        <div class="p-5 max-w-2xl mx-auto">
            <h2 class="text-2xl font-black text-gray-900 dark:text-white mb-4 text-center">{{ recipe.name }}</h2>

            <!-- Figma Style Custom Tab Toggle Setup -->
            <div class="grid grid-cols-2 gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl mb-6">
                <button @click="activeTab = 'instructions'" class="py-2.5 text-sm font-bold rounded-lg transition-all"
                    :class="activeTab === 'instructions' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'">
                    Instructions
                </button>
                <button @click="activeTab = 'ingredients'" class="py-2.5 text-sm font-bold rounded-lg transition-all"
                    :class="activeTab === 'ingredients' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'">
                    Ingredients
                </button>
            </div>

            <!-- Tab Content Frame panels -->
            <div class="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                <div v-if="activeTab === 'ingredients'"
                    class="bg-gray-50 dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <ul class="space-y-3">
                        <li v-for="(ing, idx) in recipe.ingredients" :key="idx" class="flex items-start gap-2">
                            <span class="text-blue-500 mt-0.5">•</span>
                            <span>{{ ing }}</span>
                        </li>
                    </ul>
                </div>

                <div v-else
                    class="bg-gray-50 dark:bg-gray-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <ol class="space-y-4">
                        <li v-for="(step, idx) in recipe.instructions" :key="idx" class="flex gap-3">
                            <span class="font-bold text-blue-500 min-w-[1.25rem]">{{ idx + 1 }}.</span>
                            <span>{{ step }}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Recipe } from '../types/recipe';
import { actions } from '../store/appStore';

defineProps<{ recipe: Recipe }>();
const activeTab = ref<'instructions' | 'ingredients'>('instructions');
</script>