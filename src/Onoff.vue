<template>
  <div>

    <h1>Custom control</h1>
    <button
      class="on"
      :class="{'active': value}"
      @click="onChange(true)"
    >On</button>

    <button
      class="off"
      :class="{'active': !value}"
      @click="onChange(false)"
    >Off</button>

  </div>
</template>

<script>
export default {
  name: "Onoff",
  props: [ 'value' ],

  methods: {
    onChange(newValue) {
        this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped>

  .on, .off{
    background-color: #e8e6e6;
    color: black;
    border: none;
    padding: 15px 35px;
    cursor: pointer;
    font-size: 20px;
  }
  .on.active{
    background-color: #49a832;
    color: white;
  }
  .off.active{
    background-color: #c80a4e;
    color: white;
  }
  button:active{
    box-shadow: 1px 2px 3px #bec6cd;
  }

</style>
