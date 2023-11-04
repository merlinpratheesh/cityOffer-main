import React from 'react';
import { connect } from 'react-redux';
import { deleteOffer } from '../actions/offerActions';

const OfferList = ({ selectedCity, offers, deleteOffer }) => {
  return (
    <div>
      <h2>Offer List for {selectedCity}</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.title}</strong>
            <p>{offer.description}</p>
            <button onClick={() => deleteOffer(offer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.city.selectedCity,
  offers: state.offer.offers,
});

export default connect(mapStateToProps, { deleteOffer })(OfferList);