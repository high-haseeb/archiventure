"use client";
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment, OrbitControls, Center, useProgress } from '@react-three/drei'
// import { easing } from 'maath'
import { Shelf } from './Shelf';
import Sofa from './Sofa';
import Planter from './Planter';
import Table from './Table';
import Light from './Light';
import Rug from './Rug';
import { Suspense } from 'react';
import Model from './Model';

const Loader = () => {
    const {progress} = useProgress();
    return (
        <div className='w-screen h-screen bg-black text-white flex items-center justify-center text-4xl'>
            adventure starting in {progress.toFixed(0)}
        </div>
    )
}

const Experience = () => (
    <div className='w-screen h-screen absolute top-0 left-0'>
        <Suspense fallback={<Loader />} >
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.5, 4] }} >
                <color attach="background" args={['#191920']} />
                <fog attach="fog" args={['#191920', 0, 15]} />
                <OrbitControls />
                <Center>
                    <Shelf size={1.0} />
                    <Model />
                    <Sofa position={[-2, 0, 1]} rotation={[0, Math.PI / 2, 0]} />
                    <Sofa position={[2, 0, 1]} rotation={[0, -Math.PI / 2, 0]} />
                    <Planter position={[1.4, 0, 0]} />
                    <Planter position={[-1.4, 0, 0]} />
                    <Table position={[0, 0, 1.5]} />
                    <Rug position={[0, 0.01, 1]} scale={2.0} />
                    <Ground />
                </Center>
                <Light position={[1.4, 0.8, 0.0]} scale={1.5} />
                <Light position={[-1.4, 0.8, 0.0]} scale={1.5} />
                <Environment preset="city" />
            </Canvas>
        </Suspense>
    </div>
)
const Ground = () => {

    useFrame(({ camera }) => {
        camera.position.lerp({ x: 0, y: 0, z: 2.0 }, 0.01);
    })

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
            />
        </mesh>
    )
}

// function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
//     const ref = useRef()
//     const clicked = useRef()
//     useEffect(() => {
//         clicked.current = ref.current.getObjectByName(null)
//         if (clicked.current) {
//             clicked.current.parent.updateWorldMatrix(true, true)
//             clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
//             clicked.current.parent.getWorldQuaternion(q)
//         } else {
//             p.set(0, 0, 5.5)
//             q.identity()
//         }
//     })
//     useFrame((state, dt) => {
//         easing.damp3(state.camera.position, p, 0.4, dt)
//         easing.dampQ(state.camera.quaternion, q, 0.4, dt)
//     })
//     return (
//         <group
//             ref={ref}
//             onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
//             onPointerMissed={() => setLocation('/')}>
//             {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
//         </group>
//     )
// }
//
// function Frame({ url, c = new THREE.Color(), ...props }) {
//     const image = useRef()
//     const frame = useRef()
//     const [hovered, hover] = useState(false)
//     const [rnd] = useState(() => Math.random())
//     const isActive = false;
//     useCursor(hovered)
//     useFrame((state, dt) => {
//         image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
//         easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
//         easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
//     })
//     return (
//         <group {...props}>
//             <mesh
//                 name={name}
//                 onPointerOver={(e) => (e.stopPropagation(), hover(true))}
//                 onPointerOut={() => hover(false)}
//                 scale={[1, GOLDENRATIO, 0.05]}
//                 position={[0, GOLDENRATIO / 2, 0]}>
//                 <boxGeometry />
//                 <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
//                 <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
//                     <boxGeometry />
//                     <meshBasicMaterial toneMapped={false} fog={false} />
//                 </mesh>
//                 <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
//             </mesh>
//             <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
//                 {name.split('-').join(' ')}
//             </Text>
//         </group>
//     )
// }
export default Experience;
