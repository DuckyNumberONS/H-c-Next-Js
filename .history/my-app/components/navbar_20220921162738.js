import React from "react";
import Link from 
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Coder Wikipedia</a>
        </Link>
      </div>
      <div>
        <Link href="/my-app/pages/about.js">
          <a>About</a>
        </Link>
        <Link href="/my-app/pages/coders">
          <a>All Coders</a>
        </Link>
      </div>
    </nav>
  );
}
