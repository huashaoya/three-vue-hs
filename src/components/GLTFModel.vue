<template></template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default {
  name: "GLTFModel",
  data() {
    return {
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
      let mixer;
      const gltfLoader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/gltf/");
      dracoLoader.setDecoderConfig({ type: "js" });
      dracoLoader.preload();
      gltfLoader.setDRACOLoader(dracoLoader);
      const that = this;
      gltfLoader.load(this.src, function (gltf) {
        const parentScene = that.$parent.scene;
        const mixer=that.$parent.animationMixer

        // 添加模型到场景
        if (parentScene) {
          parentScene.add(gltf.scene);
        }
        // 播放动画
        const action = mixer.clipAction(gltf.animations[0]);
        console.log(gltf); // 检查动画的持续时间
        action.play();
      });
    },
  },
};
</script>
