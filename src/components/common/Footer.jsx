import FooterCTA from "./FooterCTA";
import FooterInfo from "./FooterInfo";
import SiteFooter from "./SiteFooter";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="relative overflow-hidden bg-[#FAF6F1] border-t border-[#E8DED3]">
      {/* Botanical Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-25"
        style={{
          backgroundImage: "url('/images/footer/botanical-frame.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10">
        <FooterCTA />
        <FooterInfo onNavigate={onNavigate} />
        <SiteFooter />
      </div>
    </footer>
  );
};

export default Footer;
