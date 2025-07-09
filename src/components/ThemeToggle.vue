<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore()
</script>

<template>
  <button @click="theme.toggleTheme">
    {{ theme.isDark ? '☀️' : '🌙' }}
  </button>
</template>
