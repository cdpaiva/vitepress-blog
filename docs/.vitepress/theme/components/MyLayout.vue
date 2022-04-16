<template>
    <Layout>
        <template #navbar-search> <ToggleTheme /></template>
    </Layout>
</template>

<script>
import DefaultTheme from 'vitepress/theme'
import ToggleTheme from './ToogleTheme.vue'

const { Layout } = DefaultTheme

export default {
    components: {Layout, ToggleTheme}
}
</script>