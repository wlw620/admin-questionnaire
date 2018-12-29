<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.score')">
      <Input v-model="form.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.totalScore')">
      <Input v-model="form.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data() {
      return {
        ruleValidate: {},
        form: {
          grades: "",
          gpa: ""
        }
      };
    },
    mounted() {
      let history = this.$localStorage.get("question2");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question2", null);
    },
    methods: {
      getCurrentPageFormDara() {
        return this.validate("form");
      },
      validate(name) {
        return new Promise((resolve, reject) => {
          resolve(this.form);
        });

        // return new Promise((resolve, reject) => {
        //   this.$refs[name].validate(valid => {
        //     console.log(11111);
        //     if (valid) {
        //       resolve();
        //     } else {
        //       reject();
        //     }
        //   });
        // });
      }
    }
  };
</script>
