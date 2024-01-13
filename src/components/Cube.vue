<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Cube",
  data() {
    return {
      cube:null
    };
  },
  props: {
    w: Number,
    h: Number,
    d: Number,
    x: Number,
    y: Number,
    z: Number,
    color: String,
  },
  mounted() {
    this.$nextTick(() => {
      this.initCube();
    });
  },
  methods: {
    initCube() {
      const geometry = new THREE.BoxGeometry(this.w, this.h, this.d);
      const material = this.$parent.pbr?new THREE.MeshStandardMaterial({ color: this.color }):new THREE.MeshBasicMaterial({ color: this.color });
      this.cube = new THREE.Mesh(geometry, material);
      this.cube.position.x = this.x;
      this.cube.position.y = this.y;
      this.cube.position.z = this.z;
      this.cube.castShadow=true
      // 获取父组件传递的场景
      const parentScene = this.$parent.scene;
      // 将立方体添加到父组件传递的场景中
      if (parentScene) {
        parentScene.add(this.cube);
      }
    },
  },
};
</script>
