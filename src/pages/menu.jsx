import React from 'react';
import MenuSlide from '../components/MenuOption';
import LiteSlide from '../components/LiteSlide';
import { Link } from 'react-router-dom';

export function Menu() {


  return (
    <div className='starting-menu second-column'>
      <LiteSlide optionName='Menu' isHeading={true}/>
      <ul>
      <Link to={`/snake1`}>
        <MenuSlide optionName=' Snake I' />
      </Link>
      <Link to={`/snake2`}>
        <MenuSlide optionName=' Snake II' />
      </Link>
      <a href="https://linkedin.com/in/jupiterdesphy" >
        <MenuSlide optionName=' LinkedIn' />
      </a>
      <a href="https://github.com/jupiter-desphy" >
        <MenuSlide optionName=' Github' />
      </a>
      {/* <MenuSlide optionName=' Website' />
      <MenuSlide optionName=' Contact' /> */}
      </ul>
      {/* <MenuHeader optionName=' ABCDEFGHIJKLM' />
      <MenuHeader optionName=' NOPQRSTUVWXYZ' />
      <MenuHeader optionName=' abcdefghijklm' />
      <MenuHeader optionName=' nopqrstuvwxyz' />
      <MenuHeader optionName=' 0123456789' />
      <MenuSlide optionName=' ABCDEFGHIJKLM' />
      <MenuSlide optionName=' NOPQRSTUVWXYZ' />
      <MenuSlide optionName=' abcdefghijklm' />
      <MenuSlide optionName=' nopqrstuvwxyz' />
      <MenuSlide optionName=' 0123456789' /> */}
    </div>
  )
}
