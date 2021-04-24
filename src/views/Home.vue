<template>
  <div id="home" class="home">
    <div class="row align-items-start text-left">
      <div class="col-12 col-md-12 col-lg-7">
        <information-card :sectionTitle="'Description'" :informationData="InformationData.descriptionData"></information-card>
      </div>
      <div class="col-12 col-md-12 col-lg-5">
        <information-card :sectionTitle="'Contact'" :informationData="InformationData.contactData"></information-card>
      </div>
    </div>

    <div class="row align-items-center text-center">
      <div class="col-6 col-md-6 col-lg-3">
        <overview-card
          :cardLogo="overviewData[0].cardLogo"
          :cardTitle="overviewData[0].cardTitle"
          :cardValue="overviewData[0].cardValue"
        ></overview-card>
      </div>
      <div class="col-6 col-md-6 col-lg-3">
        <overview-card
          :cardLogo="overviewData[1].cardLogo"
          :cardTitle="overviewData[1].cardTitle"
          :cardValue="overviewData[1].cardValue"
        ></overview-card>
      </div>
      <div class="col-6 col-md-6 col-lg-3">
        <overview-card
          :cardLogo="overviewData[2].cardLogo"
          :cardTitle="overviewData[2].cardTitle"
          :cardValue="overviewData[2].cardValue"
        ></overview-card>
      </div>
      <div class="col-6 col-md-6 col-lg-3">
        <overview-card
          :cardLogo="overviewData[3].cardLogo"
          :cardTitle="overviewData[3].cardTitle"
          :cardValue="overviewData[3].cardValue"
        ></overview-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AboutModel from "@/model/about";

import InformationCard from "@/components/InformationCard.vue";
import OverviewCard from "@/components/OverviewCard.vue";

export default Vue.extend({
  name: "Home",
  components: {
    InformationCard,
    OverviewCard
  },
  data() {
    return {
      InformationData: new AboutModel(),
    }
  },
  computed: {
    overviewData(): any {
      return this.InformationData.overviewData;
    },
  }
});
</script>

<style lang="scss" scoped>
// * {
//   border: solid 1px red;
// }

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

@media screen and (min-width: 768px) and (max-width: 1024px) {}

@media screen and (max-width: 767px) {
  .home {
    width: 100%;
    max-width: 300px;
    padding: 32px 0px;
    margin: auto;

    .section-subtitle,
    .section-text {
      padding-bottom: 8px;
    }
  }
}

</style>