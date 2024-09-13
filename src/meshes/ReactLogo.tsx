import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { motion } from "framer-motion-3d"

export const ReactLogo = () => {
    const { scene } = useLoader(GLTFLoader, '/portfolio/assets/react_logo/scene.gltf');

    return <motion.group
        whileHover={{ scale: 3 }}
        whileTap={{ scale: 0.9 }}
    >
        <primitive object={scene} />;
    </motion.group>
}
