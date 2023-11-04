const initialState = {
    offers: [
      {
        id: 1,
        title: 'Sample Offer 1',
        description: 'This is a sample offer description 1.',
      },
      {
        id: 2,
        title: 'Sample Offer 2',
        description: 'This is a sample offer description 2.',
      },
    ],
  };
  
  const offerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_OFFER':
        return {
          ...state,
          offers: [...state.offers, action.payload],
        };
      case 'EDIT_OFFER':
        return {
          ...state,
          offers: state.offers.map((offer) =>
            offer.id === action.payload.id ? action.payload : offer
          ),
        };
      case 'DELETE_OFFER':
        return {
          ...state,
          offers: state.offers.filter((offer) => offer.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default offerReducer;