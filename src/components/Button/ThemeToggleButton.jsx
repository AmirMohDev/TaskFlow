import { useContext } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { TodoContext } from "../context/TodoContetxt";

const ThemeToggleButton = () => {
  const { Darkmode, setDarkmode } = useContext(TodoContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* Hidden Checkbox */}
      <input
        onClick={() => setDarkmode(!Darkmode)}
        type="checkbox"
        className="sr-only peer"
      />

      {/* Switch Track */}
      <div className={`w-16 h-8  rounded-full ${Darkmode ? "bg-gray-700" : "bg-gray-300"} transition duration-300 shadow-inner`}></div>

      {/* Switch Thumb */}
      <div
        className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 peer-checked:translate-x-8 ${Darkmode ? "bg-gray-600" : "bg-yellow-400"} `}
      >
        {/* Sun Icon (Light Mode) */}
        {Darkmode ? <BsMoonStars size={14} /> : <BsSun size={16} />}

        {/* Moon Icon (Dark Mode) */}
      </div>
    </label>
  );
};

export default ThemeToggleButton;
