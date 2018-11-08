<template>
  <div id="app">
    <Timeline
      :timeline-items="timelineItems"
      :message-when-no-items="messageWhenNoItems"/>
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'

export default {
  name: 'app',
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'No articles found.',
    timelineItems: [
      {
        year: {
          from: '2017',
          to: 'Currently'
        },
        items: [
          {
            nameMonth: 'February',
            title: 'Five',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            nameMonth: 'January',
            title: 'Five',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          }
        ]
      },
      {
        year: {
          from: '2016',
          to: '2017'
        },
        items: [
          {
            nameMonth: 'July',
            title: 'Five',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            nameMonth: 'February',
            title: 'Five',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          },
          {
            nameMonth: 'January',
            title: 'Five',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
          }
        ]
      }
    ]
  })
}
</script>

<style lang="scss">
* {
  outline: none;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
