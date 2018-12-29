<template>
  <div class="container-box booklets-container">
    <Row :gutter="16">
      <Col :xs="24" :sm="12">
      <Card :bordered="false">
        <p slot="title">{{$t('booklets.cardTxt1')}}</p>
        <Table :columns="columns1" :data="data1"></Table>
        <div class="margin-t-10">
          <Button size="large" type="error" ghost long>{{$t('booklets.open')}}</Button>
        </div>
        <div class="margin-t-10">
          <Row :gutter="16">
            <Col :xs="24" :sm="12">
            <Button long>{{$t('booklets.open')}}</Button>

            </Col>
            <Col :xs="24" :sm="12">
            <Button long>{{$t('booklets.open')}}</Button>
            </Col>
          </Row>
        </div>
      </Card>
      </Col>
      <Col :xs="24" :sm="12">
      <Card :bordered="false">
        <p slot="title">{{$t('booklets.cardTxt2')}}</p>
        <Table :columns="columns1" :data="data1"></Table>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "文件名",
          key: "fileName",
          width: 120
        },
        {
          title: "文件内容",
          key: "fileContent"
        }
      ],
      data1: [
        {
          fileName: "PS",
          fileContent: "PS葵花宝典"
        },
        {
          fileName: "ACList",
          fileContent: "手把手教你搞Activity List"
        },
        {
          fileName: "Interview",
          fileContent: "一本搞定所有面试的宝典"
        },
        {
          fileName: "Email",
          fileContent: "如何不作死的给教授写一封邮件？"
        }
      ]
    };
  }
};
</script>
<style lang="less">
.booklets-container {
  .ivu-card-head {
    background: #17233d;
    p {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>

