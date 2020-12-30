<template>
  <h1 id="color_message">
    <span style="color: green">h</span>
    <span style="color: purple">a</span>
    <span style="color: red">p</span>
    <span style="color: blue">p</span>
    <span style="color: green">y</span>
    <br />
    <span style="color: teal">n</span>
    <span style="color: purple">e</span>
    <span style="color: #2C3E50">w</span>
    <span style="color: green">&nbsp;</span>
    <span style="color: blue">y</span>
    <span style="color: teal">e</span>
    <span style="color: #2C3E50">a</span>
    <span style="color: #000">r</span>
  </h1>
  <p>
    I wish you an amazing and joyous {{ new Date().getFullYear() }} . May you stay blessed!
  </p>
  <canvas id="my-canvas"></canvas>
  <p>From {{ $route.query.n || "Mysterious person" }}</p>
  <button>
    <router-link to="/wish">Click here to create yours</router-link>
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