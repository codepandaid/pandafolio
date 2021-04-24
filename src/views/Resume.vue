<template>
  <div class="resume">
    <div class="row align-items-start text-left">
      <div class="col-12 col-md-12 col-lg-6">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <star-rating-card :sectionTitle="'Skill'" :starRatingData="resumeData.starRatingData"></star-rating-card>
          </div>
          <div class="col-12 col-lg-12">
            <div class="card">
              <stepper-card :sectionTitle="'Education'" :stepperData="educationDatas"></stepper-card>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-12 col-lg-6">
        <div class="card">
          <stepper-card :sectionTitle="'Experience'" :stepperData="experienceDatas"></stepper-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import ResumeModel from "@/model/resume";

import StarRatingCard from "@/components/StarRatingCard.vue";
import StepperCard from "@/components/StepperCard.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    StarRatingCard,
    StepperCard
  },
  data() {
    return {
      resumeData: new ResumeModel()
    }
  },
  computed: {
    educationDatas(): any {
      return this.resumeData.educationData;
    },

    experienceDatas(): any {
      return this.resumeData.experienceData;
    }
  }
});
</script>

<style lang="scss" scoped>
.resume {
  width: 100%;
  max-width: 1200px;
  padding: 64px 0px;
  margin: auto;
}

.stepper-line {
  padding: 0px 32px;
  border-left: solid 2px #5577F0;
}

.stepper-dots {
  content: "";
  position: absolute;
  transform: translateX(-45px);
  background-color: #5577F0;
  width: 100%;
  max-width: 24px;
  height: 24px;
  border-radius: 50%;
}

.stepper-line.stepper-last {
  border-left: solid 2px rgba(0, 0, 0, 0);
}

.row-line {
  border-bottom: 2px solid rgba(56, 56, 56, 0.08);
  margin-bottom: 12px;
}

.row-line.last {
  border-bottom: none;
}

.stepper-content {
  display: inline-grid;
  transform: translateY(-6px);
}

.star-rating {
  width: 100%;
  max-width: 24px;
  height: auto;
  padding-bottom: 12px;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {}

@media screen and (max-width: 767px) {
  .resume {
    width: 100%;
    max-width: 300px;
    padding: 32px 0px;
    margin: auto;
  }

  .stepper-line {
    padding: 0px 12px;
    border-left: solid 2px #5577F0;
  }

  .stepper-dots {
    content: "";
    position: absolute;
    transform: translateX(-22px);
    background-color: #5577F0;
    width: 100%;
    max-width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .stepper-line.stepper-last {
    border-left: solid 2px rgba(0, 0, 0, 0);
  }
}
</style>