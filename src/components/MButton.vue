<script setup>
const props = defineProps({
    texto:String
})
</script>
<template>
    <button>{{ props.texto }}</button>
</template>

<style scoped>
button {
    background-color: antiquewhite ;
    color: blueviolet;
    font-size: 1.1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    }
    button:hover{
        background-color: brown;
    }
</style>