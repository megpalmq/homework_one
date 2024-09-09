"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <div>
        
      </div>
    </main>
  );
}
