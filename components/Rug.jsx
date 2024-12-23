import React from 'react'
import { useGLTF } from '@react-three/drei'

function Rug(props) {
  const { nodes, materials } = useGLTF('/models/rug.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.007}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Plane_Mat_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Rug_Bottom_Mat1_0.geometry} material={materials['Mat.1']} position={[0, -0.55, 0]} scale={[1.006, 1.008, 1.008]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rug.glb')
export default  Rug;
