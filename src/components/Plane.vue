<template></template>

<script>
import * as THREE from "three";

export default {
  name: "Plane",
  data() {
    return {
      plane: null,
    };
  },
  props: {
    w: Number,
    h: Number,
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
      const geometry = new THREE.PlaneGeometry(this.w, this.h);
      const material = this.$parent.pbr
        ? new THREE.MeshStandardMaterial({ color: this.color })
        : new THREE.MeshBasicMaterial({ color: this.color });
      this.plane = new THREE.Mesh(geometry, material);
      this.plane.position.set(this.x,this.y,this.z)
      this.plane.rotation.set(this.rx, this.ry, this.rz);

      if(this.$parent.pbr){
        this.plane.castShadow = true;
        this.plane.receiveShadow = true;
      }

      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.plane);
      }
    },
  },
};
</script>
