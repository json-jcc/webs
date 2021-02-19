<template>
  <b-container fluid="true">
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
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-container fluid="true">
          <b-row>
            <b-col class="p-0">
              <b-btn to="/user/table" squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
            <b-col class="p-0">
              <b-btn squared variant="dark" style="width: 100%;height: 100%">Search Members</b-btn>
            </b-col>
          </b-row>

          <p>嵌套子页面内容区</p>
          <NuxtLink to="/user/user">Into Table</NuxtLink>
          <!-- <nuxt-child>标签在父页面组件中相当于是子页面组件的占位符；嵌套中这个不可少 -->

          <div id="children">
            <nuxt-child></nuxt-child>
          </div>
        </b-container>
<!--        <MemberInfoTable/>-->
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  name:'Index',
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
