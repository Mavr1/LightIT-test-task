import React from 'react';
import {
  HomePage,
  LoginPage,
  ProductsPage,
  ProductPage,
  FavoritesPage,
} from './pages';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: () => <HomePage />,
    private: false,
    restricted: false,
    inNavmenu: true,
  },
  {
    path: '/products',
    label: 'Products',
    exact: false,
    component: () => <ProductsPage />,
    private: false,
    restricted: false,
    inNavmenu: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: false,
    component: () => <LoginPage />,
    private: false,
    restricted: true,
    inNavmenu: false,
  },
  {
    path: '/product',
    label: 'Product',
    exact: false,
    component: () => <ProductPage />,
    private: false,
    restricted: false,
    inNavmenu: false,
  },
  {
    path: '/favorites',
    label: 'Favorites',
    exact: false,
    component: () => <FavoritesPage />,
    private: true,
    restricted: false,
    inNavmenu: false,
  },
];
