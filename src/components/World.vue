<template>
  <div ref="container" id="h-world">
    <slot></slot>
  </div>
</template>

<script>
import * as THREE from "three";
import * as CANNON from "cannon-es";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { toRaw } from "vue";
export default {
  name: "World",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      physicsWorld: null,
      elements:[],
      clock:null
    };
  },
  props: {
    bg: {
      type: String,
      default: "transparent",
    },
    pbr: {
      type: Boolean,
      default: false,
    },
    physics: {
      type: Boolean,
      dafault: false,
    },
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      let worldDom = document.getElementById("h-world");
      let width = worldDom.offsetWidth;
      let height = worldDom.offsetHeight;

      //场景
      this.scene = new THREE.Scene();
      this.scene.background =
        this.bg == "transparent"
          ? new THREE.Color(null)
          : new THREE.Color(this.bg);

      //相机
      this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.camera.position.z = 10;

      //渲染器
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);

      this.$refs.container.appendChild(this.renderer.domElement);

      // 控制器
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;

      //如果开启了pbr
      if (this.pbr) {
        // 开启场景中的阴影贴图
        this.renderer.shadowMap.enabled = true;
      }

      //如果开启了物理
      if (this.physics) {
        this.physicsWorld =  new CANNON.World();
        this.physicsWorld.gravity.set(0, -9.8, 0);
      }
      this.clock=new THREE.Clock()
    },
    animate() {
      requestAnimationFrame(this.animate);
      //如果开启了物理
      if (this.physics) {
        this.physicsWorld.step(1 / 120,this.clock.getDelta(),3);

        // 同步所有与物理模拟相关的 Three.js 对象的位置和旋转
        this.elements.forEach(elements => {
          if (elements.updateFromPhysics) {
            elements.updateFromPhysics();
          }
        });
      }
      //this.controls.update();
      this.renderer.render(toRaw(this.scene), this.camera);
    },
  },
};
</script>

<style>
#h-world {
  width: 100%;
  height: 100%;
}
</style>
