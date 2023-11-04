// reducers/index.js
import cityReducer from './cityReducer';
import offerReducer from './offerReducer';
// Import and export reducers from other modules as needed

const rootReducer = combineReducers({
  city: cityReducer,
  offer: offerReducer,
  // Combine other module reducers here
});

export default rootReducer;