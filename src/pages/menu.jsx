import React from 'react';
import MenuSlide from '../components/MenuSlide';
import MenuHeader from '../components/MenuHeader';
import { Link } from 'react-router-dom';

export function Menu() {


  return (
    <>
      <MenuHeader optionName=' ABCDEFGHIJKLM' />
      <MenuHeader optionName=' NOPQRSTUVWXYZ' />
      <MenuHeader optionName=' abcdefghijklm' />
      <MenuHeader optionName=' nopqrstuvwxyz' />
      <MenuSlide optionName=' ABCDEFGHIJKLM' />
      <MenuSlide optionName=' NOPQRSTUVWXYZ' />
      <MenuSlide optionName=' abcdefghijklm' />
      <MenuSlide optionName=' nopqrstuvwxyz' />
      <Link to={`/snake1`}>
        <MenuSlide optionName=' Snake I' />
      </Link>
      <Link to={`/snake2`}>
        <MenuSlide optionName=' Snake II' />
      </Link>
      <MenuSlide optionName=' Website' />
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