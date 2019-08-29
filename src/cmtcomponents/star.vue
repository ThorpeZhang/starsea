<template>
    <div class="block">
  <span class="demonstration">评分</span>
  <el-rate
    v-model="value2"
    :colors="colors"
    :texts="text"
    show-text>
  </el-rate>
</div>
</template>

<style >
.block{
    text-align: left;
}
</style>

<script>
  export default {
      name: 'star',
    data() {
      return {
        value1: null,
        value2: null,
        text:['很差', '较差', '一般', '推荐', '力荐'],
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
</script>