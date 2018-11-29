<template>
  <div class="custom-input">
    <input :value="value" @input="$emit('input', $event.target.value)" type="text">
  </div>
</template>
<script>
  export default {
    props: ['value']
  }
</script>