<template>
  <div class="project">
    <div class="row align-items-center">
      <div class="col-12 col-md-12 col-lg-12">
        <div class="project-filter-section">
          <div class="row align-items-center">
            <div class="col-12 col-md-12 col-lg-8"></div>
            <div class="col-12 col-md-6 col-lg-2">
              <span class="filter-text">Filter Category:</span>
            </div>
            <div class="col-12 col-md-6 col-lg-2">
              <div class="dropdown">
                <div class="btn-dropdown">
                  <div class="row align-items-center text-left">
                    <div class="col-10 col-lg-10">
                      <span>Semua</span>
                    </div>
                    <div class="col-2 col-lg-2">
                      <img class="btn-icon-dropdown" src="../assets/icon/icon-btn-dropdown.svg" alt="icon-btn">
                    </div>
                  </div>
                </div>
                <div class="dropdown-content">
                  <p>UI/UX</p>
                  <p>Fullstack Engineer</p>
                  <p>Frontend Engineer</p>
                  <p>Backend Engineer</p>
                  <p>Infrastructure Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-12">
        <project-card></project-card>
        <project-card></project-card>
        <project-card></project-card>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ProjectCard from "@/components/ProjectCard.vue";

export default Vue.extend({
  name: "Project",
  components: {
    ProjectCard
  },
});
</script>

<style lang="scss" scoped>
.project {
  width: 100%;
  max-width: 1200px;
  padding: 64px 0px;
  margin: auto;
}

.project-filter-section {
  padding: 0px 32px;
  margin: 0px 24px;
}

.filter-text {
  font-size: 16px;
}
</style>