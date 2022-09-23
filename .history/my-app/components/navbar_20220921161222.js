import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div>
        <Link>
          <a href="#">Coder Wikipedia</a>
        </Link>
      </div>
      <div>
        <a href="#">About</a>
        <a href="#">All Coders</a>
      </div>
    </nav>
  );
}
