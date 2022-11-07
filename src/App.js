import React from 'react';
import {hot} from 'react-hot-loader';

import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Stack from './components/Stack';
import './components/Mobile.scss';

const App = () => {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Stack/> */}
    </div>
  );
}

export default hot(module)(App);
