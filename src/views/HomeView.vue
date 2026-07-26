<template>
    <div>
        <!-- 1. The top navigation bar -->
        <NavBar />

        <main class="container mx-auto p-4">
            <!-- 2. The filter tools underneath -->
            <FilterBar />

            <!-- 3. The grid displaying your items -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import FilterBar from '../components/FilterBar.vue'
import RecipeCard from '../components/RecipeCard.vue'
</script>