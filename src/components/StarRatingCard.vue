<template>
    <div class="card">
        <h2 class="section-title">{{ sectionTitle }}</h2>

        <div v-for="(data,index) in starRatingDatas" :key="index" class="row align-items-center row-line" style="padding: 8px 0px;">
            <div class="col-12 col-lg-8">
                <span class="section-subtitle">
                    {{ data.subtitle }}
                </span>
            </div>
            <div class="col-12 col-lg-4">
                <div class="star-container">
                    <div v-if="data.starRating === 0" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-if="data.starRating === 0.5" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-half.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 1" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 1.5" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-half.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 2" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 2.5" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-half.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 3" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 3.5" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-half.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 4" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else-if="data.starRating === 4.5" class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-half.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-empty.svg" alt="star">
                        </div>
                    </div>

                    <div v-else class="row align-items-center">
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
                        </div>
                        <div class="col">
                            <img class="star-rating" src="../assets/icon/icon-star-full.svg" alt="star">
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
    sectionTitle: {
        type: String,
        default: "Section Title"
    },
    starRatingData: {
      type: [Object, Array],
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
        return this.starRatingData;
      }
  }
});

</script>


<style lang="scss" scoped>

</style>