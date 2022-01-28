<template>
  <div>{{ message }}</div>
  <div>
    <button @click="click1++">sample button</button>
    <div>{{ click1 }}</div>
    <button @click="click1--">Click Here!</button>
    <input v-model="par1" type="" />
    <p>{{ par1 }}</p>
    <button></button>
  </div>
</template>

<script>
export default {
  name: "HelloPhils",
  data() {
    return {
      detail: "Alert!",
      click1: 1,
      par1: "",
    };
  },
  props: {
    message: String,
  },

  methods: {
    clickhere() {
      alert(this.detail);
      console.log(this.detail);
    },
  },
};
</script>
