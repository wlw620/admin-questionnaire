<template>
  <div>
   <h4>{{ row.info }}</h4>
   <p>{{ row.subInfo }}</p>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>
