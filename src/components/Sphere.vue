<template></template>

<script>
import * as THREE from "three";

export default {
  name: "Sphere",
  data() {
    return {
      element: null,
    };
  },
  props: {
    r: {
      type: Number,
      default: 1,
    },
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
      const geometry = new THREE.SphereGeometry(this.r);
      const material = this.$parent.pbr
        ? new THREE.MeshStandardMaterial({ color: this.color })
        : new THREE.MeshBasicMaterial({ color: this.color });
      this.element = new THREE.Mesh(geometry, material);
      this.element.position.set(this.x, this.y, this.z);
      this.element.rotation.set(this.rx, this.ry, this.rz);

      if (this.$parent.pbr) {
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
