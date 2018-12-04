<template>
  <section class="timeline">
    <div class="wrapper-timeline" v-if="hasItems">
      <div
        v-for="(timelineContent, timelineIndex) in dataTimeline"
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
    },
    order: {
      type: String
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
    },
    dataTimeline() {
      if (this.order === 'desc') return this.orderItems(this.timelineItems, 'desc')
      if (this.order === 'asc') return this.orderItems(this.timelineItems, 'asc')
      return this.timelineItems
    }
  },
  methods: {
    getYear(date) {
      return date.getFullYear()
    },
    hasYear(dataTimeline) {
      return dataTimeline.hasOwnProperty('from') && dataTimeline.from !== undefined
    },
    getTimelineItemsAssembled(items) {
      const itemsGroupByYear = []
      items.forEach(item => {
        const fullTime = item.from.getTime()
        if (itemsGroupByYear[fullTime]) {
          return itemsGroupByYear[fullTime].push(item)
        }
        itemsGroupByYear[fullTime] = [item]
      })
      return itemsGroupByYear
    },
    orderItems(items, typeOrder) {
      const itemsGrouped = this.getTimelineItemsAssembled(items)
      const keysItemsGrouped = Object.keys(itemsGrouped)
      const timeItemsOrdered = keysItemsGrouped.sort((a, b) => {
        if (typeOrder === 'desc') {
          return b - a
        }
        return a - b
      })
      return timeItemsOrdered.map(timeItem => itemsGrouped[timeItem]).flat()
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
