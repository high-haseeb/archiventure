import React from 'react'
import { useGLTF } from '@react-three/drei'

function Table(props) {
  const { nodes, materials } = useGLTF('/models/table.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
        <group position={[0, 20.5, 12.202]}>
          <group position={[0, -44, 4.1]}>
            <mesh castShadow receiveShadow geometry={nodes.stolik_pauk_Stoloik_metall_0.geometry} material={materials.Stoloik_metall} />
            <mesh castShadow receiveShadow geometry={nodes.stolik_pauk_Stolik_glass_0.geometry} material={materials.Stolik_glass} />
            <mesh castShadow receiveShadow geometry={nodes.stolik_pauk_glass_tor_id3_0.geometry} material={materials.glass_tor_id3} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/table.glb')
export default Table;
