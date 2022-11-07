import './Contacts.scss';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import Social from './Social';
import Brackets from './Brackets';
import Overbracket from './Overbracket';
import useWindowDimensions from '../hooks/useWindowDimensions';


function Contacts() {

  const { height, width } = useWindowDimensions();
  const [position, setPosition] = useState([]);

  // useEffect(() => {
  //   setPosition([0,-0.5,0]);
  // }, []);

  setTimeout(() => {
    setPosition([0, -1, 0]);
  }, 500);

  let wh;
  let ww = {};


  if (width < 450) {
    ww['website'] = 180;
    ww['linkedin'] = 160;
    ww['twitter'] = 160;
    ww['instagram'] = 180;
    ww['email'] = 320;

  } else if (width < 800) {
    ww['website'] = 380;
    ww['linkedin'] = 320;
    ww['twitter'] = 360;
    ww['instagram'] = 380;
    ww['email'] = 720;

  } else {
    ww['website'] = 380;
    ww['linkedin'] = 320;
    ww['twitter'] = 360;
    ww['instagram'] = 380;
    ww['email'] = 720;
  }

  if (height < 450) {
    wh = 40
    ww['website'] = 260;
    ww['linkedin'] = 240;
    ww['twitter'] = 240;
    ww['instagram'] = 240;
    ww['email'] = 480;

  } else {
    wh = 60
  }

  return (
    // <div>

    <div className='contacts'>
      <div className='canvas website'>
        <p className='canvas-text'>
          Website
        </p>
        <Overbracket width={ww.website} height={wh} />
      </div>
      <div className='canvas linkedin'>
        <p className='canvas-text'>
          LinkedIn
        </p>
        <Overbracket width={ww.linkedin} height={wh} />
      </div>

      <span className='span-1'>
        veremenko
      </span>
      <span className='span-2'>
        @
      </span>
      <span className='span-3'>
        vladcoder
      </span>
      <span className='span-4'>
        .ca
      </span>

      <div className='canvas twitter'>
        <Brackets width={ww.twitter} height={wh} />
        <p className='canvas-text'>
          Twitter
        </p>
      </div>
      <div className='canvas insta'>
        <Brackets width={ww.instagram} height={wh} />
        <p className='canvas-text'>
          Instagram
        </p>
      </div>
      <div className='canvas e-mail'>
        <Brackets width={ww.email} height={wh} />
        <p className='canvas-text'>
          E-mail
        </p>
      </div>
      {/* <div className='dancer'>

        <Canvas
          camera={{ position: [2, 0, 12, 25], fov: 15 }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <Suspense
            fallback={null}
          >
            <Model
              position={position}
            />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div> */}

      <Social />
    </div>
  );
}

export default Contacts;