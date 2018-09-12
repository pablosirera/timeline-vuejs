# timeline-vuejs

[Demo Timeline Vue](https://codesandbox.io/s/n094ypklvl)

## Install

```
npm install timeline-vuejs --save
```

```js
// main.js
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
```

```html
// component.vue
<script>
import Timeline from 'timeline-vuejs'

export default {
  // ...
  components: {
    Timeline
  }
  // ...
}
</script>
```

## Usage

```html
<template>
  <Timeline
    :timeline-items="timelineItems"
    :message-when-no-items="messageWhenNoItems"/>
</template>

<script>
import Timeline from 'timeline-vuejs'

export default {
  components: {
    Timeline
  }
  data: () => ({
    messageWhenNoItems: 'There arent items',
    timelineItems: [
      {
        year: {
          from: '2017',
          to: '2018'
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
      }
    ]
  })
}
</script>
```
