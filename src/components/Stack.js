import './Stack.scss';
import { useState } from 'react';
import { SketchPicker, ChromePicker, HuePicker } from 'react-color';
import { ReactComponent as JSLogo } from '../assets/img/js-black-svgrepo-com.svg';
import { ReactComponent as Sass } from '../assets/img/sass-svgrepo-com.svg';
import { ReactComponent as AWS } from '../assets/img/aws-black-svgrepo-com.svg';
import { ReactComponent as FirebaseSvg } from "../assets/img/firebase-black-svgrepo-com.svg"; 
import { ReactComponent as Flutter } from "../assets/img/flutter-black-svgrepo-com.svg"; 
import { ReactComponent as Github } from "../assets/img/github-svgrepo-com.svg"; 
import { ReactComponent as Graphql } from "../assets/img/graphql-black-svgrepo-com.svg"; 
import { ReactComponent as Python } from "../assets/img/logo-python-svgrepo-com.svg"; 
import { ReactComponent as Mongo } from "../assets/img/mongodb-leaf-svgrepo-com.svg"; 
import { ReactComponent as MySQL } from "../assets/img/mysql-black2-svgrepo-com.svg"; 
import { ReactComponent as Node } from "../assets/img/nodejs-svgrepo-com.svg"; 
import { ReactComponent as PostgreSQL } from "../assets/img/postgresql-black-svgrepo-com.svg"; 
import { ReactComponent as PHP } from "../assets/img/php-svgrepo-com.svg"; 
import { ReactComponent as Rails } from "../assets/img/rails-black-svgrepo-com.svg"; 
import { ReactComponent as React } from "../assets/img/react-svgrepo-com.svg"; 
import { ReactComponent as Redux } from "../assets/img/redux-black-svgrepo-com.svg"; 
import { ReactComponent as Vue } from "../assets/img/vuejs-black-svgrepo-com.svg"; 
import { ReactComponent as WebRTC } from "../assets/img/webrtc-black-svgrepo-com.svg"; 


function Stack() {

  const [iconColor, setIconColor] = useState({
    background: 'orange',
  });

  const handleChangeComplete = (color) => {
    const newColor = {};
    newColor["background"] = color.hex;
    setIconColor(newColor);
  }

  const logoProps = {
    height: 70,
    width: 70,
    color: iconColor.background
  }

  return (
    <div className='stack'>
        {/* My Stack */}

        <div className='stack-icons'>
          {/* <SketchPicker
          color={iconColor.background}
          onChangeComplete={handleChangeComplete}
        /> */}
          <Github height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <JSLogo height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Sass height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <React height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Redux height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Vue height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Node height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Rails height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <PHP height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Python height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <AWS height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <FirebaseSvg height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Graphql height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Mongo height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <MySQL height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <PostgreSQL height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <Flutter height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          <WebRTC height={logoProps.height} width={logoProps.width} fill={logoProps.color} />
          
        </div>
        <div className='color-picker'>
            {/* picker */}
          {/* <div className='color-picker-label'> */}

          {/* </div> */}
          <HuePicker
            color={iconColor.background}
            onChangeComplete={handleChangeComplete}

          />
        </div>
    </div >
  );
}

export default Stack;