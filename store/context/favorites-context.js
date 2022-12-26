import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [ids, setIds] = useState([]);

  const addFavorite = (id) => {
    setIds((currentIds) => [...currentIds, id]);
  };

  const removeFavorite = (id) => {
    setIds((currentIds) => currentIds.filter((i) => i !== id));
  };

  const context = {
    ids,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
