import image1Mobile from "../images/mobile/image-gallery-milkbottles.jpg";
import image1 from "../images/desktop/image-gallery-milkbottles.jpg";
import image2Mobile from "../images/mobile/image-gallery-orange.jpg";
import image2 from "../images/desktop/image-gallery-orange.jpg";
import image3Mobile from "../images/mobile/image-gallery-cone.jpg";
import image3 from "../images/desktop/image-gallery-cone.jpg";
import image4Mobile from "../images/mobile/image-gallery-sugar-cubes.jpg";
import image4 from "../images/desktop/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  const checkScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const images =
    checkScreenWidth > 768
      ? [image1, image2, image3, image4]
      : [image1Mobile, image2Mobile, image3Mobile, image4Mobile];

  const mappedImages = images.map((image, index) => {
    return (
      <img
        alt="Gallery image"
        aria-hidden="true"
        key={index}
        src={images[index]}
        className="gallery__image w-1/2 md:max-w-1/4"
      />
    );
  });

  return (
    <section className="bg-pink-300 flex flex-wrap">{mappedImages}</section>
  );
};

export default Gallery;
