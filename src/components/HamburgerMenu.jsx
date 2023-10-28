import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AnchorIcon from '@mui/icons-material/Anchor';
import Switch from '@mui/material/Switch';
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from '@mui/material';

const HamburgerMenu = () => {
  // State management for different features
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);
  const [camera, setCamera] = useState(false);
  const [mic, setMic] = useState(false);
  const [selected, setSelected] = useState(null);

  // Handlers
  const toggleMenu = () => setIsOpen(!isOpen);  // Toggle Drawer
  const closeMenu = () => setIsOpen(false);      // Close Drawer
  const handleMode = (e, newMode) => setMode(newMode); // Set mode
  const toggleCamera = () => setCamera(!camera); // Toggle camera
  const toggleMic = () => setMic(!mic);          // Toggle mic

  // Set selected item and reset after 500ms
  const handleSelect = (item) => {
    setSelected(item);
    setTimeout(() => setSelected(null), 500);
  };

  return (
    <div>
      {/* Trigger Drawer */}
      <Button onClick={toggleMenu} sx={{ padding: '16px', minWidth: 'unset' }}>
        <AnchorIcon sx={{ fontSize: '50px' }} />
      </Button>
      
      {/* Drawer contents */}
      <Drawer anchor="right" open={isOpen} onClose={closeMenu}>
        <Box sx={{ width: 300 }}>
          {/* Main List */}
          <List>
            {['Scenes', 'Background'].map((text) => (
              <ListItem button key={text} onClick={() => handleSelect(text)}>
                {/* Conditional styling for selected items */}
                <ListItemText primary={text} />
              </ListItem>
            ))}

            {/* Camera and Mic Toggle */}
            <ListItem>
                <ListItemIcon>
                    <CameraAltIcon color={camera ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Camera" />
                <Switch
                    edge="end"
                    onChange={toggleCamera}
                    checked={camera}
                    inputProps={{ 'aria-labelledby': 'switch-camera' }}
                />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <MicIcon color={mic ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText primary="Mic" />
                <Switch
                    edge="end"
                    onChange={toggleMic}
                    checked={mic}
                    inputProps={{ 'aria-labelledby': 'switch-mic' }}
                />
            </ListItem>

            {/* Mode Selection */}
            <ListItem>
              <ToggleButtonGroup value={mode} exclusive onChange={handleMode}>
                <ToggleButton value="Hardware">Hardware</ToggleButton>
                <ToggleButton value="Software">Software</ToggleButton>
                <ToggleButton value="Lab">Lab</ToggleButton>
              </ToggleButtonGroup>
            </ListItem>
          </List>

          {/* Footer List */}
          <List sx={{ marginTop: 'auto' }}>
            <ListItem button onClick={() => handleSelect("More options")}>
              <ListItemText primary="More options" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
