<template>
  <section class="timeline">
    <div class="wrapper-timeline" v-if="hasItems">
      <div
        v-for="(timelineContent, timelineIndex) in timelineItems"
        :class="wrapperItemClass"
        :key="timelineIndex">
        <div class="section-year">
          <p
            v-if="hasYear(timelineContent)"
            class="year">
            {{ getYear(timelineContent.from) }}
          </p>
        </div>
        <TimelineItem :item-timeline="timelineContent"/>
      </div>
    </div>
    <p v-else>{{ messageWhenNoItems }}</p>
  </section>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
  name: 'Timeline',
  components: { TimelineItem },
  props: {
    timelineItems: {
      type: Array,
      default: () => []
    },
    messageWhenNoItems: {
      type: String
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    },
    uniqueTimeline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasItems() {
      return !!this.timelineItems.length
    },
    wrapperItemClass() {
      return {
        'wrapper-item': true,
        'unique-timeline': this.uniqueTimeline
      }
    }
  },
  methods: {
    getYear(date) {
      return date.getFullYear()
    },
    hasYear(dataTimeline) {
      return dataTimeline.hasOwnProperty('from') && dataTimeline.from !== undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  text-align: left;
  width: 100%;
  max-width: 500px;
  .wrapper-timeline {
    position: relative;
  }
  .wrapper-item {
    display: grid;
    grid-template-columns: 100px 1fr;
    margin-bottom: 20px;
    .section-year {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      padding: 15px;
      font-weight: bold;
      font-size: 18px;
      .year {
        margin: 0;
      }
    }
    &.unique-timeline {
      margin-bottom: 0;
    }
  }
}
</style>
