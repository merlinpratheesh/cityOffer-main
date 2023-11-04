import React from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../actions/cityActions';

const CityList = ({ cities, selectCity }) => {
  return (
    <div>
      <h2>City List</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index} onClick={() => selectCity(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: ['City A', 'City B', 'City C'], // Sample list of cities
});

export default connect(mapStateToProps, { selectCity })(CityList);