<template></template>

<script>
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { toRaw } from "vue";

export default {
  name: "Sphere",
  data() {
    return {
      element: null,
      body:null
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

      //如果开启了物理
      if (this.$parent.physics) {
        const shape = new CANNON.Sphere(this.r);
        const material = new CANNON.Material();
        this.body = new CANNON.Body({
          shape: shape,
          position: new CANNON.Vec3(this.x, this.y, this.z),
          mass: 1,
          material: material,
        });
        const physicsWorld = this.$parent.physicsWorld;
        if (physicsWorld) {
          physicsWorld.addBody(this.body);
          // 将 Cube 组件添加到父组件的 cubes 数组中
          this.$parent.elements.push(this);
           //console.log(this.body.position)
        }
      }

      const parentScene = this.$parent.scene;
      if (parentScene) {
        parentScene.add(this.element);
      }
    },
     updateFromPhysics() {
      // 同步位置和姿态
      //console.log(toRaw(this.body))
      //this.element.position.copy(this.body.position);
      //this.element.quaternion.copy(this.body.quaternion);
    },
  },
};
</script>
