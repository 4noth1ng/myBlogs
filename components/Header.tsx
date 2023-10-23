import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import '../css/wave.css';
function Header() {
  return (
    <header
      style={{
        backgroundColor: '#99bee8',
        backgroundImage: 'linear-gradient(315deg,#99bee8 0%, #c2f1fd 100%)',
        paddingTop: '40px',
        height: '360px',
      }}
    >
      <div
        className="flex items-center justify-between mx-auto w-full"
        style={{ maxWidth: '1000px', height: '60px' }}
      >
        <div className="flex items-center flex-1 ">
          <Logo></Logo>
          <NavLinks></NavLinks>
        </div>
        <div className="w-24">
          <button>buttons</button>
        </div>
      </div>

      <svg
        width="100%"
        height="120px"
        style={{ transform: 'translateY(140px)' }}
        id="svg"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
        preserveAspectRatio="none meet"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 137.2,224.39999999999998 274.4,248.79999999999998 451,230 C 627.6,211.20000000000002 843.5999999999999,149.2 1015,137 C 1186.4,124.8 1313.2,162.4 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#ffffff"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </header>
  );
}

export default Header;
