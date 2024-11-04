import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
/////
//create a scene
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// console.log(cubeMesh);
// console.log(scene);

scene.add(cubeMesh);

//////
//create camera

// console.log(window);

//(fov,aspect ration,near,far)
const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 30);

//manipulating position camera
camera.position.z = 5;

////
//initialize renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

///
//initialize the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

///
//renderloop
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};
renderloop();
