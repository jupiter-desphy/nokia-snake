import React from 'react';
import MenuSlide from '../components/MenuSlide';
import { Link } from 'react-router-dom';

export function Menu() {


  return (
    <>
      <Link to={`/snake1`}>
        <MenuSlide optionName=' Snake I' />
      </Link>
      <Link to={`/snake2`}>
        <MenuSlide optionName=' Snake II' />
      </Link>
      <MenuSlide optionName=' Settings' />
      <MenuSlide optionName=' Contact' />
      <a href="https://linkedin.com/in/jupiterdesphy" >
        <MenuSlide optionName=' LinkedIn' />
      </a>
      <a href="https://github.com/jupiter-desphy" >
        <MenuSlide optionName=' Github' />
      </a>
    </>
  )
}
