import React from 'react';
import Logo from './Logo';

function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        height: '230px',
        backgroundColor: '#99bee8',
        backgroundImage: 'linear-gradient(315deg,#99bee8 0%, #c2f1fd 100%)',
      }}
    >
      <div
        style={{
          paddingTop: '32px',
          paddingBottom: '32px',
          maxWidth: '1000px',
        }}
        className="w-full h-full mx-auto flex justify-between"
      >
        <div
          className="flex flex-col items-start justify-between"
          style={{ width: '300px' }}
        >
          <div className="">
            <Logo></Logo>
            <div className="mt-2 text-xs font-semibold">
              Thanks for reading!
            </div>
          </div>
          <span>🐮🐎🐮🐎</span>
        </div>
        <div
          className=" flex items-center justify-between"
          style={{ width: '500px' }}
        >
          <div className="h-full" style={{ width: '200px' }}>
            <p>Tutorials</p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
              <a href="">React</a>
            </div>
          </div>
          <div className="h-full">
            <p>Links</p>
            <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
              <a href="">小红书</a>
              <a href="">小红书</a>
              <a href="">小红书</a>
              <a href="">小红书</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
