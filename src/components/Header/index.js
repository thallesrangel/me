import React from 'react'

import './style.css'

import Logo from './../../img/logo.jpg';

const Header = () => {
  return (
    <div className="text-center">
      <img className="logo img-fluid" src={Logo}/>
    </div>
  )
}

export default Header