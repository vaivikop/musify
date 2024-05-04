import React, { useState, useEffect } from 'react';
import Home from './Home';
import SongPlayer from './SongPlayer';
import { fetchSongs } from '../services/api';

const ParentComponent = ({ songs }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [songId, setSongId] = useState(null); // State to hold the current song ID

  useEffect(() => {
    const fetchSongId = async () => {
      try {
        console.log('Fetching song ID...');
        // Fetch the song ID from the API or any other source
        const songId = await fetchSongIdFromAPI(); // Implement this function to fetch the song ID
        console.log('Fetched song ID:', songId);
        setSongId(songId);
      } catch (error) {
        console.error('Error fetching song ID:', error);
      }
    };

    fetchSongId();
  }, []);

  return (
    <div>
      {/* Pass songs and handlePlay function as props to Home */}
      <Home songs={songs} onPlay={handlePlay} />
      {/* Pass songId as prop to SongPlayer */}
      {songId && <SongPlayer songId={songId} />}
    </div>
  );
};

export default ParentComponent;
