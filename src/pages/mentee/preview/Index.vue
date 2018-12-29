<template>
  <div class="container-box otherupload-container">
    <Card :bordered="false">
      <Form :model="query" label-position="top">
        <Row class="query-row" :gutter="16">

          <Col :md="12" :sm="12" :xs="24">
          <FormItem label="选择学校">
            <Select v-model="teacherList" placeholder="Select your school">
              <Option value="beijing">Harvard University</Option>
              <Option value="shanghai">Cornell University</Option>
            </Select>
          </FormItem>
          </Col>
          <Col :md="12" :sm="12" :xs="24">
          <FormItem label="选择文件">
            <Upload style="width:100%" :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">选择文件</Button>
            </Upload>
          </FormItem>
          </Col>
        </Row>
        <div class="submit-wrap-center">
          <Button type="success">SUBMIT 提交</Button>
        </div>
      </Form>
    </Card>
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


