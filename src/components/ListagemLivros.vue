<script setup>
import { livros } from '@/_data/livros.js'

import cardlivro from './components/cardlivro.vue'

</script>

<template>
    <div class="listagem-livros">
      <cardlivro v-for="livro in livros" :key="livro.id" :livro="livro" />
    </div>
</template>

<style scoped>
.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}</style>