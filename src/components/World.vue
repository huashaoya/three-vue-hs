<template>
  <div ref="container" id="h-world">
    <slot></slot>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { toRaw } from "vue";
export default {
  name: "World",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
    };
  },
  props:{
    bg:{
      type:String,
      default:'transparent'
    }
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      let worldDom=document.getElementById('h-world')
      let width=worldDom.offsetWidth
      let height=worldDom.offsetHeight

      //场景
      this.scene = new THREE.Scene();
     
      this.scene.background= (this.bg=='transparent'?new THREE.Color(null): new THREE.Color(this.bg))

      //相机
      this.camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      //渲染器
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.$refs.container.appendChild(this.renderer.domElement);

      // 控制器
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.enableDamping = true;

    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(toRaw(this.scene), this.camera);
    },
  },
};
</script>

<style>
#h-world {
  width:100%;
  height:100%;
}
</style>
