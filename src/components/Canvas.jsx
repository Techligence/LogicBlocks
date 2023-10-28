import React from 'react';
import { Card, IconButton } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
import StopIcon from '@mui/icons-material/Stop';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

const Canvas = () => {
  return (
    <Card class="highlighted" style={{ position: 'relative', width: '700px', margin: '28px auto', height: '600px', overflow: 'hidden' }}>
      <h1 style={{ textAlign: 'center' ,fontSize: '14px'}}>Canvas</h1>
      <Draggable bounds="parent" defaultPosition={{x: 150, y: 100}}>
        <Resizable
          defaultSize={{
            width: '50%',
            height: '50%'
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `url(trial_sprite.png) center / contain no-repeat`,
            cursor: 'move'
          }}
          lockAspectRatio={true}
        >
          <div style={{ width: '100%', height: '100%' }} />
        </Resizable>
      </Draggable>

      <div style={{ 
        position: 'absolute', 
        bottom: 10, 
        right: 10, 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%'
      }}>
        <div>
          <IconButton aria-label="play" onClick={() => {}}>
            <FlagIcon style={{ color: 'green' }}/>
          </IconButton>
          <IconButton aria-label="stop" onClick={() => {}}>
            <StopIcon style={{ color: 'red' }}/>
          </IconButton>
          <IconButton aria-label="undo" onClick={() => {}}>
            <UndoIcon style={{ color: 'skyblue' }} />
          </IconButton>
          <IconButton aria-label="redo" onClick={() => {}}>
            <RedoIcon style={{ color: 'skyblue' }}/>
          </IconButton>
        </div>
        <div>
          <IconButton aria-label="zoom-in" onClick={() => {}}>
            <ZoomInIcon />
          </IconButton>
          <IconButton aria-label="zoom-out" onClick={() => {}}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton aria-label="fullscreen" onClick={() => {}}>
            <FullscreenIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default Canvas;
