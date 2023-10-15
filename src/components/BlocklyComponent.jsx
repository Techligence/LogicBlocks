// src/BlocklyComponent.js
import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';

const BlocklyComponent = () => {
  const blocklyRef = useRef(null); // Create a ref object
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize Blockly only if it hasn't been initialized yet
    if (blocklyRef.current === null) {
      Blockly.inject('blocklyDiv', {
        toolbox: `
          <xml id="toolbox" style="display: none">
            <block type="controls_if"></block>
          </xml>
        `,
      });
      blocklyRef.current = true;  // Update the ref to indicate that Blockly has been initialized
    }

    // Initialize Canvas for Sprites
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div id="blocklyDiv" style={{ height: '480px', width: '600px' }}></div>
      <canvas ref={canvasRef} width={600} height={480} style={{ border: '1px solid black' }}></canvas>
    </div>
  );
};

export default BlocklyComponent;
