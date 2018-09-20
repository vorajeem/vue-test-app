<template lang="html">

  <div class="mimiccomponent">
    <h1>mimiccomponent Component</h1>

    <mimictable></mimictable>
  </div>

</template>

<script lang="js">
import mimictable from "../components/mimictable.vue"
  export default  {
    name: 'mimiccomponent',
    props: [],
    mounted() {

    },
    components: {
      mimictable
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
  // .mimiccomponent {

  // }
</style>
