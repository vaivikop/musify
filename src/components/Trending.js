import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import SongCard from './SongCard';
import { SongPlayer } from './SongPlayer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trending = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [songUrl, setSongUrl] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch('https://vaivikmusic.vercel.app/api/search/songs?query=Bollywood');
        if (!response.ok) {
          throw new Error('Failed to fetch songs');
        }
        const data = await response.json();
        setSongs(data.data.results);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSongSelect = (songId, songUrl) => {
    setSelectedSong(songId);
    setSongUrl(songUrl);
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: handleSlideChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Trending Bollywood Songs
      </Typography>
      <Slider {...settings} className="custom-slider">
        {songs.map((song) => (
          <div key={song.id}>
            <SongCard song={song} onPlay={handleSongSelect} />
          </div>
        ))}
      </Slider>
      <div className="dot-container">
        {Array.from({ length: songs.length }, (_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      {selectedSong && <SongPlayer songUrl={songUrl} />}
    </div>
  );
};

export default Trending;
