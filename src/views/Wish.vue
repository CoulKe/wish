<template>
  <div class="wish">
    <form action="" method="get" v-on:submit.prevent>
      <h1>Fill and submit to send a wish</h1>
      <label for="name">Your name: </label>
      <input type="text" name="name" id="name" />
      <label for="message">Your message: </label>
      <textarea name="message" id="message" cols="25" rows="10"></textarea>
      <button type="submit">Share</button>
    </form>
      <Share v-if="displayShare" style="display: block;"></Share>
  </div>
</template>

<script>
import Share from "../components/Share.vue";
export default {
  name: "Wish",
  components: {
    Share,
  },
  data() {
    return {
      displayShare: false,
    };
  },
};
</script>

<style scoped>
form {
  text-align: left;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 250px;
  box-shadow: 0px 0px 8px 4px rgb(236, 236, 236);
}
form h1 {
  font-size: 20px;
  text-align: center;
}
form label {
  font-weight: bold;
}
form input {
  margin-bottom: 4px;
}
form input,
textarea,
button {
  margin-top: 4px;
  padding: 0.3rem;
}
input:focus,
textarea:focus {
  outline-color: #0fa198;
}
button {
  font-weight: 500;
  font-size: 1.2rem;
  cursor: pointer;
  color: #00fff0;
  background-color: #3b3a3a;
}
.share_component {
  display: none;
}
</style>>