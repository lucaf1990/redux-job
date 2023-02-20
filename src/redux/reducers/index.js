import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../Action";

const initialState = {
  list: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,

        list: state.list.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
