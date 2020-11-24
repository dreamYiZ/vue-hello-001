<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :parentMethods="parentMethods"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import API from "./api";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    parentMethods(params, type) {
      console.log(params);
      console.log("操作类型：", type);
      API.postDate({ params, type }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
