<template>
  <div class="ui-panel">
    <button @click="$emit('toggle-music')">
      <span v-if="!isPlaying">Play music</span>
      <span v-else>Pause</span>
    </button>

    <h1>Galactic gardener</h1>
    <p class="subtitle">O2 Level : {{ o2Lvl }}</p>

    <div class="stats">
      <button @click="$emit('get-stardust')" class="btn-main">
        Gather stardust ({{ stardust }})</button
      ><br />

      <button @click="$emit('buy-plant')" :disabled="stardust < plantCost" class="btn-buy">
        Buy a plant ({{ plantCost }} stardust)</button
      ><br />
    </div>

    <div class="garden-status">
      <p>Total lifeforms : {{ plantCount }}</p>
      <p>O2 production : +{{ plantCount }}/sec</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stardust", "o2Lvl", "plantCount", "plantCost", "isPlaying"],
};
</script>
