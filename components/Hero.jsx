const Hero = () => {
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex
      flex-col items-center 
      "
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white 
          sm:text-5xl md:text-6xl
          "
          >
            Find The Perfect Rental
          </h1>
          <p
            className="
          my-4 
          text-white text-xl"
          >
            We have the best properties for you. Check them out now!
          </p>
          <button className="bg-white text-blue-700 py-2 px-4 rounded-lg">
            View Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
