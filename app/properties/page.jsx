// PropertiesPage.js
import React from "react";
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  return (
    <section className="px-4 py-6">
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-6">
          {/* Property cards will be rendered here */}
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Properties;
