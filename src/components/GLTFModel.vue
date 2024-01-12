<template></template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default {
  name: "GLTFModel",
  data() {
    return {
      model: null,
    };
  },
  props: {
    src: String,
  },
  mounted() {
    this.$nextTick(() => {
      this.initCube();
    });
  },
  methods: {
    initCube() {
      const gltfLoader = new GLTFLoader();
      const that=this
      gltfLoader.load(this.src, function (gltf) {
        const parentScene = that.$parent.scene;
        if (parentScene) {
          parentScene.add(gltf.scene);
        }
      });
    },
  },
};
</script>
