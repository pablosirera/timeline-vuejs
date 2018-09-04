import Timeline from './Timeline.vue'
import TimelineItems from './TimelineItems.vue'
import Vue from 'vue'

const components = {
  Timeline,
  TimelineItems
}

Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
})

export default components
