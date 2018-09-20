<template lang="html">

  <div class="mimictable">
    <h1>mimictable Component</h1>
    <h2>Channel position</h2>

    <md-table>
      <md-table-header>
        <md-table-row>
          <md-table-head>
            Channel number
          </md-table-head>
          <md-table-head>
            Location
          </md-table-head>
          <md-table-head>
            Height
          </md-table-head>
          <md-table-head>
            Alarm Level
          </md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row>
          <md-table-cell>1</md-table-cell>
          <md-table-cell>left</md-table-cell>
          <md-table-cell>12m</md-table-cell>
          <md-table-cell>14%</md-table-cell>
        </md-table-row>
                <md-table-row>
          <md-table-cell>2</md-table-cell>
          <md-table-cell>left</md-table-cell>
          <md-table-cell>22m</md-table-cell>
          <md-table-cell>14%</md-table-cell>
        </md-table-row>
                <md-table-row>
          <md-table-cell>3</md-table-cell>
          <md-table-cell>left</md-table-cell>
          <md-table-cell>32m</md-table-cell>
          <md-table-cell>14%</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </div>

</template>

<script lang="js">
  export default  {
    name: 'mimictable',
    props: [],
    mounted() {

    },
    data() {
      return {
      channelinfos : {channelnumber:'1',location:'somewhere',height:'high',alarmlevel:'idunno'}
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  // .mimictable {

  // }
</style>
