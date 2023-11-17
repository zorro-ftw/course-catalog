export default function Avatar({
  imageURL,
  additionalClasses,
  backgroundPositioning = "center  -15px",
  backgroundSizing = "225px 150px",
}) {
  return (
    <div
      className={` ${additionalClasses ? additionalClasses : ""}`}
      style={{
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: backgroundPositioning,
        backgroundSize: backgroundSizing,
      }}
    ></div>
  );
}
