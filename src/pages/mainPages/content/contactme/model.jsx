import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/eH2rvPhFgaadeC1g/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#d1d4eb"]} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Cube 4"
            geometry={nodes["Cube 4"].geometry}
            material={materials.clone4}
            castShadow
            receiveShadow
            position={[0, 0, 0]}
            scale={1}
          />
          <mesh
            name="Cube 3"
            geometry={nodes["Cube 3"].geometry}
            material={materials.clone3}
            castShadow
            receiveShadow
            position={[30.77, 2.15, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name="Cube 2"
            geometry={nodes["Cube 2"].geometry}
            material={materials.clone1}
            castShadow
            receiveShadow
            position={[0, 2.15, 0]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-500}
            shadow-camera-right={500}
            shadow-camera-top={500}
            shadow-camera-bottom={-500}
            position={[386.52, 300, 40.37]}
          />
          <OrthographicCamera
            name="1"
            makeDefault={true}
            far={10000}
            near={-50000}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}
