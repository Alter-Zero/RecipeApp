import React from 'react';
import './App.scss';
import Header from './components/Header/index';
import Search from './components/Search/index';
import Body from './components/Results/Body';
import { GlobalProvider } from './components/Context/useSearchData';

function App() {

  return (
    <GlobalProvider>
      <Header />
      <Search />
      <Body />
    </GlobalProvider>
  );
}

export default App;
