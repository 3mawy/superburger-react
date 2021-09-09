import {Carousel} from "react-bootstrap";
import "./style.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCarouselImages} from "../../redux/remotes_thunk/carouselImagesThunk";
import {selectCarouselImages} from "../../redux/slices/carouselImageSlice";

const HeroCarousel = ({onActionDone}) => {
    const dispatch = useDispatch()
    let images = []
    let loaded = false
    useEffect(() => {
        dispatch(getCarouselImages())
    }, [])
    const imagesData = useSelector(selectCarouselImages);

     images = imagesData.images.results
        loaded = (imagesData.status === "success")


    console.log(images)
    // onActionDone({},{})
    return (
        <Carousel>
            {loaded ? (images.map((item) =>
                <Carousel.Item  className="hero-carousel" interval={2500}>
                    <img
                        className="d-block w-100"
                        src={item.image.image}
                        alt="First slide"
                    />
                    {/*<Carousel.Caption className={`text-left mb-5`}>*/}
                    {/*  <h3>First slide label</h3>*/}
                    {/*  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            )) : (null)}

        </Carousel>
    )
}

export default HeroCarousel
