import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false) // Default light theme

  // Toggle function
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateDocumentClass()
  }

  // Apply CSS class to <html>
  const updateDocumentClass = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // Watch for changes
  watchEffect(updateDocumentClass)

  return { isDark, toggleTheme }
})
