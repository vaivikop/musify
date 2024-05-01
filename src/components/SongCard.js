import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    borderRadius: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: '0px 8px 20px -6px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 200,
  },
  content: {
    padding: theme.spacing(2),
  },
}));

const SongCard = ({ song, onPlay }) => {
  const classes = useStyles();

  const handlePlay = () => {
    onPlay(song.id);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handlePlay}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={song.name}
          image={song.image[2].url}
          title={song.name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {song.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {song.primaryArtists}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Album: {song.album.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Artist: {song.artists.primary[0]?.name || ''}
          </Typography>
          {/* Add more details if this song is currently playing */}
          {song.isPlaying && (
            <div>
              <Typography variant="body2" color="textSecondary" component="p">
                Year: {song.year}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Duration: {song.duration} seconds
              </Typography>
              {/* Add more details as needed */}
            </div>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SongCard;
