import Timeline from './Timeline.vue'

export default Timeline
export function install(Vue, options) {
  Vue.component(Timeline.name, Timeline)
}
