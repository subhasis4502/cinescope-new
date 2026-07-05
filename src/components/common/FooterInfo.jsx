import { NAVIGATION_MENU } from "../../config/theme";
import { handleInternalClick } from "../../utils/navigation";

import SocialLinks from "./SocialLinks";

import { FiMail, FiPhone, FiMapPin, FiGlobe } from "react-icons/fi";

const FooterInfo = ({ onNavigate }) => {
  return (
    <section className="border-t border-[#E8DED3]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-16 py-16">
          {/* Navigation */}

          <div className="text-center">
            <h4 className="uppercase tracking-[0.4em] text-[#B89663] text-xs mb-8">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-y-5">
              {NAVIGATION_MENU.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleInternalClick(e, onNavigate)}
                  className="
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    text-[#484440]
                    transition
                    hover:text-[#C3A167]
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}

          <div className="text-center">
            <h4 className="uppercase tracking-[0.4em] text-[#B89663] text-xs mb-8">
              Follow Us
            </h4>

            <SocialLinks />
          </div>

          {/* Contact */}

          <div>
            <h4 className="uppercase tracking-[0.4em] text-[#B89663] text-xs mb-8 text-center lg:text-left">
              Contact
            </h4>

            <div className="space-y-6 text-[#484440]">
              <div className="flex items-center gap-4">
                <FiMail className="text-[#B89663]" />
                hello@cinescope.studio
              </div>

              <div className="flex items-center gap-4">
                <FiPhone className="text-[#B89663]" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-4">
                <FiMapPin className="text-[#B89663]" />
                Kolkata, India
              </div>

              <div className="flex items-center gap-4">
                <FiGlobe className="text-[#B89663]" />
                Available Worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterInfo;
