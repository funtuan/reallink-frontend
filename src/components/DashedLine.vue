<template>
  <div class="dashed-line" >
    <svg viewBox="0 0 200 10">
      <line x1="0" y1="5" x2="400" y2="5" stroke="black" stroke-dasharray="7 5" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DashLine'
}
</script>

<style scoped lang="scss">
line {
  stroke: #dadada;
}

.dashed-line {
  height: 13px;
  stroke-width: 0.5
}
</style>