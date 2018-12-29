<template>
  <Form :label-width="50">
    <FormItem label="类型" prop="type" >
      <Select v-model="formData.type" placeholder="type">
        <Option value="PS">PS</Option>
        <Option value="Supplement">Supplement</Option>
        <Option value="Tranfer">Tranfer</Option>
        <Option value="Summer">Summer</Option>
        <Option value="Other">Other</Option>
      </Select>
    </FormItem>
    <FormItem label="主题" prop="type">
      <Input v-if="formData.type==='Other'" v-model="formData.text" placeholder="Enter something..."/>
      <Input v-else v-model="formData.text" placeholder="不可修改，读库"/>
    </FormItem>
    <FormItem label="标题" prop="type">
      <Input v-model="formData.text" placeholder="Enter something..."/>
    </FormItem>
    <FormItem label="描述" prop="type">
      <Input v-model="formData.text" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="Enter something..."/>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        type: "",
        pic: "",
        text: ""
      }
    };
  }
};
</script>
