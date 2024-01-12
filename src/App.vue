<template>
  <div class="wrapper">
    <div class="box">
      <World bg="black">
        <!-- <Cube :w="1" :h="1" :d="1" :x="0" :y="0" :z="0" color="green" /> -->
        <!-- <Cone :r="1" :h="1" :x="0" :y="0" :z="0" color="green" /> -->
        <!-- <Cylinder :rt="1" :rb="1" :h="1" :x="0" :y="0" :z="0" color="yellow" /> -->
        <!-- <Plane :w="1" :h="1" :x="0" :y="0" :z="0" color="green" /> -->
        <Sphere :r="2" :x="0" :y="0" :z="0" color="green"/>
      </World>
    </div>
    <div class="box">
      <World>
        <GLTFModel src="/dog.gltf" />
      </World>
    </div>
  </div>
</template>

<script>
import World from "./components/World.vue";
import Cube from "./components/Cube.vue";
import Cone from "./components/Cone.vue";
import Cylinder from "./components/Cylinder.vue";
import Plane from "./components/Plane.vue"
import Sphere from "./components/Sphere.vue"
import GLTFModel from "./components/GLTFModel.vue";

export default {
  name: "App",
  components: {
    World,
    Cube,
    Cone,
    Cylinder,
    Plane,
    Sphere,
    GLTFModel,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
.wrapper {
  display: flex;
}
.box {
  margin: 80px;
  border: 2px solid black;
  width: 400px;
  height: 400px;
}
</style>
