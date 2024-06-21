import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatch action to fetch articles based on search term (not implemented here)
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
