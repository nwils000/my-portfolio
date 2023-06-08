import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaBars, FaTimes } from "react-icons/fa";

Modal.setAppElement("#__next");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appElement, setAppElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setAppElement(() => document.getElementById("__next"));
    }
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 z-50 h-full p-4 text-white md:p-8 lg:p-12 xl:p-16">
      <div className="fixed top-0 right-0 p-4 md:p-8 lg:p-12 xl:p-16">
        <button className="md:hidden" onClick={toggleModal}>
          {isOpen ? (
            <FaTimes className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" />
          ) : (
            <FaBars className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl" />
          )}
        </button>

        {appElement && (
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 50,
              },
              content: {
                width: "80vw",
                height: "80vh",
                margin: "auto",
                border: "none",
                background: "none",
                overflow: "hidden",
                borderRadius: "50px",
                outline: "none",
                padding: "0",
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            appElement={appElement}
          >
            <div className="flex items-center justify-center h-full">
              <ul className="flex flex-col items-center space-y-4 list-none md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`#${link}`}
                      className="text-2xl text-white transition-colors duration-300 hover:text-blue-600 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                      onClick={toggleModal}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Modal>
        )}
      </div>

      <ul className="flex-col items-center justify-center hidden h-full gap-6 space-y-2 md:flex md:gap-5 md:space-y-4 lg:gap-7 lg:space-y-6 xl:gap-12 xl:space-y-8 2xl:gap-14 2xl:space-y-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link}`}
              className="flex flex-col items-center text-white transition-all duration-300 cursor-pointer group"
            >
              <span className="mb-2 text-sm font-semibold transition-all duration-300 text-slate-300 group-hover:text-white md:mb-3 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
              <div className="w-6 h-6 transition-all duration-300 transform border-2 border-white rounded-full circle group-hover:scale-110 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
