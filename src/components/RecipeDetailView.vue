<template>
    <div class="recipe-detail">
        <div class="recipe-hero-image"></div>

        <h2 class="recipe-title">{{ recipe.title || 'Indian Yellow Rice' }}</h2>

        <div class="meta-strip">
            <span>⭐ 4.5</span>
            <span>⏱️ 20 min</span>
        </div>

        <div class="tabs-navigation">
            <button :class="{ active: activeTab === 'ingredients' }" @click="activeTab = 'ingredients'">
                Ingredients
            </button>
            <button :class="{ active: activeTab === 'instructions' }" @click="activeTab = 'instructions'">
                Instructions
            </button>
        </div>

        <div class="tab-content-panel">
            <div v-if="activeTab === 'ingredients'" class="ingredients-list">
                <ul>
                    <li>• 1.5 cup Washed and drained rice</li>
                    <li>• 3 cloves of garlic</li>
                    <li>• 1 inch piece of ginger</li>
                    <li>• 1 tbsp butter</li>
                    <li>• 4 cardamom</li>
                    <li>• 0.25 tsp turmeric powder</li>
                    <li>• 0.25 cup chopped onion</li>
                    <li>• 2 cup chicken or vegetable stock</li>
                    <li>• 0.25 cup unsweetened coconut cream</li>
                </ul>
            </div>

            <div v-else class="instructions-steps">
                <ol>
                    <li><strong>1. Rinse the Rice:</strong> Wash the rice 2-3 times until the water runs clear to remove
                        excess starch.</li>
                    <li><strong>2. Toast the Rice:</strong> Before adding liquid, toast the rice in oil or butter for
                        1-2 minutes.</li>
                    <li><strong>3. Use Proper Ratio:</strong> The general ratio for perfect yellow rice is 1 part rice
                        to 2 parts liquid.</li>
                    <li><strong>4. Seal the Steam:</strong> Once the rice is simmering, let it rest, covered, for
                        another 5-10 minutes.</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    recipe: Object
});

const activeTab = ref('ingredients');
</script>

<style scoped>
.recipe-hero-image {
    width: 100%;
    height: 220px;
    background-color: #e5c158;
    border-radius: 16px;
    margin-bottom: 15px;
}

.recipe-title {
    margin-bottom: 5px;
    font-size: 22px;
}

.meta-strip {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    opacity: 0.8;
    font-size: 14px;
}

.tabs-navigation {
    display: flex;
    border-bottom: 2px solid var(--accent-gray);
    margin-bottom: 15px;
}

.tabs-navigation button {
    flex: 1;
    padding: 10px;
    background: none;
    border: none;
    color: var(--text-color);
    font-weight: 600;
    cursor: pointer;
}

.tabs-navigation button.active {
    border-bottom: 3px solid var(--primary-green);
    color: var(--primary-green);
}

.tab-content-panel {
    line-height: 1.6;
    font-size: 14px;
}

.ingredients-list ul,
.instructions-steps ol {
    list-style: none;
}

.ingredients-list li,
.instructions-steps li {
    margin-bottom: 12px;
}
</style>