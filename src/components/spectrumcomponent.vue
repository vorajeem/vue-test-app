<template lang="html">

  <section class="spectrumcomponent">
    <h1>spectrumcomponent Component</h1>
    <spectrumgraph></spectrumgraph>
  </section>

</template>

<script lang="js">
import spectrumgraph from "../components/spectrumgraph.vue"

  export default  {
    name: 'spectrumcomponent',
    props: [],
    mounted() {

    },
    components: {
      spectrumgraph
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
  // .spectrumcomponent {

  // }
</style>
