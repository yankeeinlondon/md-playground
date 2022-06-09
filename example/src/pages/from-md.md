## Authoring in Markdown

Markdown is great for writers. It was in fact, _created_ by a writer. In part for this reason, you will most often find authoring a playground in Markdown the most rewarding experience. That said, it's fair to say that sometimes Markdown is not very good at leveraging horizontal space and there are other advanced layout choices that might force you to authoring with a VueJS component.

A hybrid approach, used on this page, is to provide your master layout as part of a VueJS component and then just _import_ each component as a Markdown file. When you import a Markdown file you not only can leverage it _as_ a VueJS component but also import any Frontmatter data that may exist.

### `MyButton` Component

This component provides a much needed button to press when you need to be told you are "ok".

```vue playground=true
<template>
  <div>
    <button @click="click">alert button</button>
  </div>
</template>
<script>
export default {
  methods: {
    click() {
      alert('ok')
    },
  },
}
</script>
```

> **Note:** this section is fully defined in the `src/pages/from-md.md` file
