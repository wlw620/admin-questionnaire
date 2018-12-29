<template>
  <div class="container-box question-container">
    <Card class="padding-20">
      <Steps :current="current" :status="status">
        <Step title="基本信息" content=""></Step>
        <Step title="教育背景" content=""></Step>
        <Step title="学术背景" content=""></Step>
        <Step title="专业背景" content=""></Step>
        <Step title="申请相关" content=""></Step>
        <Step title="个人相关" content=""></Step>
        <Step title="关于我们" content=""></Step>
      </Steps>
      <div class="padding-30">
        <question-0 v-if="current === 0" ref="question0"></question-0>
        <question-1 v-if="current === 1" ref="question1"></question-1>
        <question-2 v-if="current === 2" ref="question2"></question-2>
        <question-3 v-if="current === 3" ref="question3"></question-3>
        <question-4 v-if="current === 4" ref="question4"></question-4>
        <question-5 v-if="current === 5" ref="question5"></question-5>
        <question-6 v-if="current === 6" ref="question6"></question-6>
      </div>
      <div class="t-center">
        <Button class="margin-r-20" v-if="current>0" type="primary" @click="prevStep">上一步</Button>
        <Button v-if="current < steps.length - 1" type="primary" @click="nextStep">下一步</Button>
        <Button v-else type="primary" @click="submit">提 交</Button>
      </div>
    </Card>
  </div>
</template>

<script>
  import Question0 from "@/pages/questionnaire/Question0";
  import Question1 from "@/pages/questionnaire/Question1";
  import Question2 from "@/pages/questionnaire/Question2";
  import Question3 from "@/pages/questionnaire/Question3";
  import Question4 from "@/pages/questionnaire/Question4";
  import Question5 from "@/pages/questionnaire/Question5";
  import Question6 from "@/pages/questionnaire/Question6";

  export default {
    data() {
      return {
        status: "wait",
        current: 0,
        maxStep: 6,
        steps: [
          "/questionnaire/0",
          "/questionnaire/1",
          "/questionnaire/2",
          "/questionnaire/3",
          "/questionnaire/4",
          "/questionnaire/5",
          "/questionnaire/6"
        ],
        currentFormData: {},
        fromDataArr: []
      };
    },
    watch: {
      $route: "getRouteParams"
    },
    methods: {
      setStep(step) {
        this.current = +step;
        this.$router.push({
          path: this.steps[this.current]
        });
      },
      getRouteParams() {
        let step =
          this.$route.params.id > this.current ?
          this.current :
          this.$route.params.id;
        this.setStep(step);
      },
      submit() {
        let formData = {};
        this.fromDataArr.forEach(item => {
          formData = Object.assign(formData, item);
        });
        console.error(formData);
      },
      prevStep() {
        this.$Modal.confirm({
          title: '确认返回上一问卷页面吗？',
          content: '<p>返回后本页填写内容将会丢失，需要重新填写</p>',
          okText: '确定',
          cancelText: '再想想',
          onOk: () => {
            if (this.current > 0) {
              this.current--;
              this.$router.push({
                path: this.steps[this.current]
              });
              this.$set(this, "current", this.current);
            }
          }
        });
      },
      nextStep() {
        if (this.current < this.maxStep) {
          this.getCurrentPageData()
            .then(data => {
              let key = "question" + this.current;
              this.$localStorage.set(key, JSON.stringify(data));
              this.fromDataArr.push(data);
              this.setStep(this.current + 1);
            })
            .catch(e => {
              console.log(e);
              this.$Notice.config({
                top: 150,
                duration: 3
              });
              this.$Notice.error({
                title: '失败，请确保必填内容不能为空或者内容的格式正确！',
              });
            });

          // this.setNextPageData();
        }
      },

      getCurrentPageData() {
        let key = "question" + this.current;
        return this.$refs[key].getCurrentPageFormDara();
      },
      setNextPageData() {
        let key = "question" + this.current;
        this.currentFormData = {
          schoolName: "123",
          schoolType: "",
          schoolBatch: ""
        };
      },
      rest() {
        this.setStep(0);
      }
    },
    mounted() {
      this.rest();
    },
    components: {
      question0: Question0,
      question1: Question1,
      question2: Question2,
      question3: Question3,
      question4: Question4,
      question5: Question5,
      question6: Question6
    }
  };
</script>

<style lang="less">
  .question-container {
    width: 1000px;
    margin: 0 auto;
  }
</style>
