import React from 'react'
import { useGLTF } from '@react-three/drei'

function Planter(props) {
    const { nodes, materials } = useGLTF('/models/planter.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.524, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <group scale={100}>
                        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.863}>
                            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                                <group position={[4.607, 54.241, -4.895]}>
                                    <mesh castShadow receiveShadow geometry={nodes.Leaves_Mat_1_0_1.geometry} material={materials.Mat_1} />
                                    <mesh castShadow receiveShadow geometry={nodes.Leaves_Mat_1_0_2.geometry} material={materials.Mat_2} />
                                    <mesh castShadow receiveShadow geometry={nodes.Leaves_Mat_1_0_3.geometry} material={materials.material} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/planter.glb')
export default Planter
