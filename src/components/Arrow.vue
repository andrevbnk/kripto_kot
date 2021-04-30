<template>
<div>
  <div v-if="direct">
      <img
    src="../assets/arrow-up.svg"
    alt="За стеклом">

  </div>
  <div v-else>
          <img
    src="../assets/arrow-down.svg"
    alt="За стеклом">
  </div>

</div>
</template>

<script>
export default {
    props: ['direct']
}
</script>

<style>

</style>