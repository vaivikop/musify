import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SearchResults from './pages/SearchResults'; // Import the SearchResults component

function App() {
  const [songs, setSongs] = useState([]);

  const handleSearch = (searchResults) => {
    setSongs(searchResults); // Update the songs state with the search results
  };

  return (
    <Router>
      <div>
        <Header onSearch={handleSearch} /> {/* Pass the handleSearch function */}
        <Routes>
          <Route path="/" element={<Home songs={songs} />} />
          <Route path="/search" element={<SearchResults songs={songs} />} /> {/* Define a route for the search results page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
