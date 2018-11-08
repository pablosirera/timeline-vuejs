<template>
  <section class="timeline-items">
    <div
      class="item"
      v-for="(item, index) in itemsTimeline"
      :key="index">
      <span
        class="dot"
        :style="{ background: colorDots }"/>
      <h3 class="month-item">{{ item.nameMonth }}</h3>
      <h4 class="title-item" v-html="item.title"></h4>
      <p class="description-item" v-html="item.description"></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    itemsTimeline: {
      type: Array,
      default: () => []
    },
    colorDots: {
      type: String,
      default: '#2da1bf'
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-items {
  .item {
    border-left: 5px solid #ccd5db;
    padding: 20px 0 20px 15px;
    position: relative;
  }
  .month-item {
    margin: 0;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
  }
  .title-item {
    margin: 0;
    padding: 5px 0;
    font-size: 16px;
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
