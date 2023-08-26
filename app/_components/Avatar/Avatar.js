export default function Avatar({ imageURL, additionalClasses }) {
  return (
    <div
      className={`w-32  h-32 rounded-full ${
        additionalClasses ? additionalClasses : ""
      }`}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center  -15px",
        backgroundSize: "225px 150px",
      }}
    ></div>
  );
}
