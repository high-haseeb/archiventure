import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';

function Model(props) {
  const { nodes, materials } = useGLTF('/models/model1.glb')
  const modelRef = useRef(null);
  const { camera } = useThree();
  const [position, setPosition] = useState(camera.position);
  const handelPointerOver = (event) => {
    setPosition(event.point.add({ x: 0, y: 0, z: 0.5 }));
  }
  const handelPointerLeave = () => {
    setPosition({ x: 0, y: 0, z: 2.0 });
  }
  useFrame(() => {
    camera.position.lerp(position, 0.1);
    // camera.lookAt({ x: -0.655, y: 0.858, z: -0.008 });
  })

  return (
    <group {...props} ref={modelRef} dispose={null} onPointerOver={handelPointerOver} onPointerLeave={handelPointerLeave}>
      <mesh castShadow receiveShadow geometry={nodes.Office_building_1__0.geometry} material={materials.Office_building_1} position={[-0.655, 0.858, -0.008]} rotation={[-Math.PI / 2, 0, -1.086]} scale={[0.06, 0.06, 0.03]} />
    </group>
  )
}

useGLTF.preload('/models/model1.glb')
export default Model
