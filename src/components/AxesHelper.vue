<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "AxesHelper",
  data() {
    return {
      axesHelper:null
    };
  },
  props: {
    size: {
        type:Number,
        default:5,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initCube();
    });
  },
  methods: {
    initCube() {
      this.axesHelper = new THREE.AxesHelper(this.size);
      // 获取父组件传递的场景
      const parentScene = this.$parent.scene;
      // 将立方体添加到父组件传递的场景中
      if (parentScene) {
        parentScene.add(this.axesHelper);
      }
    },
  },
};
</script>
