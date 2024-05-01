// api.js

const BASE_URL = 'https://vaivikmusic.vercel.app/api';

export const fetchSongs = async (query) => {
  const response = await fetch(`${BASE_URL}/search/songs?query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.data.results; // Return the array of song objects
};
