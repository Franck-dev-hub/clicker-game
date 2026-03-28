<script>
// Jardinier galactique
// Ambiance zen, lofi
// Fait pousser de la mousse / herbe / felurs / arbres ...
// Change la couleur en fonction du niveau d'oxygene

export default {
  // Properties exposed on 'this'
  data() {
    return {
      money: 0,
      clickValue: 1,
      autoClicker: 0
    }
  },

  // Function used continuously
  methods: {
    updateMoney() {
      this.money += this.clickValue;
    },
    updateValue() {
      this.clickValue++;
    }
  },

  // Function use at start
  mounted() {
    console.log(`The initial count is ${this.money} flouz and ${this.clickValue} click value.`)
  }
}
</script>

<template>
  <button @click="updateMoney">Money {{ money }}</button> flouz<br>
  <button @click="updateValue">Click value {{ clickValue }}</button> / click
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
