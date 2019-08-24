<template>
    <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
</template>

<script>
  export default {
    name:'pageShowStar',
    props: {
        value: Number
    }
  }
</script>
