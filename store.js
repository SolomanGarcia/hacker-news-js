const initialState = {
  favorites: []
};

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    case "REMOVE_FAVORITE":
      const removedFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(
        (favorite) => favorite.id !== removedFavorite.id
      );
      return { favorites };
    default:
      return state;
  }
}

const action = { type: "ADD_FAVORITE", payload: { favorite: "story1" } };
