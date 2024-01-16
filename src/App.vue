<template>
 <button @click="a">+</button>
  <div class="wrapper">
    <div class="box">
      <World bg="black" pbr physics>
        <AxesHelper />
        <DirectionalLight :x="0" :y="5" :z="0" :intensity="2" />
        <AmbientLight :intensity="0.5" />
        <!-- <Cone :r="1" :h="1" :x="0" :y="0" :z="0" color="green" /> -->
        <!-- <Cylinder :rt="1" :rb="1" :h="1" :x="0" :y="0" :z="0" color="yellow" /> -->
        <Plane
          :w="8"
          :h="8"
          :x="0"
          :y="-5"
          :z="0"
          :rx="-Math.PI / 2"
          color="white"
        />
        <Sphere :r="1" :x="0" :y="8" :z="0" color="red" />
         <Cube :w="5" :h="0.5" :d="1" :x="0" :y="5" :z="0" :rx="0" :rz="0.5" color="green"/>
         <Cube :w="5" :h="0.5" :d="1" :x="-4" :y="0" :z="0" :rx="0" :rz="-0.5" color="green"/>
         <Sphere :r="1" :x="2" :y="-4" :z="0" color="yellow" />
         <Cube :w="1" :h="0.5" :d="5" :x="-2" :y="-4" :z="0" :rx="0" :rz="0" color="green"/>
        <!-- <Sphere :r="1" :x="1.5" :y="5" :z="0" color="green" /> -->
        <!-- <Circle :r="2" :x="0" :y="0" :z="0" color="green"/> -->
      </World>
    </div>
    <!-- <div class="box">
      <World>
        <GLTFModel src="/dog.gltf" />
      </World>
    </div> -->
  </div>
</template>

<script>
import World from "./components/World.vue";
import Cube from "./components/Cube.vue";
import Cone from "./components/Cone.vue";
import Cylinder from "./components/Cylinder.vue";
import Plane from "./components/Plane.vue";
import Sphere from "./components/Sphere.vue";
import Circle from "./components/Circle.vue";
import AxesHelper from "./components/AxesHelper.vue";
import GLTFModel from "./components/GLTFModel.vue";
import AmbientLight from "./components/AmbientLight.vue";
import DirectionalLight from "./components/DirectionalLight.vue";

export default {
  name: "App",
  data() {
    return {
      x: 1,
    };
  },
  components: {
    World,
    Cube,
    Cone,
    Cylinder,
    Plane,
    Sphere,
    Circle,
    GLTFModel,
    AmbientLight,
    AxesHelper,
    DirectionalLight,
  },
  mounted() {
   
  },
  methods:{
    a(){
      this.x++
      console.log(this.x)
    }
  }
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
  width: 800px;
  height: 500px;
}
</style>
