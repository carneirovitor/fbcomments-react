import React, { Component } from 'react';
import logo from '../assets/fblogo.png';

class Header extends Component {
  render() {
    return(
    <header>
     <nav>
       <img src={ logo }></img>
       <div>
         <span>My profile</span>
         <i className="material-icons">account_circle</i>
       </div>
    </nav>
    </header>
    );
  }
}

export default Header;