import { Flex, Box } from '@react-three/flex';
import { motion } from "framer-motion-3d"
import { ReactLogo } from '../../meshes/ReactLogo';
import { Text3D } from '@react-three/drei';

export const PlaceHolder = () => {
    return <group rotation={[0, -0.5, -0]}>
    <mesh>
      <Flex centerAnchor
        justifyContent={'center'}
        alignItems={'center'}
        size={[10, 10, 10]}
        position={[0, 0, 0]}
      >
        <Box centerAnchor>
          <mesh>
            <ReactLogo />
            {/* <Helper type={BoxHelper} args={['royalblue']} /> */}
          </mesh>
        </Box>
        <Box centerAnchor marginTop={1}>
          <motion.mesh whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Text3D height={0.1} // This controls the depth of the text (thicker for heavier weight)
              bevelEnabled
              bevelThickness={0.2} // Adding bevel for a bold effect
              bevelSize={0.05}
              bevelSegments={10}
              position={[-7, 0, 0]} castShadow font={'/portfolio/assets/fonts/Raleway Thin_Regular.json'}>
              Hey! this is in progress
              <meshStandardMaterial color="white" />
            </Text3D>
            {/* <Helper type={BoxHelper} args={['royalblue']} /> */}
          </motion.mesh>
          <motion.mesh whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Text3D height={0.02} // This controls the depth of the text (thicker for heavier weight)
              bevelEnabled
              bevelThickness={0.08} // Adding bevel for a bold effect
              bevelSize={0.01}
              bevelSegments={5}
              position={[-7, -2, 0]} castShadow font={'/portfolio/assets/fonts/Raleway Thin_Regular.json'}>
              zoom                    pan
              <meshStandardMaterial color="white" />
            </Text3D>
            {/* <Helper type={BoxHelper} args={['royalblue']} /> */}
          </motion.mesh>
        </Box>
      </Flex>
      {/* <Helper type={BoxHelper} args={['royalblue']} /> */}
    </mesh>
  </group>
};