<template>
  <b-row>
    <b-col>


      <b-alert show variant="light">
        <h4 class="alert-heading">机箱</h4>
        <p>
          机箱分为ATX，min-ATX，ITX机箱，建议优先选择机箱，再据此选择合适主板。
          点击标签起始链接图标可获取官方信息。
        </p>
        <hr>
        <b-row>
          <b-col cols="10">
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-input-group-prepend is-text>
                <b-icon icon="question" aria-hidden="true"/>
              </b-input-group-prepend>
              <b-form-select v-model="chassisModelSelected" :options="chassisModelOptions"/>
            </b-input-group>
          </b-col>

          <b-col cols="2">
            <b-input disabled></b-input>
          </b-col>
        </b-row>
      </b-alert>

      <b-alert show variant="light">
        <h4 class="alert-heading">主板</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>

        <b-row>
          <b-col cols="10">
            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
              <b-input-group-prepend is-text>
                <b-icon icon="question" aria-hidden="true"/>
              </b-input-group-prepend>
              <b-form-select v-model="motherboardModelOptionsSelected" :options="motherboardModelOptions"/>
            </b-input-group>
          </b-col>
          <b-col cols="2">
            <b-input disabled></b-input>
          </b-col>
        </b-row>

      </b-alert>


      <b-alert show variant="warning">
        <h4 class="alert-heading">中央处理器</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="graphicsProcessingUnitModelOptionsSelected" :options="graphicsProcessingUnitModelOptions"/>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">中央处理器散热器-水冷或风冷（选）</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="selected" :options="options6"/>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">显卡</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-row>
          <b-col cols="10">
            <b-form-select v-model="graphicsProcessingUnitModelOptionsSelected" :options="graphicsProcessingUnitModelOptions"/>
          </b-col>
          <b-col cols="2">
            <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
          </b-col>
        </b-row>

      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">显卡散热器-水冷（选）</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="selected" :options="options6"/>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">内存</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="selected" :options="options4"/>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">硬盘</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-row>
          <b-col cols="10">
            <b-form-select v-bind:autofocus="true" v-model="selected" :options="options5"/>
          </b-col>
          <b-col cols="2">
            <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="10">
            <b-form-select v-bind:autofocus="true" v-model="selected" :options="options5"/>
          </b-col>
          <b-col cols="2">
            <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
          </b-col>
        </b-row>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">电源</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="selected" :options="options6"/>
      </b-alert>

      <b-alert show variant="info">
        <h4 class="alert-heading">自定义分体水冷</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to
          run a bit longer so that you can see how spacing within an alert works with this kind of
          content.
        </p>
        <hr>
        <b-form-select v-model="selected" :options="options6"/>
      </b-alert>

    </b-col>

  </b-row>
</template>

<script>
export default {
  name: "AssemblyPanel",

  data() {
    return {
      chassisModelSelected:null,
      chassisModelOptions:[
        {value: null, text:'Chassis Model'},
        {value: '1', text:'先马暴力熊'}
      ],


      motherboardModelOptionsSelected: null,
      motherboardModelOptions: [
        { value: null, text: 'Motherboard Model' },
        { value: 'a', text: '华硕B450重炮手' },
        { value: 'b', text: '微星B350' },
        { value: 'c', text: '华硕玩家国度B450F' },
        { value: 'd', text: '七彩虹X370', disabled: true }
      ],
      graphicsProcessingUnitModelOptionsSelected: null,
      graphicsProcessingUnitModelOptions: [
        { value: null, text: 'Graphics Processing Unit Model' },
        { value: 'aA', text: 'RTX 2060' },
        { value: 'bA', text: 'RTX 2060TI' },
        { value: 'A', text: 'RTX 2070' },
        { value: 'dA', text: 'RTX 2080'},
        { value: 'dA', text: 'RTX 2080TI'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
