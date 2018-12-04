<h1 style="text-align: center;">Timeline Vuejs</h1>

[![npm](https://img.shields.io/npm/v/timeline-vuejs.svg?colorB=brightgreen)](https://www.npmjs.com/package/timeline.vuejs)
[![downloads](https://img.shields.io/npm/dw/timeline-vuejs.svg)](https://www.npmjs.com/package/timeline.vuejs)
[![Twitter](https://img.shields.io/twitter/url/https/www.npmjs.com/package/timeline-vuejs.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftimeline-vuejs)

[Demo Timeline Vue](https://codesandbox.io/s/n094ypklvl)

## 📦 Install

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

## 🔧 Usage

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
    messageWhenNoItems: 'There are not items',
    dataTimeline: [
      {
        from: new Date(2018, 7),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2016, 1),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2016, 6),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2012, 1),
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      }
    ]
  })
}
</script>
```

## Example with order

```html
<template>
  <Timeline
    :timeline-items="timelineItems"
    :message-when-no-items="messageWhenNoItems"
    order="desc"/>
</template>
...
```

## Example with unique year

```html
<template>
  <Timeline
    :timeline-items="timelineItems"
    :message-when-no-items="messageWhenNoItems"
    :unique-year="true"
    order="asc"/>
</template>
...
```

## Available props

| **Props**          |       **Type**       | **Default**                                            | **Description**                                             |
| :----------------- | :------------------: | :----------------------------------------------------- | :---------------------------------------------------------- |
| timelineItems      |        Array         | [ ]                                                    | Items value of the timeline                                 |
| messageWhenNoItems |        String        |                                                        | Message when there are no items                             |
| colorDots          |        String        | <span style="background-color:#2da1bf;">#2da1bf</span> | Color of the dots                                           |
| uniqueTimeline     |       Boolean        | false                                                  | If true, the timeline isn't separated                       |
| uniqueYear         |       Boolean        | false                                                  | If true, the timeline isn't separated when is the same year |
| order              | String (desc or asc) |                                                        | Type of order                                               |
