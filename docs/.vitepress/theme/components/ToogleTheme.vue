<template>
  <div class="toggleTheme" @click="toggle">
    <div class="light" v-if="isLight">🔆</div>
    <div class="dark" v-else>🌙</div>
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
  width: 1.5rem;
  margin-left: 1rem;
}
</style>