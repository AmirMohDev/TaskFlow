import { useContext } from "react";
import { motion } from "framer-motion";
import { FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";
import { TodoContext } from "../../components/context/TodoContetxt";
import ThemeToggleButton from "../../components/Button/ThemeToggleButton";
import {  useNavigate } from "react-router";

const Intro = () => {
  const { Darkmode, setDarkmode } = useContext(TodoContext);
const navigate =useNavigate()
  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 overflow-hidden
      ${
        Darkmode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-white to-gray-100 text-gray-800"
      }`}
    >
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggleButton Darkmode={Darkmode} setDarkmode={setDarkmode} />
      </div>

      {/* Background Accent Circles */}
      <div
        className="absolute w-96 h-96 rounded-full bg-green-400 opacity-20 blur-3xl -top-10 -left-20"
        aria-hidden="true"
      />
      <div
        className="absolute w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl bottom-0 right-0"
        aria-hidden="true"
      />

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative max-w-3xl w-full text-center rounded-2xl shadow-xl border p-10 backdrop-blur-md transition-colors z-10
        ${
          Darkmode
            ? "bg-gray-800 bg-opacity-80 border-gray-700"
            : "bg-white bg-opacity-80 border-gray-200"
        }`}
      >
        {/* Icon Preview */}
        <div className="flex justify-center mb-6 gap-6 text-5xl">
          <FaTasks className="text-green-500 animate-bounce" />
          <FaCheckCircle className="text-blue-500 animate-pulse" />
          <FaClock className="text-yellow-500 animate-spin-slow" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            TodoFlow
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg mb-6 leading-relaxed ${
            Darkmode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Organize your tasks with simplicity and style. Track progress, stay
          productive, and make every day count.
        </p>

        {/* Call to Action */}
        <button onClick={()=>navigate('/Todo')}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className={`px-8 py-3 rounded-xl font-semibold shadow-lg transition
          ${
            Darkmode
              ? "bg-green-500 text-gray-900 hover:bg-green-400"
              : "bg-green-600 text-white hover:bg-green-500"
          }`}
        >
          Get Started
        </motion.button>

        </button>
      </motion.div>

      {/* Footer */}
      <footer
        className={`mt-12 text-sm transition-colors z-10 ${
          Darkmode ? "text-gray-500" : "text-gray-400"
        }`}
      >
        © 2025 TodoFlow. All rights reserved.
      </footer>
    </div>
  );
};

export default Intro;
