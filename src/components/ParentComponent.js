import React, { useState } from 'react';
import Home from './Home';
import SongPlayer from './SongPlayer';
import { fetchSongs } from '../services/api';

const ParentComponent = ({ songs }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePlay = async (songId) => {
    try {
      console.log('Fetching song details for song ID:', songId);
      // Fetch the song details using the song ID
      const response = await fetch(`https://vaivikmusic.vercel.app/api/songs/${songId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch song details');
      }
      const data = await response.json();
      console.log('Song details fetched successfully:', data);
      // Set the currently playing song ID and song URL
      setCurrentlyPlaying({
        id: songId,
        url: data.data[0].url
      });
      console.log('Setting currently playing song:', songId);
    } catch (error) {
      console.error('Error fetching song:', error);
    }
  };

  return (
    <div>
      {/* Pass songs and handlePlay function as props to Home */}
      <Home songs={songs} onPlay={handlePlay} />
      {/* Pass currentlyPlaying as prop to SongPlayer */}
      {currentlyPlaying && <SongPlayer songId={currentlyPlaying.id} songUrl={currentlyPlaying.url} />}
    </div>
  );
};

export default ParentComponent;
