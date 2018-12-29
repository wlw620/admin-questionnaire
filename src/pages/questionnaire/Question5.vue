<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.label5Text1')">
      <Input v-model="form.feature" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label5Text2')">
      <Input v-model="form.plan" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label5Text3')">
      <Input v-model="form.story" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data() {
      return {
        ruleValidate: {},
        form: {
          feature: "",
          plan: "",
          story: ""
        }
      };
    },
    mounted() {
      let history = this.$localStorage.get("question5");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question5", null);
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
