import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

import { FaVimeoV } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-8">
      <a
        href="#"
        className="text-3xl text-[#B89663] transition-all duration-300 hover:scale-110 hover:text-[#A8844B]"
      >
        <FiInstagram />
      </a>

      <a
        href="#"
        className="text-3xl text-[#B89663] transition-all duration-300 hover:scale-110 hover:text-[#A8844B]"
      >
        <FiYoutube />
      </a>

      <a
        href="#"
        className="text-3xl text-[#B89663] transition-all duration-300 hover:scale-110 hover:text-[#A8844B]"
      >
        <FiFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;
