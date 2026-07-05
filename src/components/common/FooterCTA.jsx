const FooterCTA = () => {
  return (
    <section className="relative">
      <div className="container-custom py-24 md:py-32 text-center">
        <p className="uppercase tracking-[0.45em] text-[11px] text-[#B89663] mb-6">
          LET'S CREATE SOMETHING TIMELESS
        </p>

        <h2 className="font-serif text-5xl md:text-7xl text-[#2D2926] leading-none">
          Your Story Deserves
        </h2>

        <h3
          className="mt-3 text-[54px] md:text-[82px]"
          style={{
            fontFamily: "Allura, cursive",
            color: "#D2A4A8",
          }}
        >
          To Be Remembered
        </h3>

        <p className="max-w-2xl mx-auto mt-8 text-[#6D655D] leading-8 text-base">
          We would be honored to document your special day with authenticity,
          artistry and heartfelt storytelling.
        </p>

        <button
          className="
            mt-12
            bg-[#C3A167]
            text-white
            px-10
            py-4
            uppercase
            tracking-[0.25em]
            transition-all
            duration-300
            hover:bg-[#B68F4E]
            hover:-translate-y-1
          "
        >
          Get In Touch →
        </button>
      </div>
    </section>
  );
};

export default FooterCTA;
