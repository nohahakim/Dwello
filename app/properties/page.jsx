// PropertiesPage.js
import React from "react";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";

const PropertiesPage = async ({ searchParams: { pageSize = 9, page = 1 } }) => {
  await connectDB();
  const currentPage = parseInt(page);
  pageSize = parseInt(pageSize);
  const skip = (currentPage - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties = await Property.find({})
    .skip(skip)
    .limit(pageSize)
    .sort({ createdAt: -1 });

  const showPagination = total > pageSize;

  return (
    <section className="px-4 py-6">
      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard property={property} key={index} />
          ))}
        </div>
      )}
      {showPagination && (
        <Pagination page={currentPage} pageSize={pageSize} totalItems={total} />
      )}
    </section>
  );
};

export default PropertiesPage;
