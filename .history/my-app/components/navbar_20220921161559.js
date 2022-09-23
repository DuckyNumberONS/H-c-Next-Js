import React from "react";
import Link from "next/link";
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
          <a href="#">About</a>
        </Link>
        <Link href="/my-app/pages/coders">
          <a href="#">All Coders</a>
        </Link>
      </div>
    </nav>
  );
}
