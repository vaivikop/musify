import React from 'react';
import ReactPlayer from 'react-player';

const SongPlayer = ({ songUrl, playerBar }) => {
  return (
    <div>
      {/* Render the ReactPlayer component with songUrl */}
      <ReactPlayer url={songUrl} controls playing />
      {/* Render the PlayerBar component */}
      {playerBar}
    </div>
  );
};

export default SongPlayer;
