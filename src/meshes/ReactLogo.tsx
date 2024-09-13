import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export const ReactLogo = () => {
    const { scene } = useLoader(GLTFLoader, '/portfolio/assets/react_logo/scene.gltf');

    return <primitive object={scene} />;
}
