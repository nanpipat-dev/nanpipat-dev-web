import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    var mixer
    var clock = new THREE.Clock();

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene

                // obj.name = 'dog'
                // obj.position.y = 0
                // obj.position.x = 0
                // obj.receiveShadow = receiveShadow
                // obj.castShadow = castShadow

                //Playing Animation
                mixer = new THREE.AnimationMixer(gltf.scene);
                console.log(gltf.animations)
                var action = mixer.clipAction(gltf.animations[0]);
                action.play();
                // gltf.animations.forEach((clip) => {
                //     mixer.clipAction(clip).play();
                // })

                // clock = new THREE.Clock();


                // if (mixer !== undefined) {
                //     console.log(mixer,)
                //     mixer.update(clock.getDelta())
                // }

                scene.add(gltf.scene)


                // obj.traverse(function (child) {
                //     if (child.isMesh) {
                //         child.castShadow = castShadow
                //         child.receiveShadow = receiveShadow
                //     }
                // })
                resolve(gltf.scene)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}