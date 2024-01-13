<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Sphere",
  data() {
    return {
      sphere:null
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
      this.init();
    });
  },
  methods: {
    init() {
      const geometry = new THREE.SphereGeometry(this.r);
      const material = this.$parent.pbr?new THREE.MeshStandardMaterial({ color: this.color }):new THREE.MeshBasicMaterial({ color: this.color });
      this.sphere = new THREE.Mesh(geometry, material);
      this.sphere.position.x = this.x;
      this.sphere.position.y = this.y;
      this.sphere.position.z = this.z;
      // 获取父组件传递的场景
      const parentScene = this.$parent.scene;
      // 将立方体添加到父组件传递的场景中
      if (parentScene) {
        parentScene.add(this.sphere);
      }
    },
  },
};
</script>
