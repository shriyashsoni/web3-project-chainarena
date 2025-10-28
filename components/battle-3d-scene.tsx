"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera, Float, Sparkles, Text3D } from "@react-three/drei"
import { useRef, useState } from "react"
import type * as THREE from "three"

function BattleCharacter({
  position,
  color,
  rotation,
}: { position: [number, number, number]; color: string; rotation: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation + Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <capsuleGeometry args={[0.5, 1, 16, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Head */}
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Weapon */}
        <mesh position={[0.7, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  )
}

function Arena() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group>
      {/* Arena Platform */}
      <mesh ref={meshRef} position={[0, -1, 0]} receiveShadow>
        <cylinderGeometry args={[4, 4, 0.3, 32]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#4a148c"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Arena Ring */}
      <mesh position={[0, -0.8, 0]}>
        <torusGeometry args={[4, 0.1, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} metalness={1} roughness={0} />
      </mesh>
    </group>
  )
}

function ParticleEffects() {
  return (
    <>
      <Sparkles count={100} scale={10} size={2} speed={0.4} color="#8b5cf6" />
      <Sparkles count={50} scale={8} size={3} speed={0.3} color="#06b6d4" position={[-2, 0, 0]} />
      <Sparkles count={50} scale={8} size={3} speed={0.3} color="#ec4899" position={[2, 0, 0]} />
    </>
  )
}

function NFTPopup({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime
    }
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} metalness={1} roughness={0} />
      </mesh>
    </Float>
  )
}

export function Battle3DScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, 10, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, 10, -5]} intensity={0.5} color="#06b6d4" />

        {/* Environment */}
        <Environment preset="night" />

        {/* Scene Elements */}
        <Arena />
        <BattleCharacter position={[-2, 0, 0]} color="#06b6d4" rotation={Math.PI / 4} />
        <BattleCharacter position={[2, 0, 0]} color="#ec4899" rotation={-Math.PI / 4} />
        <ParticleEffects />
        <NFTPopup position={[0, 3, 0]} />

        {/* VS Text */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.2} position={[-0.6, 2, 0]} rotation={[0, 0, 0]}>
            VS
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#8b5cf6"
              emissiveIntensity={0.5}
              metalness={1}
              roughness={0}
            />
          </Text3D>
        </Float>
      </Canvas>
    </div>
  )
}
