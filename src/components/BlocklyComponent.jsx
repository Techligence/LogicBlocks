import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';

const BlocklyComponent = () => {
  const blocklyRef = useRef(null); // Create a ref object

  useEffect(() => {
    // Initialize Blockly only if it hasn't been initialized yet
    if (blocklyRef.current === null) {
      Blockly.inject('blocklyDiv', {
        toolbox: `
          <xml id="toolbox" style="display: none">
            <category name="Logic" cssclass="logicCategory">
              <block type="controls_if"></block>
            </category>
            <category name="Loops" colour="#5C81A6" categorystyle="loop_category">
              <block type="controls_repeat_ext">
                <value name="TIMES">
                  <shadow type="math_number">
                    <field name="NUM">10</field>
                  </shadow>
                </value>
              </block>
              <block type="controls_whileUntil"></block>
              <block type="controls_for"></block>  
            </category>
            <category name="Math" colour="#5C81A6" categorystyle="math_category">
              <block type="math_number"></block>
              <block type="math_arithmetic"></block>
              <block type="math_random_int">
                <value name="FROM">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
                <value name="TO">
                  <shadow type="math_number">
                    <field name="NUM">100</field>
                  </shadow>
                </value>
              </block>
            </category>
            <category name="Text" colour="#5C81A6" categorystyle="text_category">
              <block type="text"></block>
              <block type="text_print"></block> 
            </category>  
          </xml>
        `,
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          pinch: true,
        },
        grid:
         {spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true},
        trashcan: false,
        move: {
          scrollbars: true,
          drag: true,
          wheel: true,
        },
      });
      blocklyRef.current = true;  // Update the ref to indicate that Blockly has been initialized
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '480px' }}>
        <h1 style={{ display: 'inline-block', fontSize: '14px', marginRight: '500px' }}>Blockly Toolbox</h1>
        <h1 style={{ display: 'inline-block', fontSize: '14px' }}>Blockly Workspace</h1>
      <div class="highlighted"  id="blocklyDiv" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default BlocklyComponent;
