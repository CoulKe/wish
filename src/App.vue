<template>
  <div class="view">
    <h1 class="intro">Let's wish</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span id="link_separator">&nbsp;</span>
      <router-link to="/wish">Wish</router-link>
    </div>
    <router-view />
  </div>
  <footer>
    Developed by <a href="https://thatcoul.netlify.app">Luteya Coulston</a>
  </footer>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
body{
  background-color: rgb(252, 252, 254);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: inherit;
}
.view{
  min-height: 85vh;
}
.intro {
  font-family: cursive;
  text-align: center;
  color: #000;
  background-color: #00ffff;
  margin: 0;
}
#nav {
  background-color: #000000;
  padding: 20px;
  margin-bottom: 30px;
}
#link_separator {
  background-color: #ffffff;
  display: inline-block;
  width: 2px;
  margin-left:4px;
  margin-right:4px;
}
#nav a {
  font-weight: bold;
  color: #fff;
  padding: 8px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fff;
  border-bottom: 4px solid #00ffff;
}

footer {
  padding: 1rem;
  color: #fff;
  background-color: #282828;
}
footer a {
  color: #00ffff;
  text-decoration: none;
}
.green-link {
  color: #025c2f;
  font-weight: 600;
  text-decoration: none;
}
</style>
