# `md-playground`

> provides a "builder API" to enhance the `vite-plugin-md` plugin to make creating interactive playgrounds for your component document easy.

## Installation

1. Install this repo along with `vite-plugin-md`:

    ```sh
    pnpm install -D vite-plugin-md @yankeeinlondon/md-playground
    ```

2. Configure your `vite.config.ts` file:

    ```ts
    import Markdown from "vite-plugin-md";
    import { playground } from "@yankeeinlondon/md-playground";

    export default defineConfig({
        // ...
        Markdown({
            builders: [ playground() ]
        })
    })
    ```

## Usage

Let's imagine you have the following directory structure in a component library you are building:

- [ project root ]
  - `src`
    - `components`
      - `MyButton.vue`
      - `my-button-doc.md`

The actual directory structure doesn't matter at all but just for illustrative purposes what we're going to demonstrate is how you can write _markdown_ documentation and quickly demonstrate the use of your component -- `MyButton.vue` -- in this case with an interactive playground where readers will be able to actually _use_ the component from within the docs.

### Markdown Authoring

`my-button-doc.md`:

```md
# Component library

## MyButton component

\```sfc playground=true
<template>
    <my-button @click="alert('ok')">Ok</my-button>
</template>
\```
```

That's all that's needed to produce an output which looks like:
