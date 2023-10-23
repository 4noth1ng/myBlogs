'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { annotate } from 'rough-notation';
function textAnimation(e: HTMLElement) {
  const annotation = annotate(e, {
    type: 'underline',
  });
  annotation.hide();
  annotation.show();
}
function Logo() {
  const textRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const annotation = annotate(textRef.current as unknown as HTMLElement, {
      type: 'highlight',
      color: 'orange',
    });
    annotation.hide();
    annotation.show();
    setInterval(() => {
      annotation.hide();
      annotation.show();
    }, 100000);
  }, []);
  return (
    <div className="flex items-center">
      <span className="font-semibold" ref={textRef}>
        c2c's Blog
      </span>
      <Image
        src="/static/logo.png"
        alt="logo"
        width={40}
        height={40}
        className="ml-2 rounded-3xl	"
      ></Image>
    </div>
  );
}

export default Logo;
