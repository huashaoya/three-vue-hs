<template></template>

<script>
import * as THREE from "three";

export default {
  name: "AmbientLight",
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
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      this.light = new THREE.AmbientLight(this.color, this.intensity); // soft white light

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
