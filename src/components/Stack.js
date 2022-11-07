import './Stack.scss';
import React, { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { SketchPicker, ChromePicker, HuePicker } from 'react-color';
import { ReactComponent as JSLogo } from '../assets/svg/js-black-svgrepo-com.svg';
import { ReactComponent as Sass } from '../assets/svg/sass-svgrepo-com.svg';
import { ReactComponent as AWS } from '../assets/svg/aws-black-svgrepo-com.svg';
import { ReactComponent as FirebaseSvg } from "../assets/svg/firebase-black-svgrepo-com.svg"; 
import { ReactComponent as Flutter } from "../assets/svg/flutter-black-svgrepo-com.svg"; 
import { ReactComponent as Github } from "../assets/svg/github-svgrepo-com.svg"; 
import { ReactComponent as Graphql } from "../assets/svg/graphql-black-svgrepo-com.svg"; 
import { ReactComponent as Python } from "../assets/svg/logo-python-svgrepo-com.svg"; 
import { ReactComponent as Mongo } from "../assets/svg/mongodb-leaf-svgrepo-com.svg"; 
import { ReactComponent as MySQL } from "../assets/svg/mysql-black2-svgrepo-com.svg"; 
import { ReactComponent as Node } from "../assets/svg/nodejs-svgrepo-com.svg"; 
import { ReactComponent as PostgreSQL } from "../assets/svg/postgresql-black-svgrepo-com.svg"; 
import { ReactComponent as PHP } from "../assets/svg/php-svgrepo-com.svg"; 
import { ReactComponent as Rails } from "../assets/svg/rails-black-svgrepo-com.svg"; 
import { ReactComponent as ReactJS } from "../assets/svg/react-svgrepo-com.svg"; 
import { ReactComponent as Redux } from "../assets/svg/redux-black-svgrepo-com.svg"; 
import { ReactComponent as Vue } from "../assets/svg/vuejs-black-svgrepo-com.svg"; 
import { ReactComponent as WebRTC } from "../assets/svg/webrtc-black-svgrepo-com.svg"; 

function Stack() {

  const { height, width } = useWindowDimensions();


  const [iconColor, setIconColor] = useState({
    background: 'orange',
  });

  const handleChangeComplete = (color) => {
    const newColor = {};
    newColor["background"] = color.hex;
    setIconColor(newColor);
  }

  const handleChange = (color) => {
    const newColor = {};
    newColor["background"] = color.hex;
    setIconColor(newColor);
  }

  
  const logoProps = {
    height: (width < 380) ? 50 : 100,
    width: (width < 380) ? 50 : 100,
    color: iconColor.background,
    margin: "auto",
  }
  
  // Try to import images instead of components from svg ...
  // const icons = [
  //   "js",
  //   "sass",
  // ];

  // const iconsToRender = icons.map((name, i) => {

  //   // <dangerouslySetInnerHTML={{__html: string}}/>
    
  //   return (
  //     <div key={i} className='stack-icon'>
  //       <Icon 
  //       name={name}
  //       logoProps={logoProps}
  //       />
  //     </div>
  //   )
  // })

  // ... finish trying svg
  
  return (
    <div className='stack'>

        <div className='stack-icons'>
          <Github height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <JSLogo height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <Sass height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <ReactJS height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <Redux height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <Vue height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Node height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Rails height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <PHP height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <Python height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <AWS height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          <FirebaseSvg height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          <Graphql height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          <Mongo height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <MySQL height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          <PostgreSQL height={logoProps.height} width={logoProps.width} viewBox={'0 0 32 32'} fill={logoProps.color} />
          <Flutter height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          <WebRTC height={logoProps.height} width={logoProps.width} viewBox={'0 0 24 24'} fill={logoProps.color} />
          
        </div>
        <div className='color-picker mobile'>
          <HuePicker
            color={iconColor.background}
            onChange={handleChange}
            onChangeComplete={handleChangeComplete}

          />
        </div>
    </div >
  );
}

export default Stack;