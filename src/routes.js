import React from 'react';
import {
  HomePage,
  LoginPage,
  ProductsPage,
  ProductPage,
  FavoritesPage,
} from './Pages';

export default [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    component: () => <HomePage />,
    private: false,
    restricted: false,
  },
  {
    path: '/login',
    label: 'LoginPage',
    exact: false,
    component: () => <LoginPage />,
    private: false,
    restricted: true,
  },
  {
    path: '/products',
    label: 'ProductsPage',
    exact: false,
    component: () => <ProductsPage />,
    private: false,
    restricted: false,
  },
  {
    path: '/product',
    label: 'ProductPage',
    exact: false,
    component: () => <ProductPage />,
    private: false,
    restricted: false,
  },
  {
    path: '/favorites',
    label: 'FavoritesPage',
    exact: false,
    component: () => <FavoritesPage />,
    private: true,
    restricted: false,
  },
];
