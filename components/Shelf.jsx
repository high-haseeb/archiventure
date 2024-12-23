import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Shelf(props) {
    const { nodes, materials } = useGLTF('/models/bar_shelves.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 1.016, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_1.geometry} material={materials.Body} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_2.geometry} material={materials.Glass} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_3.geometry} material={materials.Frame_Glass} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_4.geometry} material={materials.Lampu} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_5.geometry} material={materials.Frame_Lampu} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_6.geometry} material={materials.Handle} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_7.geometry} material={materials.Close} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_8.geometry} material={materials.Screw} />
                    <mesh castShadow receiveShadow geometry={nodes.defaultMaterial115_9.geometry} material={materials.Glide} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/bar_shelves.glb')
