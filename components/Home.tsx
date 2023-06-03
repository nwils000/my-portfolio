import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Home() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <CSSTransition in={load} timeout={2000} classNames="fade">
      <div
        className="flex flex-col justify-center min-h-screen tracking-wider text-center transition-all duration-700 ease-in-out font-roboto"
        id="home"
      >
        <div>
          <div className="text-5xl font-bold text-white transition-all duration-700 ease-in-out sm:text-6xl md:text-7xl lg:text-8xl text-shadow">
            Nathan Wilson
          </div>
          <div className="text-xl font-semibold text-gray-300 transition-all duration-700 ease-in-out sm:text-2xl md:text-3xl lg:text-4xl text-shadow">
            Web Developer
          </div>
          <button className="px-4 py-4 mt-6 font-bold text-white transition-colors duration-200 transform bg-blue-600 rounded w-52 hover:bg-blue-700 hover:scale-105">
            View My Projects
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}
