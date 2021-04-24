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
                      <span>{{ filterType }}</span>
                    </div>
                    <div class="col-2 col-lg-2">
                      <img class="btn-icon-dropdown" src="../assets/icon/icon-btn-dropdown.svg" alt="icon-btn">
                    </div>
                  </div>
                </div>
                <div class="dropdown-content">
                  <div>
                    <p @click="filter('semua')">Semua</p>
                  </div>
                  <div v-for="(data,index) in filterData" :key="index">
                    <p @click="filter(data)">{{ data }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-12">
        <project-card :projectData="tempData"></project-card>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ProjectModel from "@/model/project";
import ProjectCard from "@/components/ProjectCard.vue";

export default Vue.extend({
  name: "Project",
  components: {
    ProjectCard
  },
  data() {
    return {
      projectData: new ProjectModel(),
      tempData: [],
      filterType: "semua"
    }
  },
  computed: {
    filterData(): any {
      return [...new Set(this.projectData.projectData.map(item => item.projectPosition))];
    }
  },
  created() {
    this.tempData = this.projectData.projectData;
  },
  methods: {
    filter(type: string) {
      this.filterType = type;
      if(type === "semua") {
        return this.tempData = this.projectData.projectData;
      }
      this.tempData = this.projectData.projectData.filter((item,index) => {
        return item.projectPosition === type;
      })
    }
  }
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