<template>
    <div class="recipes-view">
        <div v-if="selectedRecipe">
            <button class="back-pill" @click="selectedRecipe = null">← Back to recipes</button>
            <RecipeDetailView :recipe="selectedRecipe" />
        </div>

        <div v-else>
            <div class="header-section">
                <h2>Find Your Next Meal</h2>
                <div class="search-box">
                    <input type="text" placeholder="Search for your recipe" />
                </div>
            </div>

            <div class="filter-scroll">
                <button class="pill" @click="toggleDropdown">Breakfast ▾</button>
                <button class="pill">Lunch</button>
                <button class="pill">Dinner</button>
                <button class="pill">Vegetarian</button>
            </div>

            <div v-if="showDropdown" class="dropdown-overlay-panel">
                <ul class="dropdown-list">
                    <li v-for="item in subCategories" :key="item" @click="selectSubCategory(item)">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="recipes-grid">
                <div class="recipe-card" v-for="recipe in recipesList" :key="recipe.id" @click="viewRecipe(recipe)">
                    <div class="card-img-placeholder"></div>
                    <h4 class="card-title">{{ recipe.title }}</h4>
                    <div class="card-meta">
                        <span class="rating">⭐ {{ recipe.rating }}</span>
                        <span class="time">⏱️ {{ recipe.time }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RecipeDetailView from '../components/RecipeDetailView.vue/index.js';

const showDropdown = ref(false);
const selectedRecipe = ref(null);

const subCategories = [
    'Rice and Curry', 'Milk rice', 'Hoppers',
    'Noodles', 'Pasta', 'Coconut Rotti',
    'Bread', 'String-hoppers'
];

const recipesList = ref([
    { id: 1, title: 'Indian Yellow Rice', rating: '4.5', time: '20 min' },
    { id: 2, title: 'Header for recipe cards', rating: '4.5', time: '20 min' },
    { id: 3, title: 'Header for recipe cards', rating: '4.5', time: '20 min' },
    { id: 4, title: 'Header for recipe cards', rating: '4.5', time: '20 min' },
    { id: 5, title: 'Header for recipe cards', rating: '4.5', time: '20 min' },
    { id: 6, title: 'Header for recipe cards', rating: '4.5', time: '20 min' },
]);

function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
}

function selectSubCategory(item) {
    showDropdown.value = false;
}

function viewRecipe(recipe) {
    selectedRecipe.value = recipe;
}
</script>

<style scoped>
.search-box {
    background-color: var(--card-bg);
    border: 1px solid var(--accent-gray);
    border-radius: 8px;
    padding: 8px 12px;
    margin: 15px 0;
}

.search-box input {
    background: none;
    border: none;
    color: var(--text-color);
    width: 100%;
    outline: none;
}

.filter-scroll {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    margin-bottom: 20px;
    padding-bottom: 5px;
}

.pill {
    padding: 8px 16px;
    background-color: var(--accent-gray);
    color: var(--text-color);
    border: none;
    border-radius: 20px;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 500;
}

.dropdown-overlay-panel {
    background-color: var(--card-bg);
    border: 1px solid var(--accent-gray);
    border-radius: 12px;
    padding: 10px;
    margin-bottom: 20px;
}

.dropdown-list {
    list-style: none;
}

.dropdown-list li {
    padding: 10px;
    text-align: center;
    background-color: var(--accent-gray);
    margin-bottom: 6px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
}

.recipes-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.recipe-card {
    background-color: var(--bg-color);
    border: 1px solid var(--accent-gray);
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
}

.card-img-placeholder {
    width: 100%;
    height: 100px;
    background-color: #ddd;
    border-radius: 8px;
    margin-bottom: 8px;
}

.card-title {
    font-size: 13px;
    margin-bottom: 10px;
    line-height: 1.3;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    opacity: 0.8;
}

.back-pill {
    padding: 6px 12px;
    background: var(--accent-gray);
    border: none;
    border-radius: 15px;
    color: var(--text-color);
    margin-bottom: 15px;
    cursor: pointer;
}
</style>