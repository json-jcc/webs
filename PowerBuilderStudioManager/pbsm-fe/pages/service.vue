<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-list-group class="my-2">
          <b-list-group-item class="flex-column align-items-start" to="/service/AssemblyPanel">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><b-icon-tag-fill/>计算机组建</h5>
              <small>3 days ago</small>
            </div>

            <p class="mb-1">
              通用，工作站计算机组建，集群式计算机，虚拟计算机组建，所有硬件来源于一级代理电商，无差价，依据不同成本级别收取服务费。
            </p>

            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item class="flex-column align-items-start" to="/service/table">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><b-icon-wrench/>计算机维护</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              维修通用计算机硬件，软件产生的问题，依据不同问题级别进行收费。
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><b-icon-cloud-fill/> 家庭云解决方案</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

          <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><b-icon-tv-fill/>云渲染适配解决方案</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>

        </b-list-group>

      </b-col>
    </b-row>

    <nuxt-child/>


  </b-container>
</template>

<script>
export default {
  name: "service"
}
</script>

<style scoped>

</style>
