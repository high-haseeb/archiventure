import React from 'react'
import { useGLTF } from '@react-three/drei'

function Light(props) {
  const { nodes, materials } = useGLTF('/models/light.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group position={[0, 0, 166.055]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
          <group position={[11.27, -86.862, 0]}>
            <mesh castShadow receiveShadow geometry={nodes.BLACK_METAL.geometry} material={materials.BLACK_METAL} />
            <mesh castShadow receiveShadow geometry={nodes.CHROME.geometry} material={materials.CHROME} />
            <mesh castShadow receiveShadow geometry={nodes.SILVER.geometry} material={materials.EnvironmentAmbientLight} />
            <mesh castShadow receiveShadow geometry={nodes.WHITE_PLASTIC.geometry} material={materials.WHITE_PLASTIC} />
            <mesh castShadow receiveShadow geometry={nodes.WIRE.geometry} material={materials.WIRE} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/light.glb')
export default Light
