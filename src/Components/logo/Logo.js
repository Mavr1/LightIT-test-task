import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logotype } from '../../assets/logo-8.svg';

const Logo = () => {
  return (
    <Link to={'/'}>
      <Logotype width={250} />
    </Link>
  );
};

export default Logo;
