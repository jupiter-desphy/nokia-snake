import React from 'react';
import MenuSlide from '../components/MenuSlide';
import { Link } from 'react-router-dom';

export function Menu() {


  return (
    <>
      <MenuSlide optionName=' Continue' />
      <MenuSlide optionName=' New game' />
      <Link to={`/snake1`}>
        <MenuSlide optionName=' Snake I' />
      </Link>
      <Link to={`/snake2`}>
      <MenuSlide optionName=' Snake II' />
      </Link>
    </>
  )
}
