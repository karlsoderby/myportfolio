import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./about";
import { Projects } from "./components/projects";
import { Child } from "./components/child";
import "./tailwind.css"; // Assuming Tailwind is installed and configured properly

import Kerrado from './assets/kerrado.png';
import Arduhome from './assets/arduhome.png'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="py-8 flex justify-center items-center relative font-afacad-flux">
        <NavLink
          to="/"
          className="logo absolute left-10 text-black text-2xl font-bold ml-10"
        >
          MyPortfolio
        </NavLink>
        <ul className="nav-links flex gap-8 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black"
                  : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black"
                  : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow p-8 bg-white mx-auto max-w-screen-xl w-[90%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-black text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-afacad-flux mb-4">
        Welcome to My Portfolio
      </h1>
      <Projects>
        <Child title="Project" description="Sample" link="/about" width="w-[250px]" image={Arduhome} />
        <Child title="Project" description="Sample" link="/about" width="w-[150px]" image={Kerrado} />
        <Child title="Project" description="Sample" link="/about" width="w-[150px]" image={Arduhome} />
        <Child title="Project" description="Sample" link="/about" width="w-[150px]" image={Kerrado} />
        <Child title="Project" description="Sample" link="/about" width="w-[150px]" image={Arduhome} />
        <Child title="Project" description="Sample" link="/about" width="w-[150px]" image={Kerrado} />
      </Projects>
    </div>
  );
}

export default App;
