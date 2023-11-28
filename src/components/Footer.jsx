import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import ButtonStyle from "./ButtonStyle";
import { ImgLogo } from "../assets";

const Footer = () => {
  return (
    <footer className="text-white py-20 bg_gradient ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <a href="/" className="flex text-white text-lg cursor-pointer">
            <img
              src={ImgLogo}
              alt="logo"
              className="w-22 h-12 lg:w-30 lg:h-20"
            />
          </a>
        </div>

        <div className="">
          <p>QUICK LINKS</p>

          <div className="flex flex-col text-start mb-4 md:mb-0">
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Home
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              About
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Services
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Contact
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Chiefs
            </a>
          </div>
        </div>

        <div>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Terms and Conditions
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              License Agreement
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Copyright Information
            </a>
            <a
              href="/"
              className="block md:inline-block py-2 hover:text-gray-500 duration-500"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100049906476164"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110 duration-500"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/prashant.0n/"
              className="bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110 duration-500"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com/Prasant08514908"
              className="bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110 duration-500"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.youtube.com/@prasantakumarsahoo8291"
              className="bg-red-600 p-1.5 rounded-sm text-white hover:scale-110 duration-500"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          <ButtonStyle
            title="Sign up"
            btnType="button"
            conteinerStyle="mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px] duration-500"
          />
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">
          Developed by <span className="text-green-500 text-xl">Prashant </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
