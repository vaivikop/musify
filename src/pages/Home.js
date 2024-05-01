import React, { useState } from 'react';
import SongCard from '../components/SongCard';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import SongPlayer from '../components/SongPlayer';
import PlayerBar from '../components/PlayerBar';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8), // Increase bottom margin to make space for PlayerBar
  },
}));

const Home = ({ songs }) => {
  const classes = useStyles();
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [songUrl, setSongUrl] = useState(null);

  const handlePlay = (downloadUrl) => {
    // Set the song URL to play
    setSongUrl(downloadUrl);
    // Set the currently playing song ID
    setCurrentlyPlaying(downloadUrl);
  };

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {songs && songs.length > 0 ? (
          songs.map((song) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>
              <SongCard song={song} onPlay={() => handlePlay(song.downloadUrl[0].url)} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No songs found</Typography>
          </Grid>
        )}
      </Grid>
      {/* Render the SongPlayer component with songUrl and PlayerBar */}
      {songUrl && <SongPlayer songUrl={songUrl} playerBar={<PlayerBar url={songUrl} />} />}
    </Container>
  );
};

export default Home;
