import Logo from "../../assets/images/logo.jpg";
import { CgProfile } from "react-icons/cg";

export const Header = () => {
  return (
    <div className=" md:w- flex justify-evenly items-center">
      <img className="md:w-20 rounded-full" src={Logo} alt="Logo" />

      <div className="flex space-x-12">
        <a href=""> Home </a>
        <a href=""> Recipes </a>
        <a href=""> About </a>
        <a href=""> Search </a>
      </div>

      <div className="flex gap-6">
        <input
          className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-3xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
          type="text"
          name="search"
          placeholder="Search here"
        />
        <div className="bg-[#0be58a] w-14 h-12 flex items-center justify-center rounded-full ">
          <CgProfile className="text-3xl rounded-full text-center justify-center align-bottom" />
        </div>
      </div>
    </div>
  );
};
