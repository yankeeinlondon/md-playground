<script setup lang="ts">
const click = () => {
  alert('ok')
};
</script>

<template>
  <div>
    <my-button @click="click">alert button</my-button>
  </div>
</template>
