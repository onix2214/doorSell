<script setup>
import services from "@/components/services.vue";
import ourProducts from "@/components/ourProducts.vue";
import info from "@/components/info.vue";
import reviews from "@/components/reviews.vue";
import footerBlock from "@/components/footerBlock.vue";
</script>
<template>
    <div class="d-flex align-items-center justify-content-center flex-column">
        <services/>
        <ourProducts/>
        <info/>
        <reviews/>
    </div>
</template>