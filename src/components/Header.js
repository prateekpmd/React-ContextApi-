import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import { useContext } from "react";
import { CartHolder } from "../Context";


const Header = () => {
  const { cart} = useContext(CartHolder);
  return (
    <div>
      <span className='header'> React API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <Link to='/'>Home Page</Link>
        </li>
        <li className="prod1">
          <Link to='/cart'>Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;