<template>
  <div class="wish">
    <form action="" method="get" v-on:submit.prevent="showIcons">
      <h1>Fill and submit to send a wish</h1>
      <label for="template">Choose template:</label>
      <select name="template" id="template" @click="toggleDisplay($event)">
        <option value="">--Select--</option>
        <option value="x">Christmas</option>
        <option value="y">New year</option>
        <option value="b">Birthday</option>
      </select>
      <label for="name" v-if="templateValue !== ''">{{ placeLabel }} </label>
      <input type="text" v-if="templateValue !== ''" name="name" id="name" v-model="name" />
      <label for="message" v-if="templateValue === 'custom'"
        >Your message:
      </label>
      <button type="submit" id="shareButton">Share</button>
    </form>
    <Share id="share" :name="name" :templateValue="templateValue"></Share>
  </div>
</template> 

<script>
import Share from "../components/Share.vue";
export default {
  name: "Wish",
  data() {
    return {
      name: "",
      templateValue: "",
    };
  },
  components: {
    Share,
  },
  methods: {
    showIcons: function () {
      if (this.templateValue === "") {
        alert('Choose a template');
      }
      else if(this.name === ''){
        alert('Fill your name');
      }
      else{
        let s = document.querySelector("#share");
        s.style = "display: block;";
      }
    },
    /**
     * Hides name field if template is empty
     * @param $event Event object
     * @return void
     */
    toggleDisplay: function ($event) {
      this.templateValue = $event.target.value;
    },
  },
  computed: {
    /**
     * Dynamically inserts label by checking templateValue
     */
    placeLabel: function () {
      if (this.templateValue === "b") {
        return "Friend's name";
      } else {
        return "Your name";
      }
    },
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