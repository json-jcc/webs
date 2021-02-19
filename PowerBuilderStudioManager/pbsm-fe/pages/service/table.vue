<template>
  <div>
    <b-container fluid="true">

      <!-- panel nav -->
      <b-row class="p-0">
        <b-col>
          <b-form-input style="width: 100%" placeholder="Keywords"/>
        </b-col>

        <b-col class="p-0">
          <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
        </b-col>

        <b-col class="p-0">
          <b-btn squared variant="light" style="width: 100%;height: 100%;">Add A New Member</b-btn>
        </b-col>

        <b-col class="p-0">
          <b-btn squared variant="dark" style="width: 100%;height: 100%;">Delete Selected Members</b-btn>
        </b-col>
      </b-row>

      <!-- info table -->
      <b-row>
        <b-col>
          <b-table striped hover :items="items"></b-table>
        </b-col>
      </b-row>

    </b-container>
  </div>


</template>

<script>
export default {
  name: "table",
  data() {
    return {
      items: [
        { 年龄: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { 年龄: 21, first_name: 'Larsen', last_name: 'Shaw' },
        {
          年龄: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          _rowVariant: 'danger'
        },
        {
          年龄: 40,
          first_name: 'Thor',
          last_name: 'MacDonald',
          _cellVariants: { age: 'info', first_name: 'warning' }
        },
        { 年龄: 29, first_name: 'Dick', last_name: 'Dunlap' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
