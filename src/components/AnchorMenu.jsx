import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AnchorIcon from '@mui/icons-material/Anchor';
import {
  Button,
  Menu,
  MenuItem,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const AnchorMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mode, setMode] = useState(null);
  const [camera, setCamera] = useState(false);
  const [mic, setMic] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        <AnchorIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '35ch',
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <CameraAltIcon color={camera ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Camera" />
          <Switch checked={camera} onChange={() => setCamera(!camera)} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MicIcon color={mic ? 'primary' : 'inherit'} />
          </ListItemIcon>
          <ListItemText primary="Mic" />
          <Switch checked={mic} onChange={() => setMic(!mic)} />
        </MenuItem>
        <MenuItem>
          <ToggleButtonGroup value={mode} exclusive onChange={(e, newMode) => setMode(newMode)}>
            <ToggleButton value="Hardware">Hardware</ToggleButton>
            <ToggleButton value="Software">Software</ToggleButton>
            <ToggleButton value="Lab">Lab</ToggleButton>
          </ToggleButtonGroup>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AnchorMenu;
