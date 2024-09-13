import { Canvas } from '@react-three/fiber';
import './App.css';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';// import { Text3D, Helper, OrbitControls } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
// import { BoxHelper } from 'three';
import { Suspense } from 'react';
import { LoadingUI } from './component/LoadingUI/LoadingUI';
import { PlaceHolder } from './component/Placeholder/Placeholder';

function App() {

  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <Suspense fallback={<LoadingUI />}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" intensity={1} position={[0, 0, 10]} />
        <PlaceHolder />
        <EffectComposer>
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Suspense>
      <OrbitControls />
      {/* <LoadingUI /> */}
    </Canvas>
  )
}

export default App
