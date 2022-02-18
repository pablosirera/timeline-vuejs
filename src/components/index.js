import Timeline from './Timeline.vue'

export default Timeline

export function install(Vue, options) {
  Vue.component(Timeline.name, Timeline)
}

if (typeof window !== "undefined" && typeof window.Vue === "object") {
  window.Vue.component(Timeline.name, Timeline)
}

