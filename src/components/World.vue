<!-- World.vue -->
<template>
  <div ref="container">
    <slot></slot>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { toRaw } from "vue";
export default {
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      cubesCount: 2,
      cube: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(this.renderer.domElement);
        // 初始化控制器
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        // 设置控制器阻尼
        controls.enableDamping = true
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(toRaw(this.scene), this.camera);
    },
  },
};
</script>

<style>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
