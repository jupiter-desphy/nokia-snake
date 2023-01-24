import React from 'react';
import MenuOption from '../components/MenuOption';
import LiteSlide from '../components/LiteSlide';
import { Link } from 'react-router-dom';

export function Menu() {


  return (
    <div>
      <LiteSlide optionName='Menu' isHeading={true}/>
      <ul>
      <Link to={`/snake1`}>
        <MenuOption optionName=' Snake I' />
      </Link>
      <Link to={`/snake2`}>
        <MenuOption optionName=' Snake II' />
      </Link>
      <a href="https://linkedin.com/in/jupiterdesphy" >
        <MenuOption optionName=' LinkedIn' />
      </a>
      <a href="https://github.com/jupiter-desphy" >
        <MenuOption optionName=' Github' />
      </a>
      {/* <MenuSlide optionName=' Website' />
      <MenuSlide optionName=' Contact' /> */}
      </ul>
      {/* <LiteSlide optionName=' ABCDEFGHIJKLM' />
      <LiteSlide optionName=' NOPQRSTUVWXYZ' />
      <LiteSlide optionName=' abcdefghijklm' />
      <LiteSlide optionName=' nopqrstuvwxyz' />
      <LiteSlide optionName=' 0123456789' />
      <MenuSlide optionName='ABCDEFGHIJKLM' />
      <MenuSlide optionName='NOPQRSTUVWXYZ' />
      <MenuSlide optionName='abcdefghijklm' />
      <MenuSlide optionName='nopqrstuvwxyz' />
      <MenuSlide optionName='0123456789' /> */}
    </div>
  )
}
