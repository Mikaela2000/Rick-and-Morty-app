import { orderCards } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      
      };
        
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
            allCharacters: state.allCharacters.filter(
      (char) => char.id !== Number(action.payload)
    ),
      };
    case "FILTER":
      const filterChars = state.allCharacters.filter(
        (char) => char.gender === action.payload)
        console.log(filterChars)
      return {
        ...state,
        myFavorites: filterChars,
      
      };
    case "ORDER":

      const orderChars = state.myFavorites.slice().sort((a, b) => { //fsdf
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: orderChars,
      };

    case "SHOW_ALL":
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return { ...state };
  }
};

export default reducer;
