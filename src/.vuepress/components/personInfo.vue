<template>InfoList</template>
<script setup>
import { useAttrs } from "vue";
const props = defineProps();
const slots = defineSlots();
const attrs = useAttrs();
console.log(attrs, slots, props);
</script>
