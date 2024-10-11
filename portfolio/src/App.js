import React from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import About from "./about";
import { Projects } from "./components/projects";
import { Child } from "./components/child";
import "./tailwind.css"; // Assuming Tailwind is installed and configured properly
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TortugasPage from "./projects/tortugas/tortugas";

import Arduino from "./assets/arduino.png";
import Ventanas from "./assets/ventanas.png";
import Tortugas from "./assets/tortugas.png";
import Polly from "./assets/polly.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="py-5 flex justify-center items-center relative font-afacad-flux">
        <ul className="nav-links flex gap-8 list-none m-0 p-0">
          {/* <Link
            to="/"
            className="logo absolute left-10 text-stone-600 text-xl ml-10"
          >
            k.soderby
          </Link> */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-2 border-black"
                  : "hover:underline"
              }
            >
              Projects
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
      <div className="flex-grow p-1 bg-white mx-auto max-w-screen-xl w-[90%]">
        <Link to="/" className=" text-black text-2xl font-bold">
          Karl Söderby
        </Link>
        <p className={"mb-2"}>UI/UX designer & Front End Developer</p>
        <div className={"flex mb-5"}>
          <Link to="/about" className={"mr-1"}>
            <FaGithub />
          </Link>
          <Link to="/about">
            <FaLinkedin />
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tortugas" element={<TortugasPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 text-black text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} Karl Söderby. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3 className="text-2xl font-bold font-afacad-flux mb-4">Projects</h3>
      <hr className={"pt-5"}></hr>
      <Projects>
        <Child
          title="Arduino"
          description="Re-designing Arduino's software library browsing experience."
          link="/about"
          styling="w-[250px]"
          image={Arduino}
          tags={[{ value: "UI / UX" }]}
        />
        <Child
          title="Ventanas95"
          description="Designing and developing a styling tool for a Storyblok plugin."
          link="/about"
          styling="w-[250px]"
          image={Ventanas}
          tags={[{ value: "UI / UX" }, { value: "Development" }]}
        />
        <Child
          title="Tortugas"
          description="Designing a booking app with integrated payment."
          link="/tortugas"
          styling="w-[250px]"
          image={Tortugas}
          tags={[{ value: "UI / UX" }, { value: "Development" }]}
        />
        <Child
          title="Polly"
          description="A global voting app."
          link="/about"
          styling="w-[250px]"
          image={Polly}
          tags={[{ value: "UI / UX" }, { value: "Development" }]}
        />
      </Projects>
    </div>
  );
}

export default App;
