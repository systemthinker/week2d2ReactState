import React from 'react';

import './App.css';
import LikeCounter from './components/LikeCounter'
import AwesomeAnimals from './components/AwesomeAnimals'
import ArticleList from './components/ArticleList'


function App() {
  return (
    <main>
    
    <LikeCounter />
    <AwesomeAnimals />
    <ArticleList />
  </main>
  );
}

export default App;
