<template>
  <section class="timeline-item">
    <div class="item">
      <span
        class="dot"
        :style="{ background: colorDots }"/>
      <h3 class="month-item">{{ getNameMonth(itemTimeline) }}</h3>
      <h4 class="title-item" v-html="itemTimeline.title"></h4>
      <p class="description-item" v-html="itemTimeline.description"></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    itemTimeline: {
      type: Object,
      default: () => ({})
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    }
  },
  methods: {
    getNameMonth(item) {
      const localeBrowser = navigator.language
      const date = item.from.toLocaleDateString(localeBrowser, { month: 'long' })
      return date
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-item {
  .item {
    border-left: 5px solid #ccd5db;
    padding: 20px 0 20px 15px;
    position: relative;
  }
  .month-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 2px;
  }
  .title-item {
    margin: 0;
    padding: 5px 0;
    font-size: 15px;
    font-weight: 500;
  }
  .description-item {
    font-weight: 100;
    margin: 0;
  }
  .dot {
    display: block;
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    // background: #2da1bf;
    left: -10px;
    top: 26px;
  }
}
</style>
