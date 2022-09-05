<template>
  <div
    v-if="pokemon"
    class="flex w-64 m-auto bg-blue-200 mt-4 shadow-2xl justify-center flex-col items-center"
  >
    <h1 class="text-4xl text-blue-600 flex justify-center uppercase">
      {{ pokemon.name.toUpperCase() }}
    </h1>
    <div class="flex justify-center">
      <img class="w-48" :src="pokemon.sprites.front_shiny" alt="" />
      <img class="w-48" :src="pokemon.sprites.back_shiny" alt="" />
    </div>
    <h1 class="flex justify-center text-yellow-700 text-3xl">Types:</h1>
    <div
      v-for="(type, idx) in pokemon.types"
      :id="idx"
      class="flex justify-center text-green-600 text-3xl"
    >
      {{ type.type.name }}
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      pokemon: null,
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}/`)
      .then((res) => res.json())
      .then((json) => {
        state.pokemon = json;
      });
    return { ...toRefs(state) };
  },
};
</script>
