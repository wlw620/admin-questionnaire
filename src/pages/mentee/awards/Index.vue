<template>
  <div>

    <div :class="pageClasses">
      <Collapse simple v-model="arr">
        <Panel name="1">
          初中以来参加过的
          <div slot="content" style="overflow:hidden">
            <div @click="add('add')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加奖项</h2>
              </Card>
            </div>
            <div @click="cardEvent(1)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-red" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
            <div @click="cardEvent(2)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-blue" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
          </div>
        </Panel>

        <Panel name="2">
          目前已计划在准备的
          <div slot="content" style="overflow:hidden">
            <div @click="add('add')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加奖项</h2>
              </Card>
            </div>
            <div @click="cardEvent(1)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-red" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
            <div @click="cardEvent(2)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-blue" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
          </div>
        </Panel>


        <Panel name="3">
          未来可能考虑参加的
          <div slot="content" style="overflow:hidden">
            <div @click="add('add')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加奖项</h2>
              </Card>
            </div>
            <div @click="cardEvent(1)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-red" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
            <div @click="cardEvent(2)">
              <Badge dot class="margin-10 fl">
                <Card class="card card-blue" :bordered="false">
                  <div class="title">
                    <p class="en">社区活动</p>
                    <p class="zh">给小朋友教书</p>
                  </div>
                  <div class="card-content">一周3次给社区小朋友教书</div>
                </Card>
              </Badge>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>

    <Modal v-model="modelDisplay" title="添加奖项" @on-ok="submit" @on-cancel="cancel">
      <div style="width:370px; margin-left:30px;">
        <Form :label-width="130">
          <FormItem label="奖项级别" prop="type">
            <Select v-model="formData.type" placeholder="奖项级别">
              <Option value="SAT">School</Option>
              <Option value="TOEFL">State/Regional</Option>
              <Option value="TOEFL">National</Option>
              <Option value="TOEFL">International</Option>
            </Select>
          </FormItem>

          <FormItem label="奖项名称" prop="type">
            <Input v-model="formData.input3" />
          </FormItem>

          <FormItem label="参与年级" prop="type">
            <Checkbox v-model="single">9</Checkbox>
            <Checkbox v-model="single">10</Checkbox>
            <Checkbox v-model="single">11</Checkbox>
            <Checkbox v-model="single">12</Checkbox>
          </FormItem>

          <FormItem label="奖项描述" prop="type">
            <Input v-model="formData.textarea" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="Enter something..." />
          </FormItem>
        </Form>
      </div>
    </Modal>






    <!-- <float-layer>抽屉组件内容。。。</float-layer> -->

    <!-- <div :class="detailClasses">
      <h5>文书{{titleTxt}}</h5>
      <div class="margin-20">
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
          </div>
        </Upload>

        <Table class="margin-t-20" :columns="columns1" :data="data1"></Table>

      </div>
    </div> -->
  </div>
</template>

<script>
import floatLayer from "../../../components/FloatLayer";
export default {
  data() {
    return {
      formData:{},
      modelDisplay: false,
      arr: [1,2,3],
    };
  },
  computed: {
    pageClasses() {
      return ["container-box", "application-container"];
    },
    detailClasses() {
      return ["detail", this.foldFlah ? "detail-fold" : ""];
    }
  },
  methods: {
    submit(){},
    cancel(){},
    add(){
      this.modelDisplay = true;
    },
    cardEvent(id) {
      if (id === this.currentCardId) {
        this.foldFlah = false;
        this.currentCardId = "";
      } else {
        this.foldFlah = true;
        this.currentCardId = id;
      }
      this.$set(this, "titleTxt", id);
    }
  },
  components: {
    'float-layer': floatLayer
  }
};
</script>


<style lang="less">
.ivu-collapse-content {
  background: none;
}
.ivu-collapse {
  background: none;
  border: none;
}
.black {
  background: #ddd;
  margin: 10px 0;
}
.fold {
  padding-right: 45%;
}
.detail {
  position: absolute;
  padding-top: 60px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 100%;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
}

.detail-fold {
  width: 40%;
}
.application-container {
  height: 100%;
  width: 100%;
  background: #eee;
  .card-add {
    padding-top: 20px;
    text-align: center;
  }
  .card-blue {
    .title {
      background: #2b85e4;
    }
  }
  .card-red {
    .title {
      background: #b60000;
    }
  }

  .card {
    position: relative;
    width: 180px;
    height: 240px;
    .title {
      position: absolute;
      padding: 10px 0 0 10px;
      width: 100%;
      left: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      top: 0;
      height: 60px;
      p {
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
      }
    }
    .card-content {
      padding: 0;
      height: 114px;
      margin-top: 60px;
    }
    .foot {
      font-size: 12px;
      text-align: center;
    }
    .ivu-divider {
      color: #999;
      margin: 0;
      font-size: 12px;
      margin-bottom: 6px;
    }
  }
}
</style>

