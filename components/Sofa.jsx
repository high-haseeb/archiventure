import React from 'react'
import { useGLTF } from '@react-three/drei'

function Sofa(props) {
  const { nodes, materials } = useGLTF('/models/sofa.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.328, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219.geometry} material={materials['1002']} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219_1.geometry} material={materials['1004']} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219_2.geometry} material={materials['1001']} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219_3.geometry} material={materials['1005']} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219_4.geometry} material={materials['1003']} />
          <mesh castShadow receiveShadow geometry={nodes.defaultMaterial219_5.geometry} material={materials['1006']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sofa.glb')
export default Sofa;
