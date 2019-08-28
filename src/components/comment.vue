<template>
  <el-rate
    v-model="value"
    show-text>
  </el-rate>
</template>

<script>
    export default {
      name: "comment",
      data() {
        return {
          value: null,
        }
      },
    }
</script>

<style scoped>

</style>
