<template>
  <World>
    <Cube :w="1" :h="3" :d="1" :x="0" 
    :y="0" :z="0" color="yellow"/>
    <Cube :w="1" :h="1" :d="1" :x="1" 
    :y="0" :z="0" color="red"/>
    <Cube :w="2" :h="1" :d="1" :x="-1.5" 
    :y="0" :z="0" color="blue"/>
  </World>
</template>

<script>
import World from "./components/World.vue";
import Cube from "./components/Cube.vue";

export default {
  name: "App",
  components: {
    World,
    Cube,
  },
};
</script>
