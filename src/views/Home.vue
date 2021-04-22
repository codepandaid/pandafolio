<template>
  <div class="home">
    <img class="avatar" alt="logo-panda" src="../assets/logo-circle-panda.png" />
    <h1>This is an About Me page</h1>

    <div class="row align-items-center">
      <div class="col-lg-8">
        <div class="card">
          <h1>Description</h1>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card">
          <h1>Contact</h1>
        </div>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-lg-3">
        <div class="card">
          <h1>Overview 1</h1>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <h1>Overview 2</h1>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <h1>Overview 3</h1>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <h1>Overview 4</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {
  },
});
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 1200px;
  padding: 64px;
  background-color: aquamarine;
  margin: auto;
}
</style>