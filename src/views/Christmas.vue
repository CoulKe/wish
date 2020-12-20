<template>
  <h1 id="color_message">
    <span style="color: green">m</span>
    <span style="color: purple">e</span>
    <span style="color: red">r</span>
    <span style="color: blue">r</span>
    <span style="color: green">y</span>
    <br />
    <span style="color: teal">c</span>
    <span style="color: purple">h</span>
    <span style="color: #2C3E50">r</span>
    <span style="color: green">i</span>
    <span style="color: blue">s</span>
    <span style="color: teal">t</span>
    <span style="color: #2C3E50">m</span>
    <span style="color: #000">a</span>
    <span style="color: green">s</span>
  </h1>
  <p>
    May your days be filled with joy and be favoured by the universe during
    these period
  </p>
  <canvas id="my-canvas"></canvas>
  <p>From {{ $route.query.n || "Mysterious person" }}</p>
  <button>
    <router-link to="/wish?create=xmas">Click here to create yours</router-link>
  </button>
</template>
<script>
import ConfettiGenerator from "confetti-js";
export default {
  name: "Christmas",
  methods: {
    makeConfetti() {
      let confettiElement = document.getElementById("my-canvas");
      let confettiSettings = { target: confettiElement };
      let confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    },
  },
  mounted() {
    this.makeConfetti();
  },
};
</script>
<style scoped>
#color_message {
  font-size: 2.5rem;
  text-transform: capitalize;
}
canvas {
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
button {
  position: absolute;
  z-index: 2;
  bottom: 2;
  transform: translate(-50%, 50%);
  background-color: cyan;
  font-weight: bold;
  padding: 0.5rem;
  font-size: 1rem;
}
button a {
  text-decoration: none;
  color: #000000;
}
p {
  font-weight: bold;
}
</style>