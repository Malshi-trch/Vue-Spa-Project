<template>
    <div class="p-6 max-w-sm mx-auto min-h-[70vh] flex flex-col justify-center transition-colors">
        <div
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm text-center">
            <!-- Profile Wireframe Icon -->
            <div
                class="w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl text-gray-400">
                👤
            </div>

            <div v-if="state.isAuthenticated">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Welcome Back!</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">{{ state.userEmail }}</p>
                <button @click="actions.logout"
                    class="w-full py-2.5 bg-rose-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-rose-700 transition-colors">
                    Log Out
                </button>
            </div>

            <form v-else @submit.prevent="handleLogin" class="space-y-3 text-left">
                <div>
                    <label class="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Enter username:</label>
                    <input type="text" required
                        class="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-2.5 text-sm border-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label class="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Enter email
                        address:</label>
                    <input type="email" v-model="emailInput" required
                        class="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-2.5 text-sm border-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label class="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Enter Password:</label>
                    <input type="password" required
                        class="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-2.5 text-sm border-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit"
                    class="w-full mt-4 py-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl text-sm font-bold shadow-sm transition-colors">
                    Sign In / Register
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { state, actions } from '../store/appStore';

const emailInput = ref('');
const handleLogin = () => {
    if (emailInput.value) actions.login(emailInput.value);
};
</script>