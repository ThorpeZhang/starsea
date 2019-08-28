<template>
    <div id="movieIndex">
      <page-card :items="info.line1" type="book"></page-card>
    </div>
</template>

<script>
import pageCard from '@/components/pageCard.vue'
export default {
  name: 'bookIndex',
  components: {
    'page-card': pageCard,
  },
  data() {
    return {
      info:{}
    }
  },
  mounted() {
    this.$axios
            .get('/showBookIndex', {
                params: {
                    num: '5',
                }
            })
            .then(successResponse => {
              this.$set(this.info,"line1",this.movieDataListProcess(successResponse));
            })
            .catch(failResponse => {
            });
  }
}
</script>
