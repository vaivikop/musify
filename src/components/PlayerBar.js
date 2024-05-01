import React, { useState } from 'react';
import { IconButton, Slider, Typography } from '@material-ui/core';
import { PlayArrow, Pause, SkipPrevious, SkipNext, VolumeUp, VolumeOff } from '@material-ui/icons';

const PlayerBar = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div style={{ position: 'fixed', bottom: 70, left: 0, right: 0, backgroundColor: '#000', padding: '20px', color: '#fff', display: 'flex', alignItems: 'center', zIndex: 1000 }}>
      {/* Previous Button */}
      <IconButton>
        <SkipPrevious style={{ color: '#fff' }} />
      </IconButton>
      {/* Play/Pause Button */}
      <IconButton onClick={handlePlayPause}>
        {isPlaying ? <Pause style={{ color: '#fff' }} /> : <PlayArrow style={{ color: '#fff' }} />}
      </IconButton>
      {/* Next Button */}
      <IconButton>
        <SkipNext style={{ color: '#fff' }} />
      </IconButton>
      {/* Song Progress Bar */}
      <Slider style={{ flex: 1, margin: '0 16px' }} />
      {/* Volume Control */}
      <VolumeOff style={{ color: '#fff' }} />
      <Slider value={volume} onChange={handleVolumeChange} style={{ width: 100, margin: '0 8px' }} />
      <VolumeUp style={{ color: '#fff' }} />
    </div>
  );
};

export default PlayerBar;
