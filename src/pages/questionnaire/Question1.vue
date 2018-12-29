<template>
  <div>
    <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
      <FormItem :label="$t('question.schoolName')" prop="schoolName">
        <Input v-model="form.schoolName"></Input>
      </FormItem>
      <FormItem :label="$t('question.schoolType')">
        <Select v-model="form.schoolType">
              <Option v-for="item in schoolTyps" :value="item.key" :key="item.key">{{ item.value }}</Option>
            </Select>
      </FormItem>
      <FormItem :label="$t('question.schoolBatch')">
        <Select v-model="form.schoolBatch">
              <Option v-for="item in schoolBatch" :value="item.key" :key="item.key">{{ item.value }}</Option>
            </Select>
      </FormItem>
    </Form>
  </div>
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
        schoolTyps: [{
          key: "国内普高",
          value: "1"
        }],
        schoolBatch: [{
          key: "2016",
          value: "2016"
        }],
        form: {
          schoolName: "",
          schoolType: "1",
          schoolBatch: ""
        },
        ruleValidate: {
          schoolName: [defaultValidate]
        }
      };
    },
    mounted() {
      let history = this.$localStorage.get("question1");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question1", null);
    },
    methods: {
      getCurrentPageFormDara() {
        return this.validate('form');
      },
      validate(name) {
        console.log(this.$refs[name]);
        return new Promise((resolve, reject) => {
          this.$refs[name].validate(valid => {
            if (valid) {
              resolve(this.form);
            } else {
              reject();
            }
          });
        });
      }
    }
  };
</script>
