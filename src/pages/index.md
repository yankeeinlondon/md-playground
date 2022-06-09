# `vite-plugin-playground`

> This page is simply for library authors and will not be exported with the library.

## Learning Through Examples

There are two main _modes_ of authoring a component playground. Below you'll see examples of both:

1. Composing the playground with a **Markdown** file
2. Composing the playground with a **VueJS Component** file

In both cases we will create the same _button_ component and what you'll see is the working button on the page with the ability to expand/contract the source code which was used to render the component.

> Note: when you use Markdown for rendering content you get the benefits of the automatic styling that comes with the `vite-plugin-md` plugin. In order to make this visually more consistent, we have had to import these styles and manually applied them to the VueJS component.
> This styling includes:
>
> - Github styling for H1-H9 tags
> - the "prose" styles which come with TailwindCSS/WindiCSS (aka, smart bookmarks, etc.)
> - whenever a markdown document has a code block you'll also get light/dark theming for
> that code block.
>
> This is being mentioned simply so that this is fully understood by library developers and hopefully so that userland documentation expresses this as well.
