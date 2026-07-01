import styles from './carousel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router';
import Slider from 'react-slick';
import { useEffect, useState } from 'react'

const CarouselItem = ({ item }) => {
    return (
        <Link to={`/store/${item.id}`} className={styles.removeLinkStyling} >
            <div className={styles.carouselItem} >
                <div className={ styles.imageContainer } >
                    <img src={item.colors["yellow"]} alt="item image" width='48px' />
                </div>
                <p className={styles.text} >{ item.name }</p>
            </div>
        </Link>
    )
}

const Carousel = ({ items }) => {

    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow()); 

    function getSlidesToShow() {
        if(typeof window === "undefined") return 3; 
        const width = window.innerWidth; 
        if(width <= 560) return 1;
        if(width <= 1024) return 2; 
        return 3
    }

    console.log(`items: ${items}`)

    useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow()); 
        window.addEventListener("resize", handleResize); 
        handleResize(); 
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 560, 
                settings: {
                    slidesToShow: 1,
                }
            }, 
            
        ]
  };

  return (
    <div className={styles.sliderContainer} >
        <Slider {...settings} >
            {
                items.map(item => <CarouselItem item={item} />)
            }
        </Slider>
    </div>
  )

}

export default Carousel