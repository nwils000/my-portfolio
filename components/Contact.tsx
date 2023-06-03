import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Your message has been sent! Thank you for reaching out.");
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen gap-10 p-4 mx-auto text-left text-white font-roboto"
    >
      <h1 className="mt-12 mb-5 text-4xl font-semibold text-white sm:text-5xl">
        Contact
      </h1>
      <div
        className="px-20 py-10 m-4 mx-auto text-center transition-transform duration-500 ease-in-out transform rounded-lg shadow-2xl bg-gradient-to-br sm:max-w-xl"
        style={{
          backgroundImage: `linear-gradient(from-blue-500 to-blue-700)`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-6 text-left sm:max-w-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-transparent border border-white rounded form-input"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 text-white bg-transparent border border-white rounded form-input"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 text-white bg-transparent border border-white rounded form-textarea"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-700 hover:scale-105"
          >
            Send Message
          </button>
          {statusMessage && (
            <p className="mt-4 text-green-400">{statusMessage}</p>
          )}
        </form>
        <p className="mt-8 text-center text-white sm:text-lg">
          You can also reach me at:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 hover:text-blue-600"
          >
            nwils000@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
