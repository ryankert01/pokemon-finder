<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <RouterLink
    class="p-14 font-bold flex justify-center text-5xl text-lime-600 hover:text-lime-500 md:text-7xl"
    to="/"
  >
    Pokemon Picker
  </RouterLink>
  <RouterView />
</template>
