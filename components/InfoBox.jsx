const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={` text-white py-2 px-4 rounded-lg inline-block mt-4 hover:opacity-80  ${buttonInfo.backgroundColor} `}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
