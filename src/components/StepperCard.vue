<template>
    <div>
        <h2 class="section-title">{{ sectionTitle }}</h2>

        <div v-for="(data,index) in stepperDatas" :key="index" style="display: contents;">
            <div v-if="index === stepperDatas.length-1" class="row align-items-start stepper-line stepper-last">
                <div class="col-12 col-lg-12 row-line last">
                    <div class="stepper-dots"></div>
                    <div class="stepper-content">
                        <span class="section-subtitle">
                            {{ data.sectionSubtitle }}
                        </span>
                        <span v-if="data.sectionHighlight" class="section-mini-text">
                            <strong>{{ data.sectionHighlight }}</strong>
                        </span>
                        <span class="section-mini-text" style="padding: 8px 0px;">
                            {{ data.sectionDesc }}
                        </span>
                        <span class="section-mini-text" style="padding-bottom: 8px;">
                            {{ data.sectionDate }}
                        </span>
                    </div>
                </div>
            </div>

            <div v-else class="row align-items-start stepper-line">
                <div class="col-12 col-lg-12 row-line">
                    <div class="stepper-dots"></div>
                    <div class="stepper-content">
                        <span class="section-subtitle">
                            {{ data.sectionSubtitle }}
                        </span>
                        <span v-if="data.sectionHighlight" class="section-mini-text">
                            <strong>{{ data.sectionHighlight }}</strong>
                        </span>
                        <span class="section-mini-text" style="padding: 8px 0px;">
                            {{ data.sectionDesc }}
                        </span>
                        <span class="section-mini-text" style="padding-bottom: 8px;">
                            {{ data.sectionDate }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "StepperCard",
  props: {
    sectionTitle: {
        type: String,
        default: "Section Title"
    },
    stepperData: {
      type: [Object, Array],
      required: true,
      default: () => [
          {
            sectionSubtitle: "Section Subtitle",
            sectionHighlight: "Section Highlight",
            sectionDesc: "Section Description",
            sectionDate: "Section Date"
          },
      ]
    },
  },
  computed: {
      stepperDatas() {
        return this.stepperData;
      }
  }
})
</script>

<style lang="scss" scoped>
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

@media screen and (min-width: 768px) and (max-width: 1024px) {}

@media screen and (max-width: 767px) {
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