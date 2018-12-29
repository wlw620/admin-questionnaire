<template>
  <div class="container">
    <div class="container-box">
      <Row :gutter="16">
        <Col span="16">
          <Card>
            <p slot="title">TO-DO LIST</p>
            <Table :columns="columns" :data="data"></Table>
          </Card>
          <Card class="margin-t-10">
            <p slot="title">历史纪录</p>
          </Card>
        </Col>
        <Col span="8">
          <Card class="mentee-info" style="height:500px;">
            <Row :gutter="16" type="flex">
              <Col class="mentee-icon">
                <Avatar icon="ios-person" size="large" />
              </Col>
              <Col>
                <h2>张可</h2>
                <p>杭州外国语学院</p>
              </Col>
            </Row>
            <Row style="padding:10px 0 0 56px">
              <p class="personal-item">性别：男</p>
              <p class="personal-item">微信：60000</p>
              <p class="personal-item">Email：60000@qq.com</p>
              <p class="personal-item">大学：复旦大学</p>
              <p class="personal-item">高中：北京四中</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import itemContent from './itemContent';
export default {
  data() {
    return {
      columns: [
          {
              type: 'selection',
              width: 60,
              align: 'center'
          },
          {
            title: '描述',
            key: 'info',
            render: (h, params) => {
              return h(itemContent, {
                props: {
                  row: params.row
                }
              });
            }
          }
      ],
      data: [
          {
            info: '完成PS文书第一课',
            subInfo: '5 min ago 有文书导师创建'
          },
          {
            info: '完成PS文书第一课',
            subInfo: '5 min ago 有文书导师创建'
          }
      ]
    }
  },
  methods: {

  }
};
</script>

<style lang="less">
  h2 {
    padding-bottom: 4px;
  }
  .personal-item {
    line-height: 28px;
  }
  .mentee-icon {
    padding-right: 20px;
    align-items:center;
    display: flex;
  }
  .mentee-info {
  }
</style>
