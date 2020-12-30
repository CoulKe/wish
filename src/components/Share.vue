<template>
  <div class="share_wrapper">
    <img
      src="../assets/icons/cancel.png"
      alt="cancel"
      id="cancel"
      @click="cancelMenu($event)"
    />
    <h1>Share through</h1>
    <div class="share_icons">
      <div class="social_icon">
        <a :href="whatsapp">
          <img src="../assets/icons/whatsapp.png" alt="Whatsapp logo" />
          <p>Whatsapp</p>
        </a>
      </div>
      <div class="social_icon">
        <a :href="facebook">
          <img src="../assets/icons/facebook.png" alt="Facebook logo" />
          <p>Facebook</p>
        </a>
      </div>
    </div>
    <!-- share_icons -->
  </div>
  <!-- share_wrapper -->
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Mysterious person",
    },
    templateValue: {
      type: String,
    }
  },
  methods: {
    /**
     * Hides the menu
     * @param $event event object
     */
    cancelMenu: function ($event) {
      $event.target.parentElement.style = "display: none;";
    },
  },
  computed: {
    facebook: function () {
      return `https://www.facebook.com/share.php?u=https://letswish.netlify.app/${this.templateValue}?n= ${
        this.name + "" || "Mysterious person"
      }`;
    },
    whatsapp: function () {
      return `whatsapp://send?text=Check%20this%20out%20https://letswish.netlify.app/${this.templateValue}?n=${
        this.name + "" || "Mysterious%20person"
      }`;
    },
  },
};
</script>

<style scoped>
#cancel {
  cursor: pointer;
  margin-top: 14px;
}
a {
  text-decoration: none;
}
.share_wrapper {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  text-align: center;
  background-color: #fff;
}
.share_icons {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  max-width: 350px;
}
.social_icon {
  padding: 4px;
  width: 100%;
  font-weight: bold;
}
img {
  width: 40px;
}
</style>