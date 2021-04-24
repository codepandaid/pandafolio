<template>
    <div class="card-glow">
        <div class="row align-items-center">
        <div class="col-12 col-md-12 col-lg-3">
            <img class="project-logo" alt="logo-panda" :src="require(`@/assets/${cardLogo}`)" />
        </div>
        <div class="col-12 col-md-12 col-lg-9 text-left">
            <h2 class="project-name">My Project</h2>
            <p class="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum blandit elit, eget porttitor lectus fermentum sed. Sed eget mi viverra, maximus magna et, congue dui.</p>
            <div class="row align-items-center text-center">
            <div class="col-12 col-md-12 col-lg-3">
                <div class="badge">
                Feb 21 - Apr 21
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3">
                <div class="badge">
                Fullstack Engineer
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-3"></div>
            <div class="col-12 col-md-12 col-lg-3">
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
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "InformationCard",
  props: {
    cardLogo: {
        type: String,
        default: "project-default-logo.svg"
    },
    starRatingData: {
      type: [Object, Array],
    //   required: true,
      default: () => [
          {
            subtitle: "Subtitle",
            starRating: 0
          },
      ]
    },
  },
  computed: {
      starRatingDatas() {
        console.log("cek star data : ", this.starRatingData)
        return this.starRatingData;
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