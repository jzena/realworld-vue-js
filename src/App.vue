<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavBar";
export default {
  components: {
    Navbar
  }
};
</script>

<style></style>
