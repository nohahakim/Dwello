import FeaturedPropertyCard from "./FeaturedPropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const FeaturedProperties = async () => {
  const properties = await Property.find({
    is_featured: true,
  }).lean();

  return properties.length > 0 ? (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-50  py-12">
      <div className="container-xl lg:container m-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center fade-up">
          Featured Properties
        </h2>
        <p className="text-gray-700 text-center mb-6 fade-up">
          Discover the best properties that are handpicked for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up">
          {properties.map((property) => (
            <FeaturedPropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default FeaturedProperties;
