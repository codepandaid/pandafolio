<template>
  <div class="project">
    <img class="avatar" alt="logo-panda" src="../assets/logo-circle-panda.png" />
    <h1>This is an Project page</h1>

    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="card-glow">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <img class="project-logo" alt="logo-panda" src="../assets/project-default-logo.svg" />
            </div>
            <div class="col-lg-9 text-left">
              <h2 class="project-name">My Project</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum blandit elit, eget porttitor lectus fermentum sed. Sed eget mi viverra, maximus magna et, congue dui.</p>
              <div class="row align-items-center text-center">
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 1
                  </div>
                </div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 2
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card-glow">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <img class="project-logo" alt="logo-panda" src="../assets/project-default-logo.svg" />
            </div>
            <div class="col-lg-9 text-left">
              <h2 class="project-name">My Project</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum blandit elit, eget porttitor lectus fermentum sed. Sed eget mi viverra, maximus magna et, congue dui.</p>
              <div class="row align-items-center text-center">
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 1
                  </div>
                </div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 2
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-12">
        <div class="card-glow">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <img class="project-logo" alt="logo-panda" src="../assets/project-default-logo.svg" />
            </div>
            <div class="col-lg-9 text-left">
              <h2 class="project-name">My Project</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum blandit elit, eget porttitor lectus fermentum sed. Sed eget mi viverra, maximus magna et, congue dui.</p>
              <div class="row align-items-center text-center">
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 1
                  </div>
                </div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 2
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div style="background-color: #6fd0f5; margin: 8px; padding: 8px; border-radius: 8px;">
                    block 3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Project",
  components: {
  },
});
</script>

<style scoped>
.project {
  width: 100%;
  max-width: 1200px;
  padding: 64px;
  background-color: aquamarine;
  margin: auto;
}

.project-logo {
  width: 100%;
  max-width: 160px;
  border-radius: 50%;
}
</style>