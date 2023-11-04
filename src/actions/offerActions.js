export const addOffer = (offer) => {
    return {
      type: 'ADD_OFFER',
      payload: offer,
    };
  };
  
  export const editOffer = (offer) => {
    return {
      type: 'EDIT_OFFER',
      payload: offer,
    };
  };
  
  export const deleteOffer = (offerId) => {
    return {
      type: 'DELETE_OFFER',
      payload: offerId,
    };
  };