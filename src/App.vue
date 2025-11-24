<script setup>
import { RouterLink, RouterView } from "vue-router";
import navigation from "./components/navigation.vue";
import footerBlock from "./components/footerBlock.vue";
</script>

<template>
    <navigation/>
    <RouterView/>
    <footerBlock/>
</template>

<style scoped></style>
