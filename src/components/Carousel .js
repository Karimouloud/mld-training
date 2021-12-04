import React from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const CarouSel = () => {

  return(
    <Carousel fade>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/muscu.jpg"
          alt="muscu"
        />
        <Carousel.Caption className="carousel-texte">
          <h3>Muscu</h3>
          <p>Hypertrophie Drop-Set Temps-sous-tension ...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/running.jpg"
          alt="Cardio"
        />

        <Carousel.Caption className="carousel-texte">
          <h3>Cardio</h3>
          <p>Vélo Marche Footing ...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          className="d-block w-100"
          src="../images/article.jpg"
          alt="article"
        />

        <Carousel.Caption className="carousel-texte">
          <h3>Articles</h3>
          <p>Articles Muscu Cardio Nutrition ...</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
  
}

export default CarouSel;