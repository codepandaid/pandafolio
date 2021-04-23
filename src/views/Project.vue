<template>
  <div class="project">
    <div class="row align-items-center">
      <div class="col-lg-12">
        <div class="project-filter-section">
          <div class="row align-items-center" style="margin: 24px;">
            <div class="col-lg-8"></div>
            <div class="col-lg-2">
              <span class="filter-text">Filter Berdasarkan:</span>
            </div>
            <div class="col-lg-2">
              <div class="dropdown">
                <div class="btn-dropdown">
                  <div class="row align-items-center text-left">
                    <div class="col-lg-10">
                      <span>Semua</span>
                    </div>
                    <div class="col-lg-2">
                      <img class="btn-icon-dropdown" src="../assets/icon/icon-btn-dropdown.svg" alt="icon-btn">
                    </div>
                  </div>
                </div>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
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
                  <div class="badge">
                    Feb 21 - Apr 21
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="badge">
                    Fullstack Engineer
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div class="btn-default">
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
                  <div class="badge">
                    Feb 21 - Apr 21
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="badge">
                    Fullstack Engineer
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div class="btn-default">
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
                  <div class="badge">
                    Feb 21 - Apr 21
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="badge">
                    Fullstack Engineer
                  </div>
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-3">
                  <div class="btn-default">
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

.project-logo {
  width: 100%;
  max-width: 160px;
  border-radius: 50%;
}

.badge {
  background-color: rgba(173, 160, 255, 0.32);
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
}
</style>