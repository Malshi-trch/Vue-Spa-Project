<template>
    <div class="home-view">
        <header class="brand-header">
            <h1 class="logo-text">RECIPE BOOK</h1>
            <p class="tagline">Find Your Favourite Meal...</p>
        </header>

        <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="SEARCH FOR YOUR RECIPE" />
        </div>

        <div class="category-tabs">
            <button class="pill active">Breakfast</button>
            <button class="pill">Lunch</button>
            <button class="pill">Dinner</button>
        </div>

        <div class="featured-row">
            <div class="circle-item-wrap">
                <div class="circle-img-box placeholder-pudding"></div>
            </div>
            <div class="circle-item-wrap">
                <div class="circle-img-box placeholder-rice"></div>
            </div>
            <div class="circle-item-wrap">
                <div class="circle-img-box placeholder-salad"></div>
            </div>
        </div>

        <button class="action-btn" @click="$emit('navigate', 'recipes')">
            Go to recipes
        </button>
    </div>
</template>

<script setup>
defineEmits(['navigate']);
</script>

<style scoped>
.brand-header {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 25px;
}

.logo-text {
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 800;
}

.tagline {
    font-size: 14px;
    opacity: 0.8;
    margin-top: 5px;
}

.search-box {
    display: flex;
    align-items: center;
    background-color: var(--card-bg);
    border: 1px solid var(--accent-gray);
    border-radius: 25px;
    padding: 10px 15px;
    margin-bottom: 30px;
}

.search-box input {
    background: none;
    border: none;
    color: var(--text-color);
    width: 100%;
    margin-left: 10px;
    outline: none;
}

.category-tabs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}

.pill {
    flex: 1;
    margin: 0 5px;
    padding: 10px 0;
    border-radius: 20px;
    border: none;
    background-color: var(--accent-gray);
    color: var(--text-color);
    font-weight: 600;
    cursor: pointer;
}

.pill.active {
    background-color: #8c8c8c;
    color: white;
}

.featured-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 40px;
}

.circle-item-wrap {
    flex: 1;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid var(--accent-gray);
}

.circle-img-box {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-color: #ccc;
}

.action-btn {
    width: 60%;
    background-color: #1e5631;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
}
</style>