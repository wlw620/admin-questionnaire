<template>
  <div>
    <Row class="expand-row">
      <Col>
      <span class="expand-value">{{ row.job }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>
