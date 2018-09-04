<template>
  <section class="timeline">
    <div class="wrapper-timeline" v-if="hasItems">
      <div
        class="wrapper-item"
        v-for="(timelineContent, timelineIndex) in timelineItems"
        :key="timelineIndex">
        <div class="section-year">
          <p class="year">
            {{ timelineContent.year.to }}
          </p>
          <p class="year">
            {{ timelineContent.year.from }}
          </p>
        </div>
        <TimelineItems :items="timelineContent.items"/>
      </div>
    </div>
    <p v-else>{{ messageWhenNoItems }}</p>
  </section>
</template>

<script>
import TimelineItems from '../components/TimelineItems.vue'

export default {
  name: 'Timeline',
  components: {
    TimelineItems
  },
  props: {
    timelineItems: {
      type: Array,
      default: () => []
    },
    messageWhenNoItems: {
      type: String
    }
  },
  computed: {
    hasItems() {
      return !!this.timelineItems.length
    }
  }
}
</script>

<style lang="scss" scopped>
.timeline {
  width: 100%;
  max-width: 500px;

  .wrapper-timeline {
    position: relative;

    .wrapper-item {
      display: grid;
      grid-template-columns: 100px 1fr;
      margin-bottom: 20px;
    }

    .section-year {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 15px;
      font-weight: bold;
      font-size: 20px;
      .year {
        margin: 0;
      }
    }
  }
}
</style>
