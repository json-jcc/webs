<template>
  <b-container fluid="true">

    <!-- title region -->
    <b-row>
      <b-col>

        <div id="title-region" class="p-5" style="
             background: black;
             width: 100%;
             height: auto;
             top:0; right:0;">
          <b-row>
            <b-col cols="7">
              <b-jumbotron container-fluid="true"
                           header="Power Builder Studio"
                           lead="Provide convenient solutions about common computers"
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

      </b-col>
    </b-row>

    <!-- nav region -->
    <b-row style="border: 1px solid red">
<!--      <b-col class="pr-0"  style="border: 2px solid green">-->
<!--        <b-btn to="/main/table" squared-->
<!--               style="-->
<!--               background-color: rgb(0, 0, 0);-->
<!--               border: black;-->
<!--               width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="p-0" style="border: 2px solid green">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="p-0">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="p-0">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="p-0">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="p-0">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
<!--      <b-col class="">-->
<!--        <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>-->
<!--      </b-col>-->
    </b-row>

    <!-- content region -->
    <b-row class="m-0" style="border: 2px solid green">
      <b-col>
        <div>
          <nuxt-child></nuxt-child>
        </div>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
import Logo from "~/components/Logo";

export default {
  name:'main',
  components:{
    Logo,
  },
  methods:{
    jump : function(){

    },
  },
  mounted() {
    this.jump()
  }
}

</script>
body{
width: 60%
}
<style>
</style>
