
import React from 'react';
import CityList from './components/CityList';
import OfferList from './components/OfferList';
import AddOffer from './components/AddOffer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="left-column">
        <CityList />
      </div>
      <div className="center-column">
        <OfferList />
      </div>
      <div className="right-column">
        <AddOffer />
      </div>
    </div>
  );
};

export default App;