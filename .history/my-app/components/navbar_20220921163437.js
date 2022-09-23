import React from "react";
import Link from "next/link"
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a>Coder Wikipedia</a>
        </Link>
      </div>
      <div>
        <Link href="/my-app/">
          <a>About</a>
        </Link>
        <Link href="/coders">
          <a>All Coders</a>
        </Link>
      </div>
    </nav>
  );
}
