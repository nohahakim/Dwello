"use client";
import Image from "next/image";

const PropertyHeaderImage = ({ image }) => {
  return (
    <div>
      <Image
        src={image}
        alt="Property Image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
};

export default PropertyHeaderImage;
