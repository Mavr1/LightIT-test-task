const data = localStorage.getItem('favorites');
const favorites = JSON.parse(data);

export const favoriteRemove = (id) => {
  const updatedFavorites = favorites.filter((item) => item !== id);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const favoriteAdd = (id, isAuth) => {
  if (!isAuth) {
    return alert('Please Log in or Register first');
  }

  if (favorites.length > 0) {
    const updatedFavorites = [...favorites, id];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } else {
    localStorage.setItem('favorites', JSON.stringify([id]));
  }
};
