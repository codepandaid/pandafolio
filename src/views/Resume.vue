<template>
  <div class="resume">
    <img class="avatar" alt="logo-panda" src="../assets/logo-circle-panda.png" />
    <h1>This is an Resume page</h1>

    <div class="row align-items-start">
      <div class="col-lg-6">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="card" style="min-height: 240px;">
              <h1>Skill</h1>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card" style="min-height: 240px;">
              <h1>Education</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card" style="min-height: 640px;">
          <h1>Experience</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
  components: {
  },
});
</script>

<style scoped>
.resume {
  width: 100%;
  max-width: 1200px;
  padding: 64px;
  background-color: aquamarine;
  margin: auto;
}
</style>