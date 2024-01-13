<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Plane",
  data() {
    return {
      plane:null
    };
  },
  props: {
    w: Number,
    h: Number,
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
      const geometry = new THREE.PlaneGeometry(this.w, this.h);
      const material = this.$parent.pbr?new THREE.MeshStandardMaterial({ color: this.color }):new THREE.MeshBasicMaterial({ color: this.color });
      this.plane = new THREE.Mesh(geometry, material);
      this.plane.position.x = this.x;
      this.plane.position.y = this.y;
      this.plane.position.z = this.z;
     
      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.plane);
      }
    },
  },
};
</script>
