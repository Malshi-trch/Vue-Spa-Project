import { reactive, watch } from "vue";
import type { Recipe } from "../types/recipe";

interface AppState {
  currentTab: "search" | "favorite" | "profile";
  selectedRecipe: Recipe | null;
  favorites: number[];
  isAuthenticated: boolean;
  userEmail: string;
  darkMode: boolean;
}

const STORAGE_KEY = "recipe_app_state";

// Load initial state from local storage or set defaults
const savedState = localStorage.getItem(STORAGE_KEY);
const defaultState: AppState = savedState
  ? JSON.parse(savedState)
  : {
      currentTab: "search",
      selectedRecipe: null,
      favorites: [],
      isAuthenticated: false,
      userEmail: "",
      darkMode: false,
    };

export const state = reactive<AppState>(defaultState);

// Sync changes automatically across reloads
watch(
  () => ({ ...state }),
  (newState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));

    if (newState.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  { deep: true },
);

// Initialize theme class on boot
if (state.darkMode) document.documentElement.classList.add("dark");

export const actions = {
  setTab(tab: "search" | "favorite" | "profile") {
    state.currentTab = tab;
    state.selectedRecipe = null;
  },
  selectRecipe(recipe: Recipe | null) {
    state.selectedRecipe = recipe;
  },
  toggleFavorite(id: number) {
    const index = state.favorites.indexOf(id);
    if (index >= 0) state.favorites.splice(index, 1);
    else state.favorites.push(id);
  },
  login(email: string) {
    state.isAuthenticated = true;
    state.userEmail = email;
    state.currentTab = "search";
  },
  logout() {
    state.isAuthenticated = false;
    state.userEmail = "";
    state.currentTab = "profile";
  },
  toggleDarkMode() {
    state.darkMode = !state.darkMode;
  },
};
