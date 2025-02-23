import heroImg1 from "../../assets/TvsNtorq.jpg"; // First image

const HeroSection = () => {
  return (
    <section className=" w-full h-[300px] md:h-[500px] lg:h-[600px] ">
      {/* First Image (Default) */}
      <img
        src={heroImg1}
        alt="Hero 1"
        className=" w-full h-full "
      />
    </section>
  );
};

export default HeroSection;
