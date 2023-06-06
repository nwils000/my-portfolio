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
    <nav className="fixed top-0 left-0 z-50 h-full p-4 text-white md:p-8">
      <div className="fixed top-0 right-0 p-4 md:hidden">
        <button onClick={toggleModal}>
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
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
              <ul className="flex flex-col items-center list-none">
                {navLinks.map((link, index) => (
                  <li key={index} className="mb-6">
                    <a
                      href={`#${link}`}
                      className="text-3xl text-white transition-colors duration-300 hover:text-blue-600"
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

      <ul className="flex-col items-center justify-center hidden h-full gap-10 space-y-4 md:flex md:gap-20 md:space-y-10">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link}`}
              className="flex flex-col items-center text-white cursor-pointer hover:text-blue-600"
            >
              <span className="mb-2 text-sm font-semibold md:text-xs">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
              <div className="w-8 h-8 border-2 border-white rounded-full md:w-6 md:h-6"></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
