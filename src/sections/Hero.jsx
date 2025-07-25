/*import Astronaut from "../components/Astronaut";*/
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      Hero
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0 "
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
              <OrbitControls enableZoom={false} />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(
        state.camera.position,
        [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
        0.5,
        delta
      );
    });
  }
};

export default Hero;
