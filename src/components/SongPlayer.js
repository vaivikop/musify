import React, { useState } from 'react';
import { makeStyles, Card, CardContent, Box, IconButton } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  playerBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    justifyContent: 'center', // Center the content horizontally
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  audioPlayer: {
    flexGrow: 1, // Expand to fill remaining space
  },
  iconButton: {
    color: 'black', // Set icon color to black
  },
}));

const SongPlayer = ({ songUrl, songId }) => {
  const classes = useStyles();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`https://vaivikmusic.vercel.app/api/songs/${songId}/suggestions`);
        if (!response.ok) {
          throw new Error('Failed to fetch suggestions');
        }
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    fetchSuggestions();
  }, [songId]);

  return (
    <div>
      {/* Audio Player styled as a play bar */}
      <Card className={classes.playerBar}>
        <CardContent>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Box className={classes.controls}>
              <IconButton className={classes.iconButton} onClick={() => console.log('Previous')}>
                <SkipPreviousIcon />
              </IconButton>
            </Box>
            <ReactAudioPlayer
              src={songUrl}
              controls
              autoPlay
              volume={0.5} // Set initial volume to 50%
              className={classes.audioPlayer} // Apply custom styles to the player
              controlsList="nodownload" // Disable download button
            />
            <Box className={classes.controls}>
              <IconButton className={classes.iconButton} onClick={() => console.log('Next')}>
                <SkipNextIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export { SongPlayer };
