import Link from 'next/link';
import React from 'react';
import { Popover } from 'antd';

const postsPopContent = <div>123</div>;

export default function NavLinks() {
  return (
    <nav className="flex-1 h-full">
      <ul className="flex items-center justify-between w-72 pl-20">
        <li>
          <Link href="#">Latest</Link>
        </li>
        <li>
          <Popover content={postsPopContent}>
            <Link href="#">
              {/* dialog */}
              Posts
            </Link>
          </Popover>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
    </nav>
  );
}
