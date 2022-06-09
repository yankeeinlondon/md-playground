<script setup lang="ts">
  import { PropType } from 'vue';

  defineProps({
      align: { type: String as PropType<"vertical" | "horizontal">, required: false, default: "vertical" }
  });

</script>

<template>
  <div class="code-playground" :class="align === 'vertical' ? 'align-vertical' : 'align-horizontal'">
    <div class="component-display">
        <slot name="component"></slot>
    </div>
    <div class="code-block-section">
        <slot name="default"></slot>
    </div>
    <div class="toggle">
        <!-- add toggle button -->
    </div>
  </div>
</template>
