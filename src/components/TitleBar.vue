<!-- src/components/TitleBar.vue -->
<template>
  <div class="titlebar" data-tauri-drag-region>
    <div class="window-controls">
      <button class="minimize" @click="minimize">
        <svg class="minimize-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="maximize" @click="toggleMaximize">
        <svg class="maximize-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 15L12 9L18 15"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="close" @click="close">
        <svg class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()

const minimize = () => appWindow.minimize()
const toggleMaximize = () => appWindow.toggleMaximize()
const close = () => appWindow.close()
</script>

<style scoped>
.titlebar {
  height: 40px;
  background: #102E4A;
  display: flex;
  justify-content: flex-end;
  user-select: none;
  -webkit-user-select: none;
}

.window-controls {
  display: flex;
  height: 100%;
}

.window-controls button {
  width: 46px;
  height: 100%;
  border: none;
  background: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.window-controls button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.window-controls .close:hover {
  background: #e81123;
}

.minimize-icon,
.maximize-icon,
.close-icon {
  width: 18px;
  height: 18px;
  color: white; /* Inherits color from parent button */
}

[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
</style>
