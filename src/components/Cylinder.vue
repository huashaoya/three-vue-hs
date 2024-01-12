<template>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Cylinder",
  data() {
    return {
      cylinder:null
    };
  },
  props: {
    rt: Number,
    h: Number,
    rb: Number,
    x: Number,
    y: Number,
    z: Number,
    color: String,
  },
  mounted() {
    this.$nextTick(() => {
      this.initCube();
    });
  },
  methods: {
    initCube() {
      const geometry = new THREE.CylinderGeometry(this.rt, this.rb,this.h);
      const material = new THREE.MeshBasicMaterial({ color: this.color });
      this.cylinder = new THREE.Mesh(geometry, material);
      this.cylinder.position.x = this.x;
      this.cylinder.position.y = this.y;
      this.cylinder.position.z = this.z;
    
      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.cylinder);
      }
    },
  },
};
</script>
