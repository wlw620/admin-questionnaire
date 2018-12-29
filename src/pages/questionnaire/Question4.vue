<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.label4Text1')">
      <RadioGroup v-model="form.fa">
        <Radio class="margin-l-10 margin-r-20" label="是">
          {{$t('question.radio4Text1')}}
        </Radio>
        <Radio class="margin-l-10 margin-r-20" label="否">
          {{$t('question.radio4Text2')}}
        </Radio>
        <Radio label="部分">
          {{$t('question.radio4Text3')}}
        </Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.label4Text2')">
      <Input v-model="form.school_selection" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label4Text3') + 1">
      <Input v-model="form.input3"></Input>
    </FormItem>
    <h4>{{$t('question.label4Text4')}}</h4>
    <p>{{$t('question.label4Text5')}}</p>

    <draggable v-model="form.list" @start="drag=true" @end="drag=false">
      <div v-for="element in form.list" :key="element.id">{{element.name}}</div>
    </draggable>

  </Form>
</template>

<script>
  import draggable from "vuedraggable";

  export default {
    data() {
      return {
        ruleValidate: {

        },
        form: {
          fa: "是",
          school_selection: "",
          list: [{
            id: 1,
            name: "地理位置"
          }, {
            id: 2,
            name: "学校排名"
          }]
        }
      };
    },
    components: {
      draggable
    },
    mounted() {
      let history = this.$localStorage.get("question4");
      if (history) {
        this.form = Object.assign({}, this.form, JSON.parse(history));
      }
      this.$localStorage.set("question4", null);
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
