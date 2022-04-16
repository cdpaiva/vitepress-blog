<template>
  <div class="toggleTheme" @click="toggle">
    {{isLight ? '🌙' : '🔆'}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLight: true
        }
    },
    methods: {
        toggle() {
            const html = document.querySelector("html")
            html.classList.toggle("dark")
            this.isLight = !this.isLight
        }
    }
}
</script>

<style scoped>
.toggleTheme {
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 1rem;
}
</style>