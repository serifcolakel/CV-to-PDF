import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/serifcolakel" className="text-3xl text-red-600 font-bold">
          Serif Colakel Resume
        </Link>
        <Link to="/create">Build Your Own Resume</Link>
      </nav>
    </div>
  );
}
