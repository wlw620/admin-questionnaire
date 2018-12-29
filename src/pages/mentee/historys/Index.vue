<template>
  <div class="container-box history-container">
    <Card :bordered="false" class="margin-t-10">
      <Table :columns="columns" :data="data"></Table>
    </Card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      teacherList: {},
      query: {
        Intern: ""
      }
    };
  }
};
</script>

<style lang="less">
.otherupload-container {
  .query-row {
    .ivu-upload,
    .ivu-upload,
    .ivu-btn {
      width: 100%;
    }
  }
}
</style>


