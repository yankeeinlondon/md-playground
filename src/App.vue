<script setup lang="ts">
  import Intro from "./pages/index.md";
  import CodeReferencing from "./pages/code-referencing.md";
  import FromMd from "./pages/from-md.md";
  import FromComponent from "./pages/from-component.vue"
  import FromMdInline from "./pages/from-md-inline.md";
  import FromComponentInline from "./pages/from-component-inline.vue";
</script>

<style lang="css" scoped>
.playground-documentation {
  display:flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
}
.content-area {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 1rem;
}

.heading {
  display: flex;
  padding: 1rem;
}


.authoring {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  place-items: center;
  margin-top: 2rem;
  width: 100%;
}

.authoring .section {
  display: flex;
  margin-top: 0;
  padding-top: 0;
  align-self: flex-start;
  flex-grow: 1;
  text-align: start;
  max-width: 100%;
}

@media(min-width: 1024px) {
  .authoring {
    flex-direction: row;
  }
  .authoring .section {
    max-width: 50%;
  }

}

.authoring .section:not(:first-child) {
  margin-left: 1.5rem;
}
</style>


<template>
  <div class="playground-documentation">
    <div class="content-area">
      <intro />

      <div class="authoring">
        <div class="section"><from-md /></div>
        <div class="section"><from-component /></div>
      </div>

      <code-referencing style="margin-top: 2rem; margin-bottom: 2rem" />
      <div class="authoring">
        <div class="section"><from-md-inline /></div>
        <div class="section"><from-component-inline /></div>
      </div>
    </div>
  </div>
</template>
