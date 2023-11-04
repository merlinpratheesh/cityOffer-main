import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOffer, editOffer } from '../actions/offerActions';

const AddOffer = ({ cities, selectedCity, addOffer, editOffer }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCityInput, setSelectedCityInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedOfferId, setEditedOfferId] = useState(null);

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setSelectedCityInput('');
    setEditMode(false);
    setEditedOfferId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && selectedCity) {
      if (editMode) {
        editOffer({ id: editedOfferId, title, description, city: selectedCity });
      } else {
        addOffer({
          id: Date.now(),
          title,
          description,
          city: selectedCity,
        });
      }
      clearForm();
    }
  };

  return (
    <div>
      <h2>{editMode ? 'Edit Offer' : 'Add Offer'}</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedCityInput}
          onChange={(e) => setSelectedCityInput(e.target.value)}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{editMode ? 'Save Changes' : 'Add Offer'}</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: ['City A', 'City B', 'City C'], // Sample list of cities
  selectedCity: state.city.selectedCity,
});

export default connect(mapStateToProps, { addOffer, editOffer })(AddOffer);