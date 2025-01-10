// PropertiesPage.js
import React from "react";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCard from "@/components/PropertyCard";

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean();
  return (
    <section className="px-4 py-6">
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Property cards will be rendered here */}
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertiesPage;
