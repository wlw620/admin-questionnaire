<template>
  <div class="container-box adduser-container">
    <Row>
      <Col :xs="20" :sm="18" :md="16" :lg="14">
      <Card :bordered="false">
        <Form :model="form" ref="form" :rules="ruleValidate" label-position="top">
          <FormItem :label="$t('sales_addcustomer.type')">
            <Select v-model="form.type">
              <Option value="mentee">{{$t('sales_addcustomer.typeOpt1')}}</Option>
              <Option value="graduate">{{$t('sales_addcustomer.typeOpt2')}}</Option>
              <Option value="transfer">{{$t('sales_addcustomer.typeOpt3')}}</Option>
              <Option value="uk">{{$t('sales_addcustomer.typeOpt4')}}</Option>
              <Option value="others">{{$t('sales_addcustomer.typeOpt5')}}</Option>
            </Select>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.contactname')" prop="empty" required>
            <Input v-model="form.contactname" :placeholder="$t('sales_addcustomer.contactname_placeholder')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.contactidentity')">
            <Select v-model="form.contactidentity" value="unknonw">
              <Option value="unknonw">{{$t('sales_addcustomer.contactidentityOpt1')}}</Option>
              <Option value="student">{{$t('sales_addcustomer.contactidentityOpt2')}}</Option>
              <Option value="parent">{{$t('sales_addcustomer.contactidentityOpt3')}}</Option>
            </Select>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.chinesename')">
            <Input v-model="form.chinesename" :placeholder="$t('sales_addcustomer.chinesename_placeholder')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.wechat')" prop="empty" required>
            <Input v-model="form.wechat" :placeholder="$t('sales_addcustomer.wechat')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.phone')" prop="empty" required>
            <Input v-model="form.phone" :placeholder="$t('sales_addcustomer.phone')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.area')" prop="empty" required>
            <Input v-model="form.area" :placeholder="$t('sales_addcustomer.area_placeholder')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.highschool')" prop="empty" required>
            <Input v-model="form.area" :placeholder="$t('sales_addcustomer.highschool_placeholder')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.appyear')" prop="empty" required>
            <Select v-model="form.appyear">
              <Option v-for="item in yearList" :value="item">{{item}}</Option>
            </Select>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.comment')">
            <Input v-model="form.comment" :placeholder="$t('sales_addcustomer.comment_placeholder')"></Input>
          </FormItem>

          <FormItem :label="$t('sales_addcustomer.tag')">
            <Input v-model="form.tag" :placeholder="$t('sales_addcustomer.tag_placeholder')"></Input>
          </FormItem>

        </Form>
        <div class="submit-wrap-center" @click="submit('form')">
          <Button type="success" size="large">SUBMIT</Button>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
import service from "../../../service/sales/index";
const defaultValidate = {
  required: true,
  message: "不能为空",
  trigger: "blur"
};
export default {
  data() {
    return {
      form: {
        type: "mentee",
        contactname: "",
        contactidentity: "unknonw",
        chinesename: "",
        wechat: "",
        phone: "",
        area: "",
        highschool: "",
        appyear: "",
        comment: "",
        tag: ""
      },
      ruleValidate: {
        empty: [defaultValidate]
      },
      yearList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      service.getAddcustomerData().then(res => {
        this.createYearOption(res);
      });
    },
    createYearOption(res) {
      let currentYear = res.curyear || new Date().getFullYear();
      let arr = [];
      for (let i = currentYear; i < currentYear + 4; i++) {
        arr.push(i);
      }
      this.yearList = arr;
      this.form.appyear = currentYear;
    },
    submit(name) {
      this.validate(name)
        .then(() => {
          service.addcustomer(this.form).then(res => {});
        })
        .catch(e => {
          this.$Message.error("Fail!");
        });
    },
    validate(name) {
      return new Promise((resolve, reject) => {
        this.$refs[name].validate(valid => {
          if (valid) {
            resolve();
          } else {
            reject();
          }
        });
      });
    }
  }
};
</script>

<style lang="less">
.adduser-container {
  .ivu-col {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
