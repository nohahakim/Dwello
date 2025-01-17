import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="relative bg-gray-50 rounded-xl shadow-lg overflow-hidden hover-scale transition-all">
      <Link href={`/properties/${property._id}`}>
        <Image
          src={property.images[0]}
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-48 object-cover"
          priority={true}
        />
      </Link>
      <div className="p-4">
        <div className=" mb-4">
          <div className="text-gray-500">{property.type}</div>
          <h3 className="text-xl font-bold text-gray-900">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-600 font-bold text-right md:text-center lg:text-right shadow">
          {getRateDisplay()}
        </h3>

        <div className="flex gap-4 text-gray-600 mb-4">
          <p>
            <FaBed className="inline-block mr-2 text-blue-600" />{" "}
            {property.beds} <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-2 text-blue-600" />{" "}
            {property.baths} <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2 text-blue-600" />
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex  gap-4 text-green-900 text-sm my-4">
          {property.rates.nightly && (
            <p className="bg-green-100 text-green-800">
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p className="bg-blue-100 text-blue-800">
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p className="bg-yellow-100 text-yellow-800">
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700 mt-1" />
            <span className="text-orange-700">
              {" "}
              {property.location.city} {property.location.state}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
