<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.name')" prop="chinesename">
      <Input v-model="form.chinesename"></Input>
    </FormItem>
    <FormItem :label="$t('question.sex')">
      <RadioGroup v-model="form.gender">
        <Radio label="male" class="margin-l-10 margin-r-20">
          <span>{{$t('question.male')}}</span>
        </Radio>
        <Radio label="female">
          <span>{{$t('question.female')}}</span>
        </Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.birthday')" prop="birthday">
      <Input v-model="form.birthday"></Input>
    </FormItem>
    <FormItem :label="$t('question.wechat')" prop="wechat">
      <Input v-model="form.wechat"></Input>
    </FormItem>
    <FormItem :label="$t('question.email')" prop="email">
      <Input v-model="form.email"></Input>
    </FormItem>
    <FormItem :label="$t('question.phone')" prop="phone">
      <Input v-model="form.phone"></Input>
    </FormItem>
  </Form>
</template>

<script>
  const defaultValidate = {
    required: true,
    message: "不能为空",
    trigger: "blur"
  };

  export default {
    data() {
      return {
        form: {
          chinesename: "",
          gender: "male",
          birthday: "",
          wechat: "",
          email: "",
          phone: ""
        },
        ruleValidate: {
          chinesename: [defaultValidate],
          birthday: [defaultValidate],
          wechat: [defaultValidate],
          email: [defaultValidate, {
            type: 'email',
            message: '邮箱格式不正确',
            trigger: 'blur'
          }],
          phone: [defaultValidate]
        }
      };
    },
    mounted() {
      let history = this.$localStorage.get("question0");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question0", null);
    },
    methods: {
      getCurrentPageFormDara() {
        return this.validate("form");
      },
      validate(name) {
        return new Promise((resolve, reject) => {
          this.$refs[name].validate(valid => {
            if (valid) {
              console.error("SCUU");
              return resolve(this.form);
            } else {
              console.error("ERROR");
              return reject();
            }
          });
        });
      }
    }
  };
</script>
