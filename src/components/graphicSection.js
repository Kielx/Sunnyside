/* eslint-disable jsx-a11y/anchor-is-valid */

const GraphicSection = ({
  image,
  imageMobile,
  headerText,
  text,
  textColor,
}) => {
  const checkScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return (
    <section
      className="w-full h-auto p-0 m-0 bg-cover bg-no-repeat pt-64 bg-top"
      style={{
        backgroundImage:
          checkScreenWidth > 768 ? `url(${image})` : `url(${imageMobile})`,
      }}
    >
      <div>
        <h2
          className={`pt-20 pb-4 text-3xl mb-4 mx-auto text-center font-text text-display-${textColor} font-extrabold`}
        >
          {headerText}
        </h2>
        <p
          className={`text-center text-display-${textColor} font-md font-semibold pb-16 px-4`}
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default GraphicSection;
