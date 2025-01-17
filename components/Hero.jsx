import PropertySearchForm from "./PropertySearchForm";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-scroll sm:bg-fixed sm:min-h-[50vh] md:min-h-[70vh]"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/duslaj1sw/image/upload/v1737113722/Dwello/cscoh9tvivk2qszkulpo.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white max-w-2xl px-4 fade-in pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Find The Perfect Rental
        </h1>
        <p className="mb-8 text-lg md:text-xl drop-shadow-md">
          Discover the perfect property that suits your needs.
        </p>
        <div className="fade-up">
          <PropertySearchForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
