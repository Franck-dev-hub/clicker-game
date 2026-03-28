<!-- JS -->
<script setup>
import { ref, computed, onMounted } from "vue";
import MainPanel from "./html/main.vue";
import "./css/style.css";
import { skyColor } from "@/js/utils/skyColor.js";
import { toggleMusic } from "@/js/utils/toggleMusic.js";
import { getStardust } from "@/js/utils/collectMoney.js";
import { buyPlant } from "@/js/utils/buyPlant.js";
import { updateO2 } from "@/js/utils/updateO2.js";

// Game variables
const stardust = ref(0);
const clickValue = ref(1);
const o2Lvl = ref(0);
const plantCount = ref(0);
const plantCost = ref(10);
const isPlaying = ref(false);
const bgMusic = ref(null);

// Used if data has changed
const handleSkyColor = computed(() => skyColor(o2Lvl.value));

// Function used continuously
const onGetStardust = () => {
  stardust.value = getStardust(stardust.value, clickValue.value);
};

const onBuyPlant = () => {
  const result = buyPlant(stardust.value, plantCost.value, plantCount.value);

  if (result.success) {
    stardust.value = result.money;
    plantCount.value = result.plantCount;
    plantCost.value = result.plantCost;
  }
};

const onToggleMusic = () => {
  if (bgMusic.value) {
    isPlaying.value = toggleMusic(isPlaying.value, bgMusic.value);
  }
};

// Function use at start
onMounted(() => {
  setInterval(() => {
    o2Lvl.value = updateO2(o2Lvl.value, plantCount.value);
  }, 1000);
});
</script>

<template>
  <div class="galaxy-container" :style="{ backgroundColor: handleSkyColor }">
    <audio ref="bgMusic" src="/assets/music/audio1.mp3" loop></audio>

    <MainPanel
      v-model:stardust="stardust"
      :o2Lvl="o2Lvl"
      :plantCount="plantCount"
      :plantCost="plantCost"
      :isPlaying="isPlaying"
      @toggle-music="onToggleMusic"
      @get-stardust="onGetStardust"
      @buy-plant="onBuyPlant"
    />
  </div>
</template>

<style scoped></style>
