<template>
  <div id="pbsm-header" class="b-c-head-body p-5">
    <b-row>
      <b-col cols="7">
        <b-jumbotron container-fluid="true"
                     header="Power Builder Studio" lead="Provide solutions for common computers"
                     text-variant="white"
                     style="background: rgba(0,0,0,0);">
          <hr style="background: white"/>
          <p>For more information visit website</p>
        </b-jumbotron>
      </b-col>
      <!-- blank for background -->
      <b-col cols="5">
        <div class="m-5">
          <b-img width="300px" height="300px" src="/shi_square.png" fluid alt="Responsive image"></b-img>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "b-c-head"
}
</script>

<style scoped>
.b-c-head-body{
  background: black;
  width: 100%;
  height: auto;
  top:0; right:0;
}


</style>
