import { useContext } from "react";
import { motion } from "framer-motion";
import { TodoContext } from "../../components/context/TodoContetxt";
import ThemeToggleButton from "../../components/Button/ThemeToggleButton";
import {  useNavigate } from "react-router";
import { FaCheckDouble, FaPlus, FaTrash } from "react-icons/fa";

const Todo = () => {
  const { Darkmode, setDarkmode } = useContext(TodoContext);

    return ( <>
        <div
      className={`min-h-screen px-4 py-8 transition-colors duration-500
        ${Darkmode 
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100" 
          : "bg-gradient-to-br from-white to-gray-100 text-gray-800"
        }`}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Theme Toggle Button */}
        <div className="flex justify-end">
          <ThemeToggleButton  />
        </div>

        <header className="text-center mb-6">
          <h1
            className={`text-4xl font-bold transition-colors
              ${Darkmode ? "text-white" : "text-gray-900"}`}
          >
            TodoFlow
          </h1>
          <p
            className={`text-lg transition-colors 
              ${Darkmode ? "text-gray-400" : "text-gray-600"}`}
          >
            Organize your life, one task at a time.
          </p>
        </header>

        {/* Progress Overview */}
        <section
          className={`rounded-xl shadow-lg p-6 border transition-colors
            ${Darkmode 
              ? "bg-gray-800 bg-opacity-80 border-gray-700 text-gray-200" 
              : "bg-white bg-opacity-80 border-gray-200 text-gray-800"
            }`}
        >
          <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
          <div className={`w-full ${Darkmode ?  'bg-gray-600' : 'bg-gray-200'} rounded-full h-4 mb-2 `}>
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Total</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
        </section>

        {/* Todo Card */}
        <div
          className={`rounded-xl shadow-lg p-6 border transition-colors
            ${Darkmode 
              ? "bg-gray-800 bg-opacity-80 border-gray-700 text-gray-200" 
              : "bg-white bg-opacity-80 border-gray-200 text-gray-800"
            }`}
        >
          {/* Todo Filters */}
          <section className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition">
              <FaPlus />
              Add Todo
            </button>
            <button className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-lg shadow-md hover:bg-red-200 transition">
              <FaTrash />
              Clear Completed
            </button>
            <button className="flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-green-200 transition">
              <FaCheckDouble />
              Mark all Completed
            </button>
          </section>

          {/* Todo Form */}
          <section className="text-center py-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-8 h-0.5 bg-gray-400"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold">
              No Todos Yet
            </h3>
            <p className="mt-2">Add your first todo to get started!</p>
            <p className="mt-1 text-sm italic text-gray-400">No Filter Todos</p>
          </section>

          {/* Footer */}
          <footer className="text-center py-4 text-sm text-gray-400">
            Footer
          </footer>
        </div>
      </div>
    </div>

    </> );
}
 
export default Todo;