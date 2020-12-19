<template>
  <div class="share_wrapper">
    <img src="../assets/icons/cancel.png" alt="cancel" id="cancel"/>
    <h1>Share through</h1>
    <div class="share_icons">
      <div class="social_icon">
        <img src="../assets/icons/whatsapp.png" alt="Whatsapp logo" />
        <p><a href="">Whatsapp</a></p>
      </div>
      <div class="social_icon">
        <img src="../assets/icons/facebook.png" alt="Facebook logo" />
        <p><a href="">Facebook</a></p>
      </div>
    </div>
    <!-- share_icons -->
  </div>
  <!-- share_wrapper -->
</template>

<script>
export default {
  name: "Share",
};
</script>

<style scoped>
#cancel{
    cursor: pointer;
    margin-top: 14px;
}
.share_wrapper {
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #fff;
}
.share_icons {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
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