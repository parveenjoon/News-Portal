import React from 'react';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';
import Favorites from './components/Favorites';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React News Portal</h1>
        <SearchBar />
      </header>
      <main>
        <div className="articles-container">
          <ArticleList />
        </div>
        <div className="sidebar">
          <Favorites />
        </div>
      </main>
      <footer>
        <p>&copy; 2024 React News Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
