<template>
  <div>
    <app-header></app-header>
    <app-about></app-about>
    <app-projects></app-projects>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";

export default {
  name: "Home",
  components: {
    "app-header": Header,
    "app-about": About,
    "app-projects": Projects,
    "app-footer": Footer
  }
};
</script>
