<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.label3Text1')">
      <RadioGroup v-model="form.career">
        <Radio class="margin-l-10 margin-r-20" label="较为确定">
          {{$t('question.radio3Text1')}}
        </Radio>
        <Radio class="margin-l-10 margin-r-20" label="一般确定">
          {{$t('question.radio3Text2')}}
        </Radio>
        <Radio label="较为不确定">
          {{$t('question.radio3Text3')}}
        </Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.label3Text2')">
      <Input v-model="form.interest" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <h4 class="margin-t-20 margin-b-20">{{$t('question.label3Text3')}}</h4>
    <FormItem :label="$t('question.label3Text4') + 1">
      <Input v-model="form.award1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 2">
      <Input v-model="form.award2" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 3">
      <Input v-model="form.award3" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 4">
      <Input v-model="form.award4" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 5">
      <Input v-model="form.award5" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text5')">
      <Input v-model="form.award_other" placeholder="" />
    </FormItem>
    <h4 class="margin-t-20 margin-b-20">{{$t('question.label3Text6')}}</h4>

    <FormItem :label="$t('question.label3Text7') + 1">
      <Input v-model="form.activity1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text7') + 2">
      <Input v-model="form.activity2" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text7') + 3">
      <Input v-model="form.activity3" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text7') + 4">
      <Input v-model="form.activity4" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text7') + 5">
      <Input v-model="form.activity5" placeholder="" />
    </FormItem>

    <FormItem :label="$t('question.label3Text5')">
      <Input v-model="form.activity_other" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text8') + 2">
      <Input v-model="form.meaning" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data() {
      return {
        ruleValidate: {},
        form: {
          career: "较为确定",
          interest: "",
          award1: "",
          award2: "",
          award3: "",
          award4: "",
          award5: "",
          award_other: "",
          activity1: "",
          activity2: "",
          activity3: "",
          activity4: "",
          activity5: "",
          activity_other: "",
          meaning: ""
        }
      };
    },
    mounted() {
      let history = this.$localStorage.get("question3");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question3", null);
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
