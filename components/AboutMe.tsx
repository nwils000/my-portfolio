import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const AboutMe = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/nathanwilson",
      icon: <FaLinkedin className="text-2xl text-white hover:text-blue-600" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      href: "https://github.com/nathanwilson",
      icon: <FaGithub className="text-2xl text-white hover:text-gray-400" />,
      color: "from-gray-500 to-gray-700",
    },
    {
      href: "https://twitter.com/nathanwilson",
      icon: <FaTwitter className="text-2xl text-white hover:text-blue-400" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      href: "https://facebook.com/nathanwilson",
      icon: <FaFacebook className="text-2xl text-white hover:text-blue-600" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      href: "https://instagram.com/nathanwilson",
      icon: (
        <FaInstagram className="text-2xl text-white hover:text-purple-500" />
      ),
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section
      id="about"
      className="container flex flex-col items-center justify-center min-h-screen gap-10 p-4 mx-auto text-left text-white font-roboto"
    >
      <h2 className="mt-12 mb-5 text-4xl font-semibold text-white">About Me</h2>
      <div
        className="container m-4 mx-auto text-center transition-transform duration-500 ease-in-out transform rounded-lg shadow-2xl bg-gradient-to-br "
        style={{
          backgroundImage: `linear-gradient(from-blue-500 to-blue-700)`,
        }}
      >
        <p className="p-6 text-lg leading-10 lg:leading-10 lg:text-2xl">
          I'm Nathan, a front-end developer specialized in JavaScript, React,
          and Node, with over 3 years of industry experience. Having lead
          development teams and actively participated in various projects, I
          have honed notable skills in DevOps, accessibility, API integration,
          and SEO. My passion lies in the end-to-end process of web development,
          from designing intuitive UIs to ensuring optimal performance and user
          experiences.
        </p>
      </div>
      <div className="flex justify-center mt-6 space-x-2 md:space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 text-center text-white transition-transform duration-500 ease-in-out transform rounded-lg shadow-2xl md:w-20 md:h-20 bg-gradient-to-br hover:scale-110"
            style={{ backgroundImage: `linear-gradient(${link.color})` }}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
