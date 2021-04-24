<template>
  <div>
    <div v-if="projectDatas && projectDatas.length !== 0">
      <div v-for="(data,index) in projectDatas" :key="index" class="card-glow">
        <div class="row align-items-center">
          <div class="col-12 col-md-12 col-lg-3">
              <img class="project-logo" alt="logo-panda" :src="data.logoType === 'local'? require(`@/assets/${data.cardLogo}`) : data.cardLogo" />
          </div>
          <div class="col-12 col-md-12 col-lg-9 text-left">
              <h2 class="project-name">{{ data.projectName }}</h2>
              <p class="project-desc" style="line-height: 1.7em;">{{ data.projectDesc }}</p>
              <div class="row align-items-center text-center">
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="badge">
                      {{ data.projectDate }}
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="badge">
                      {{ data.projectPosition }}
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-3"></div>
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="btn-default" @click="btnAction(data.projectLink)">
                      <div class="row align-items-center text-center">
                          <div class="col-lg-10">
                            <span>View Project</span>
                          </div>
                          <div class="col-lg-2">
                            <img class="btn-icon" src="../assets/icon/icon-btn-external.svg" alt="icon-btn">
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h2 class="project-name">Tidak ada Project Terdaftar</h2>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ProjectCard",
  props: {
    projectData: {
      type: [Object, Array],
    //   required: true,
      default: () => [
          {
            logoType: "local",
            cardLogo: "project-default-logo.svg",
            projectName: "Project Name",
            projectDesc: "Project Description",
            projectDate: "Project Date",
            projectPosition: "Project Position",
            projectLink: "https://google.com"
          },
      ]
    },
  },
  computed: {
    projectDatas() {
      return this.projectData;
    }
  },
  methods: {
    btnAction(link) {
      window.open(link);
    }
  }
});

</script>


<style lang="scss" scoped>
.project-logo {
  width: 100%;
  max-width: 160px;
  border-radius: 50%;
  margin: auto;
}

.badge {
  background-color: rgba(173, 160, 255, 0.32);
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .project-logo {
    width: 100%;
    max-width: 128px;
    margin: 16px auto;
  }

  .badge {
    font-size: 12px;
  }

  .btn-default {
    margin: 16px auto;
  }
}

@media screen and (max-width: 767px) {
  .project-filter-section {
    text-align: -webkit-center;
  }

  .dropdown {
    margin: 16px;
  }

  .project-logo {
    width: 100%;
    max-width: 128px;
    margin: 16px auto;
  }

  .badge {
    font-size: 12px;
  }

  .btn-default {
    margin: 16px auto;
  }
}
</style>