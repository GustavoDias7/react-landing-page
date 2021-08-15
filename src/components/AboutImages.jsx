import React from 'react';

const images = [
  'images/phone-01.jpg',
  'images/phone-02.jpg',
  'images/phone-03.jpg',
  'images/phone-04.jpg',
]

const AboutImages = () => {
  const [mainImage, setMainImage] = React.useState(0);

  function changeMainImage(index) {
      setMainImage(index);
  }
  
  return (
    <div className="product-images">
      <div className="main-image">
        <img
          src={images[mainImage]}
          alt={`Imagem ${mainImage + 1} do produto`}
        />
      </div>
      <ul className="small-images">
        {images.map((image, index) => {
          return (
            <li key={image}>
              <img
                onClick={() => changeMainImage(index)}
                data-index={index}
                src={images[index]}
                alt={`Imagem ${index + 1} do produto`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutImages;
