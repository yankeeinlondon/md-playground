# Component Library

## My Button

```vue playground=true,heading="my-button.vue"
<template>
  <div>
    <button @click="click">alert button</button>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      console.log('ok')
    },
  },
}
</script>
```

> **Note:** this section is fully defined in the `test/scaffolds/my-button.md` file
