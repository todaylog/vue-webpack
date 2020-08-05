<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/sub">Sub</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.nav {
  padding: 12px;
  background-color: #ddd;

  a {
    font-size: 18px;
  }
}
</style>
