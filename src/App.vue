<script setup>
import ListagemLivros from '@/components/ListagemLivros.vue'
import MeuCarrinho from '@/components/MeuCarrinho.vue'
import { RouterView } from 'vue-router'


</script>

<template>
  <h1>Minha livraria</h1>
  <div class="container-geral">
    <ListagemLivros />
    <MeuCarrinho />
   <router-view/>
  </div>

</template>

<style scoped>
.container-geral {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

</style>