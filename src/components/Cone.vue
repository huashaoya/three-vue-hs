<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Cone",
  data() {
    return {
      cone:null
    };
  },
  props: {
    r: Number,
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
      const geometry = new THREE.ConeGeometry(this.r, this.h);
      const material = this.$parent.pbr?new THREE.MeshStandardMaterial({ color: this.color }):new THREE.MeshBasicMaterial({ color: this.color });
      this.cone = new THREE.Mesh(geometry, material);
      this.cone.position.x = this.x;
      this.cone.position.y = this.y;
      this.cone.position.z = this.z;
    
      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.cone);
      }
    },
  },
};
</script>
