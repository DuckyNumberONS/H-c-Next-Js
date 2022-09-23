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
        <Link>
        </Link>
        <a href="#">About</a>
        <a href="#">All Coders</a>
      </div>
    </nav>
  );
}
