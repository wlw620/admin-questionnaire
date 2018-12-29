<template>
  <div class="container-box viewcustomer-container">

    <Card :bordered="false">
      <p slot="title">{{$t('viewcustomer.infoTxt')}}</p>
      <div>
        <Table :columns="columns" :data="list"></Table>
        <Table class="margin-t-10" :columns="columnsRequire" :data="list"></Table>
        <Table class="margin-t-10" :columns="columnsExtend" :data="list"></Table>
      </div>
    </Card>

    <Card class="margin-t-20" :bordered="false">
      <p slot="title">{{$t('viewcustomer.historyTxt')}}</p>
      <div>
        <Table :columns="historyColumns" :data="historyList"></Table>
      </div>
    </Card>

  </div>
</template>

<script>
import _ from "lodash";
import service from "../../../service/sales/index";
export default {
  data() {
    return {
      columns: [
        {
          title: "联系人",
          key: "contactname"
        },
        {
          title: "联系人身份",
          key: "contactidentity",
          render() {}
        },
        {
          title: "学员名",
          key: "chinesename"
        },
        {
          title: "申请类型",
          key: "type"
        },
        {
          title: "微信",
          key: "wechat"
        },
        {
          title: "电话",
          key: "phone"
        },
        {
          title: "地区",
          key: "area"
        },
        {
          title: "学校",
          key: "highschool"
        },
        {
          title: "申请年份",
          key: "appyear"
        }
      ],
      columnsRequire: [
        {
          title: "用户要求",
          key: "comment"
        }
      ],
      columnsExtend: [
        {
          title: "备注",
          key: "tag"
        }
      ],
      list: [],
      historyColumns: [
        {
          title: "信息",
          key: "info"
        },
        {
          title: "联系方式",
          key: "method"
        },
        {
          title: "填写时间",
          key: "time"
        },
        {
          title: "销售人员",
          key: "salescname"
        }
      ],
      historyList: []
    };
  },
  mounted() {
    this.init();
  },
  components: {},
  methods: {
    init() {
      this.getMainData();
    },
    getMainData() {
      service.getViewcustomerData().then((res)=>{

      }).catch((e)=>{

      });
    }
  }
};
</script>

<style lang="less">
.viewcustomer-container {
  .ivu-card-head {
    background: #17233d;
    p {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>
