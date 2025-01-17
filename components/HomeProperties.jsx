import Property from "@/models/Property";
import connectDB from "@/config/database";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container-xl lg:container m-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center fade-up">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-white mb-8">
            Join thousands of satisfied users and start your property search
            today.
          </p>
          <Link
            href="/properties"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Properties
          </Link>
          <Link
            href="/properties/add"
            className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition ml-4"
          >
            List Your Property
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeProperties;
