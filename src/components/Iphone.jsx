
import React, { Suspense, useRef } from 'react'
import { Environment, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Loading from './Loading';



function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/iphone_12_pro/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -2.59, 2.42]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh geometry={nodes.Camera1_PacificBlue_0.geometry} material={nodes.Camera1_PacificBlue_0.material} />
            <mesh geometry={nodes.Camera1_GrayGlossy_0.geometry} material={nodes.Camera1_GrayGlossy_0.material} />
            <mesh geometry={nodes.Camera1_FrontCamera_0.geometry} material={nodes.Camera1_FrontCamera_0.material} />
            <mesh geometry={nodes.Camera1_Blackmatte_0.geometry} material={nodes.Camera1_Blackmatte_0.material} />
            <mesh geometry={nodes.Camera1_Cameralens_0.geometry} material={nodes.Camera1_Cameralens_0.material} />
            <mesh geometry={nodes.Camera1_Glass_0.geometry} material={nodes.Camera1_Glass_0.material} />
            <mesh geometry={nodes.Flash_Flash2_0.geometry} material={materials.Flash2} />
            <mesh geometry={nodes.Flash_Flash_0.geometry} material={materials.Flash} />
            <mesh geometry={nodes.LiDar_LiDar__0.geometry} material={materials.LiDar} />
            <mesh
              geometry={nodes.FrontCamera_Cameralens_0.geometry}
              material={nodes.FrontCamera_Cameralens_0.material}
            />
            <mesh
              geometry={nodes.FrontCamera_FrontCamera_0.geometry}
              material={nodes.FrontCamera_FrontCamera_0.material}
            />
            <mesh geometry={nodes.FrontCamera_Glass_0.geometry} material={nodes.FrontCamera_Glass_0.material} />
            <mesh geometry={nodes.FrontMic_GrayGlossy2_0.geometry} material={nodes.FrontMic_GrayGlossy2_0.material} />
            <mesh
              geometry={nodes.FrontMic_MicrophoneSpeaker_0.geometry}
              material={nodes.FrontMic_MicrophoneSpeaker_0.material}
            />
            <mesh geometry={nodes.FrontCamera001_bezel001_0.geometry} material={materials['bezel.001']} />
            <mesh geometry={nodes.Bezel_bezel_0.geometry} material={materials.bezel} />
            <mesh geometry={nodes.Camera3_PacificBlue_0.geometry} material={nodes.Camera3_PacificBlue_0.material} />
            <mesh geometry={nodes.Camera3_GrayGlossy_0.geometry} material={nodes.Camera3_GrayGlossy_0.material} />
            <mesh geometry={nodes.Camera3_FrontCamera_0.geometry} material={nodes.Camera3_FrontCamera_0.material} />
            <mesh geometry={nodes.Camera3_Blackmatte_0.geometry} material={nodes.Camera3_Blackmatte_0.material} />
            <mesh geometry={nodes.Camera3_Cameralens_0.geometry} material={nodes.Camera3_Cameralens_0.material} />
            <mesh geometry={nodes.Camera3_Glass_0.geometry} material={nodes.Camera3_Glass_0.material} />
            <mesh geometry={nodes.Camera2_PacificBlue_0.geometry} material={nodes.Camera2_PacificBlue_0.material} />
            <mesh geometry={nodes.Camera2_GrayGlossy_0.geometry} material={nodes.Camera2_GrayGlossy_0.material} />
            <mesh geometry={nodes.Camera2_FrontCamera_0.geometry} material={nodes.Camera2_FrontCamera_0.material} />
            <mesh geometry={nodes.Camera2_Blackmatte_0.geometry} material={nodes.Camera2_Blackmatte_0.material} />
            <mesh geometry={nodes.Camera2_Cameralens_0.geometry} material={nodes.Camera2_Cameralens_0.material} />
            <mesh geometry={nodes.Camera2_Glass_0.geometry} material={nodes.Camera2_Glass_0.material} />
            <mesh geometry={nodes.Screen_Wallpaper_0.geometry} material={materials.Wallpaper} />
            <mesh geometry={nodes.Apple_Logo_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.CameraModule001_Glass_0.geometry} material={nodes.CameraModule001_Glass_0.material} />
            <mesh
              geometry={nodes.CameraModule002_MicrophoneSpeaker_0.geometry}
              material={nodes.CameraModule002_MicrophoneSpeaker_0.material}
            />
            <mesh geometry={nodes.iPhone12_Pro_Body_0.geometry} material={materials.Body} />
            <mesh
              geometry={nodes.VolumeButton_BodyFrame_0.geometry}
              material={nodes.VolumeButton_BodyFrame_0.material}
            />
            <mesh geometry={nodes.PowerButton_BodyFrame_0.geometry} material={nodes.PowerButton_BodyFrame_0.material} />
            <mesh geometry={nodes.Port_Blackmatte_0.geometry} material={nodes.Port_Blackmatte_0.material} />
            <mesh geometry={nodes.Port_BodyFrame_0.geometry} material={nodes.Port_BodyFrame_0.material} />
            <mesh geometry={nodes.SimTray_Blackmatte_0.geometry} material={nodes.SimTray_Blackmatte_0.material} />
            <mesh geometry={nodes.SimTray_BodyFrame_0.geometry} material={nodes.SimTray_BodyFrame_0.material} />
            <mesh geometry={nodes.MuteButton_BodyFrame_0.geometry} material={nodes.MuteButton_BodyFrame_0.material} />
            <mesh
              geometry={nodes.iPhone__12_Pro_BodyFrame_0.geometry}
              material={nodes.iPhone__12_Pro_BodyFrame_0.material}
            />
            <mesh
              geometry={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.geometry}
              material={nodes.iPhone__12_Pro_MicrophoneSpeaker_0.material}
            />
            <mesh
              geometry={nodes.iPhone__12_Pro_GrayGlossy2_0.geometry}
              material={nodes.iPhone__12_Pro_GrayGlossy2_0.material}
            />
            <mesh geometry={nodes.iPhone__12_Pro_Antenna_0.geometry} material={materials.Antenna} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/iphone_12_pro/scene.gltf')


extend({ OrbitControls });

const CameraControls = () => {
  
  const {
    camera,
    gl: { domElement },
  } = useThree();


  camera.position.z = 150
   camera.position.y = 0

  
  const controls = useRef();
  
  
  
  useFrame(() => {
  
  controls.current.update()
  
  });
  

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
    />
  );
};

const Iphone = () => {

  return (
      <Suspense fallback={<Loading />}>
    <Canvas>
      <ambientLight/>
      <pointLight position={[4, 50, 10]} intensity={4}/>
      <pointLight position={[50, 50, 5]} intensity={10}/>
      <Environment background={true} files={'/ulmer.hdr'}/>
      <CameraControls />
      <Model position={[0, -35, 0]}/>
    </Canvas>
      </Suspense>
  )
}

export default Iphone