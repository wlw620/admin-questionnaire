<template>
  <div class="container-box">
    <Row class="margin-b-10" :gutter="10">
      <Col class="margin-b-10" :xs="24" :sm="12" :md="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`">
      <Card :bordered="false" class="padding-20" v-if="infor.count !== null">
        <p class="font-size-16 font-bold padding-b-20">{{ infor.title }}</p>
        <div class="display-flex">
          <Icon class="font-size-60" :type="infor.icon" :style="infor.color" />
          <count-to class="font-size-40 font-bold count" :end="infor.count" />
        </div>
      </Card>
      <Card :bordered="false" class="padding-20" v-else>
        <div @click="eAddcustomer">
          <p class="font-size-16 font-bold padding-b-20">{{ infor.title }}</p>
          <div class="display-flex">
            <Icon class="font-size-60" :type="infor.icon" :style="infor.color" />
          </div>
        </div>
      </Card>
      </Col>
    </Row>

    <Card :bordered="false" class="margin-t-10">
      <Table :columns="columns" :data="list"></Table>
    </Card>
  </div>
</template>

<script>
import _ from "lodash";
import CountTo from "../../../components/Countto";
import service from "../../../service/sales/index";
let getTypeText = type => {
  let map = {
    mentee: "美国本科",
    graduate: "美国研究生",
    transfer: "转学",
    uk: "英国本科",
    mentee: "美国本科"
  };
  return map[type] || "其他";
};

let getStatusText = type => {
  let map = {
    unassigned: "未分配",
    newbie: "待处理",
    ongoing: "勾搭中",
    postponed: "推迟联系",
    fishing: "长线钓鱼中",
    survey: "已发问卷",
    signing: "已发合同",
    signed: "已签约",
    done: "已完成（归档）",
    dead: "凉凉（归档）"
  };
  return map[type] || "其他";
};
export default {
  components: {
    CountTo
  },
  data() {
    return {
      inforCardData: [
        {
          title: "添加客户",
          icon: "ios-create-outline",
          count: null,
          color: "color:#41b3f9"
        },
        {
          title: "待处理客户",
          icon: "md-close",
          count: 30,
          color: "color:#707cd2"
        },
        {
          title: "正在勾搭",
          icon: "md-checkmark",
          count: 70,
          color: "color:#f33155"
        },
        {
          title: "本月签约率",
          icon: "md-code-working",
          count: 30,
          color: "color:#7ace4c"
        }
      ],
      columns: [
        {
          title: "联系人",
          key: "contactname"
        },
        {
          title: "学员姓名",
          key: "chinesename"
        },
        {
          title: "申请类型",
          key: "type",
          render(h, params) {
            return h("span", {}, getTypeText(params.row.type));
          }
        },
        {
          title: "地区",
          key: "area"
        },
        {
          title: "申请年份",
          key: "appyear"
        },
        {
          title: "状态",
          key: "status",
          render(h, params) {
            return h("span", {}, getStatusText(params.row.status));
          }
        }
      ],
      list: []
    };
  },
  methods: {
    eAddcustomer() {
      console.error(2222);
      this.$router.push("/sales/addcustomer");
    }
  },
  mounted() {
    service.getDashboardData().then(res => {
      if (res) {
        let ongoingCount = _.get(res, "ongoing_count", 0); //勾搭
        let newbieCount = _.get(res, "newbie_count", 0); // 待处理客户
        let rate = _.get(res, "rate", 0); // 签约
        let list = _.get(res, "recentlist", []);
        let inforCardData = this.inforCardData;
        inforCardData[1].count = newbieCount;
        inforCardData[2].count = ongoingCount;
        inforCardData[3].count = rate;
        this.$set(this, "inforCardData", inforCardData);
        this.$set(this, "list", list);
      }
    });
  }
};
</script>

<style>
.count {
  flex: 1;
  text-align: right;
}
.bottom {
  margin-top: 24px;
}
</style>

