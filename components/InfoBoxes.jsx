import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-xl lg:container m-auto  px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-blue-50"
            border="border-l-4 border-blue-600"
            textColor="text-blue-700"
            buttonInfo={{
              text: "Browse Properties",

              link: "/properties",
              backgroundColor: "bg-blue-700",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-rose-50"
            border="border-l-4 border-rose-600"
            textColor="text-rose-700"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-rose-700",
            }}
          >
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
