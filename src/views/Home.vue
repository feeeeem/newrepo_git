<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="" />
     <HelloPhils message= "aaaaaaaaaaaaaaaaaaaa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloPhils from "@/components/HelloPhils.vue";

export default {
  name: "Home",
  components: {
    HelloWorld, 
    HelloPhils
  },
};
</script>
