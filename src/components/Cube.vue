<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Cube",
  data() {
    return {
      element:null
    };
  },
  props: {
    w: Number,
    h: Number,
    d: Number,
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    z: {
      type: Number,
      default: 0,
    },
    rx: {
      type: Number,
      default: 0,
    },
    ry: {
      type: Number,
      default: 0,
    },
    rz: {
      type: Number,
      default: 0,
    },
    color: String,
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      const geometry = new THREE.BoxGeometry(this.w, this.h, this.d);
      const material = this.$parent.pbr?new THREE.MeshStandardMaterial({ color: this.color }):new THREE.MeshBasicMaterial({ color: this.color });
      this.element = new THREE.Mesh(geometry, material);
      this.element.position.set(this.x,this.y,this.z)
      this.element.rotation.set(this.rx,this.ry,this.rz)

      if(this.$parent.pbr){
        this.element.castShadow = true;
        this.element.receiveShadow = true;
      }

      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.element);
      }
    },
  },
};
</script>
