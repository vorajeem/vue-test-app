<template lang="html">

  <section class="trendcomponent">
    <h1>trendcomponent Component</h1>
    <trendgraph></trendgraph>
  </section>

</template>

<script lang="js">
import trendgraph from "../components/trendgraph.vue"
  export default  {
    name: 'trendcomponent',
    props: [],
    mounted() {

    },
    components: {
      trendgraph
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  // .trendcomponent {

  // }
</style>
