import './Demo.scss';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';


function Demo() {

  const [position, setPosition] = useState([0, -0.9, 0]);
  const [counter, setCounter] = useState(1);

  const changePosition = () => {
    setPosition([0, position[1] - 0.1, 0]);
    console.log(position);
    setCounter(counter + 1);
    console.log(counter);
  }

  setTimeout(() => {
    setPosition([0,-1,0]);
  }, 500)

  return (
    <div className='demo'>
      <button
        onClick={ () => changePosition() }
      >
        Demo
      </button>
      {/* <div>

        <iframe src="https://resume.creddle.io/embed/fa0mvpkt2bk"
          width="1000" height="2200" seamless></iframe>
      </div> */}
      <a href="https://resume.creddle.io/resume/fa0mvpkt2bk">
        <p>

          Resume
        </p>
      </a>

      <Canvas
        camera={{ position: [2, 0, 12, 25], fov: 15 }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <Suspense
          fallback={null}
        >
          <Model
            // position={[0, -1, 0]}
            position={position}
          // position={new THREE.Vector3(1, 2, 3)}
          />

        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>

  );
}

export default Demo;