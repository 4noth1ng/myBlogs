import React from 'react';

export default function NavLinks() {
  return (
    <nav className="flex-1 h-full">
      <ul className="flex items-center justify-between w-72 pl-20">
        <li>
          <div>
            <a href="#">Latest</a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">Posts</a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">About</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
