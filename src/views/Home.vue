<template>
  <div id="home" class="home">
    <div class="row align-items-start text-left">
      <div class="col-lg-7">
        <div class="card">
          <h2 class="section-title">Description</h2>
          <div class="row align-items-start text-left">
            <div class="col-lg-4">
              <span class="section-subtitle">
                Bio
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                Computer Science Student’s who loves tempe orek
              </span>
            </div>

            <div class="col-lg-4">
              <span class="section-subtitle">
                Age
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                20 years old
              </span>
            </div>

            <div class="col-lg-4">
              <span class="section-subtitle">
                Address
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                Veteran Street, South Bekasi
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card">
          <h2 class="section-title">Contact</h2>

          <div class="row align-items-start text-left">
            <div class="col-lg-4">
              <span class="section-subtitle">
                Email
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                Computer Science Student’s who loves tempe orek
              </span>
            </div>
          </div>

          <div class="row align-items-start text-left">
            <div class="col-lg-4">
              <span class="section-subtitle">
                Phone/WA
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                +62-895-0715-3745
              </span>
            </div>
          </div>

          <div class="row align-items-start text-left">
            <div class="col-lg-4">
              <span class="section-subtitle">
                Line
              </span>
            </div>
            <div class="col-lg-8">
              <span class="section-text">
                berly_st2120
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-items-center text-center">
      <div class="col-lg-3">
        <div class="card-blue">
          <img class="overview" alt="logo-panda" src="../assets/icon/overview-1.svg" />
        </div>
        <span class="section-subtitle">
          Projects Done
        </span>
        <span class="section-text">
          7 Projects
        </span>
      </div>
      <div class="col-lg-3">
        <div class="card-blue">
          <img class="overview" alt="logo-panda" src="../assets/icon/overview-2.svg" />
        </div>
        <span class="section-subtitle">
          Points Earned
        </span>
        <span class="section-text">
          150 points
        </span>
      </div>
      <div class="col-lg-3">
        <div class="card-blue">
          <img class="overview" alt="logo-panda" src="../assets/icon/overview-3.svg" />
        </div>
        <span class="section-subtitle">
          Skills
        </span>
        <span class="section-text">
          6 skills
        </span>
      </div>
      <div class="col-lg-3">
        <div class="card-blue">
          <img class="overview" alt="logo-panda" src="../assets/icon/overview-4.svg" />
        </div>
        <span class="section-subtitle">
          Experiences
        </span>
        <span class="section-text">
          3 experiences
        </span>
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

<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 1200px;
  padding: 64px 0px;
  margin: auto;

  .section-subtitle,
  .section-text {
    padding-bottom: 8px;
  }
}
</style>