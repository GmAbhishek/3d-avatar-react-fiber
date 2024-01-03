import {
  ContactShadows,
  Environment,
  OrbitControls,
  Stars,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { suspend } from 'suspend-react'
const city = import('@pmndrs/assets/hdri/city.exr').then((module) => module.default)
export const Experience = () => {
  
  return (
    <>
      <OrbitControls />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment files={suspend(city)} />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar  />
       

      </group>
    </>
  );
};
