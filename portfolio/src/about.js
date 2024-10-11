import React from "react";
import { Link } from "react-router-dom";
import Kalle from "./assets/kalle.jpg";
import {
  FaMapPin,
  FaPhone,
  FaGithub,
  FaMailBulk,
  FaCode,
  FaPencilAlt,
  FaPalette,
  FaMicrochip,
} from "react-icons/fa";

function About() {
  return (
    <div>
      <h3 className="text-2xl font-bold font-afacad-flux mb-4">About</h3>
      <hr className={"pt-5"}></hr>
      <div className={"flex flex-wrap gap-10"}>
        <div className="flex flex-col max-w-[400px]">
          <div className="flex items-center">
            <FaMapPin className="mr-2" />
            <p>Malmö, Sweden</p>
          </div>
          <div className="mt-1 flex items-center">
            <FaMailBulk className="mr-2" />
            <Link>karlsoderby@gmail.com</Link>
          </div>
          <div className="mt-1 flex items-center">
            <FaPhone className="mr-2" />
            <p>+46 76 084 5478</p>
          </div>
          <div className="mt-1 flex items-center">
            <FaGithub className="mr-2" />
            <Link>karlsoderby</Link>
          </div>
        </div>
        <div>
          <img src={Kalle} className="mb-4 max-w-[200px]" />
        </div>
        <div className="max-w-[350px]">
          <p>
            Interaction Designer & Sr. Technical Writer{" "}
            <Link className="font-bold">@Arduino</Link>, with an edge in UI / UX
            design and front-end development. I design, create, code and
            document technical solutions ranging from embedded IoT to e-commerce
            systems.
          </p>
          <p className="mt-3">
            Nature lover, music enthusiast, beer league hockey player and
            hobby-carpenter.
          </p>
          <p className="mt-3 mb-3">
            <b>Sounds good?</b>
          </p>

          <Link
            to="/"
            className={
              "text-sm tracking-wider border border-stone-500 transition-all duration-200 hover:text-white hover:border-white hover:bg-teal-500 hover:cursor-pointer uppercase pt-2 pb-2 pl-4 pr-4 mt-3"
            }
          >
            Contact me
          </Link>
        </div>
        <div
          className={
            "p-5 w-[350px] border rounded-lg border-stone-500 flex uppercase text-sm tracking-wider	"
          }
        >
          <ul>
            <FaPalette className={"mb-2"} />
            <li>UI Design</li>
            <li>UX Research</li>
            <li>Design Systems</li>
            <li>Atomic Design</li>
            <li>Figma</li>
            <li>Adobe Illustrator</li>

            <FaPencilAlt className={"mt-2 mb-2"} />

            <li>Markdown</li>
            <li>asciidocs</li>
            <li>Github CMS</li>
            <li>Tutorials</li>
            <li>Data sheets</li>
            <li>API Documentation</li>
          </ul>
          <ul className={"ml-4"}>
            <FaCode className={"mb-2"} />

            <li>node.js</li>
            <li>next.js</li>
            <li>gatsby.js</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>OpenAI</li>
            <li>Python</li>
            <li>MicroPython</li>
            <li>Arduino / C++</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
