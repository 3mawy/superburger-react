import {Carousel} from "react-bootstrap";
import sample from '../Cards/CardWithText/sample.jpeg'
import cover from './coverr.jpeg'
import cover2 from './cover regd.jpeg'
import "./style.css"
const HeroCarousel = () => {
    return (
    <Carousel>
      <Carousel.Item className="hero-carousel" interval={2500}>
        <img
          className="d-block w-100"
          src={cover2}
          alt="First slide"
        />
        {/*<Carousel.Caption>*/}
        {/*  <h3>First slide label</h3>*/}
        {/*  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item className="hero-carousel" interval={2500}>
        <img
          className="d-block w-100"
          src={cover}
          alt="Third slide"
        />
        {/*<Carousel.Caption>*/}
        {/*  <h3>Second slide label</h3>*/}
        {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item className="hero-carousel" interval={2500}>
        <img
          className="d-block w-100"
          src={sample}
          alt="Third slide"
        />
        {/*<Carousel.Caption>*/}
        {/*  <h3>Third slide label</h3>*/}
        {/*  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
        {/*</Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel>
    )
}

export default HeroCarousel
