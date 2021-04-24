<template>
    <div>
        <div class="card-blue">
          <img class="overview" alt="logo-panda" :src="require(`@/assets/${cardLogo}`)" />
        </div>
        <span class="section-subtitle">
          {{ cardTitle }}
        </span><br />
        <span class="section-text">
          {{ cardValue }}
        </span>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "OverviewCard",
  props: {
    cardLogo: {
        type: String,
        default: "icon/overview-1.svg"
    },
    cardTitle: {
        type: String,
        default: "Card Title"
    },
    cardValue: {
        type: String,
        default: "Card Value"
    },
  },
});

</script>


<style lang="scss" scoped>

</style>