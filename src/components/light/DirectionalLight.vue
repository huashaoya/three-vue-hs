<template></template>

<script>
import * as THREE from "three";

export default {
  name: "DirectionalLight",
  data() {
    return {
      light: null,
    };
  },
  props: {
    intensity: {
      type: Number,
      default: 0.5,
    },
    color: {
      type: String,
      default: "white",
    },
    x: Number,
    y: Number,
    z: Number,
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      this.light = new THREE.DirectionalLight(this.color , this.intensity);
      this.light.position.set(this.x, this.y, this.z);
      this.light.castShadow = true;
      // 获取父组件传递的场景
      const parentScene = this.$parent.scene;
      // 将立方体添加到父组件传递的场景中
      if (parentScene) {
        parentScene.add(this.light);
      }
    },
  },
};
</script>
