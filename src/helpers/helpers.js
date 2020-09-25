export const checkIsFavorite = (id, isAuth) => {
  if (!isAuth) {
    return false;
  }

  const data = localStorage.getItem('favorites');
  const favorites = JSON.parse(data);

  if (favorites?.length > 0) {
    const isFavorite = favorites.findIndex((item) => {
      return item === id;
    });

    return isFavorite === -1 ? false : true;
  } else return false;
};

export const removeFavorites = (id, setIsFavorite) => {
  const data = localStorage.getItem('favorites');
  const favorites = JSON.parse(data);

  const updatedFavorites = favorites.filter((item) => item !== id);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  setIsFavorite(false);
};

export const addFavorites = (id, isAuth, setIsFavorite) => {
  const data = localStorage.getItem('favorites');
  const favorites = JSON.parse(data);

  if (!isAuth) {
    return alert('Please Log in or Register first');
  }

  if (favorites?.length > 0) {
    const updatedFavorites = [...favorites, id];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(true);
  } else {
    localStorage.setItem('favorites', JSON.stringify([id]));
    setIsFavorite(true);
  }
};

export const sortFavorites = (products) => {
  const data = localStorage.getItem('favorites');
  const favorites = JSON.parse(data);

  if (favorites?.length > 0) {
    const favoriteProducts = favorites.reduce((acc, id) => {
      acc = [...acc, products.find((item) => item.id.toString() === id)];
      return acc;
    }, []);

    return favoriteProducts;
  } else return [];
};
