<template>
  <div class="flex justify-center w-full">
    <input
      type="text"
      placeholder="input poke name"
      class="mt-10 p-2 border-b-blue-600 border-2"
      v-model="text"
    />
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div
      v-for="(pokemon, idx) in filteredPokemon"
      class="ml-5 text-2xl text-blue-300"
      :key="idx"
    >
      <RouterLink :to="`/about/${urlIdLoopUp[pokemon.name]}`">
        {{ pokemon.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const state = reactive({
      pokemons: [],
      urlIdLoopUp: {},
      text: "",
      filteredPokemon: computed(() => updateFilteredPokemon()),
    });

    function updateFilteredPokemon() {
      if (!state.text) return [];
      return state.pokemons.filter((pokemon) =>
        pokemon.name.includes(state.text)
      );
    }

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        state.pokemons = data.results;
        state.urlIdLoopUp = data.results.reduce(
          (acc, cur, idx) => (acc = { ...acc, [cur.name]: idx + 1 }),
          {}
        );
      });

    return { ...toRefs(state) };
  },
};
</script>
