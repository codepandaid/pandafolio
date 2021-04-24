<template>
    <div class="card">
        <h2 class="section-title">{{ sectionTitle }}</h2>
        <div v-if="informationDatas">
            <div v-for="(data, index) in informationDatas" :key="index" class="row align-items-start text-left">
                <div class="col-12 col-lg-4">
                    <span class="section-subtitle">
                        {{ data.subtitle }}
                    </span>
                </div>
                <div class="col-12 col-lg-8">
                    <span class="section-text">
                        {{ data.information }}
                    </span>
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
    informationData: {
      type: [Object, Array],
      required: true,
      default: () => [
          {
            subtitle: "Subtitle",
            information: "Information Desc"
          },
      ]
    },
  },
  computed: {
      informationDatas() {
        return this.informationData;
      }
  }
});

</script>


<style lang="scss" scoped>

</style>