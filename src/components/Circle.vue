<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Circle",
  data() {
    return {
      circle:null
    };
  },
  props: {
    r: Number,
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
      const geometry = new THREE.CircleGeometry(this.r);
      const material = new THREE.MeshBasicMaterial({ color: this.color });
      this.circle = new THREE.Mesh(geometry, material);
      this.circle.position.x = this.x;
      this.circle.position.y = this.y;
      this.circle.position.z = this.z;
      // 获取父组件传递的场景
      const parentScene = this.$parent.scene;
      // 将立方体添加到父组件传递的场景中
      if (parentScene) {
        parentScene.add(this.circle);
      }
    },
  },
};
</script>
