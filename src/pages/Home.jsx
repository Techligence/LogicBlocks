import React from 'react';
import BlocklyComponent from '../components/BlocklyComponent';
import Canvas from '../components/Canvas';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>LogicBlocks</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <BlocklyComponent />
        <Canvas />
      </div>
    </div>
  );
};

export default Home;
