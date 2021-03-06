import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import Avatars
import avatar1 from '../images/avatars/avatar-1.png'
import avatar2 from '../images/avatars/avatar-2.png'
import avatar3 from '../images/avatars/avatar-3.png'
import avatar4 from '../images/avatars/avatar-4.png'

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >

<>
                        <img src={avatar1} alt="Mayank" />
                        <div className='myCarousel'>
                            <h3>Mayank</h3>
                            <p>dseheheh hugugugug</p>
                        </div>
                    </>

                    <>
                        <img src={avatar2} alt="Mayank" />
                        <div className='myCarousel'>
                            <h3>Harsh</h3>
                            <p>dseheheh hugugdsfsfugug</p>
                        </div>
                    </>

                    <>
                        <img src={avatar3} alt="Mayank" />
                        <div className='myCarousel'>
                            <h3>Puneet</h3>
                            <p>dseheeeheh hugugugug</p>
                        </div>
                    </>

                    <>
                        <img src={avatar4} alt="Mayank" />
                        <div className='myCarousel'>
                            <h3>Ajay</h3>
                            <p>dsehesdfheh hugugugug</p>
                        </div>
                    </>

        </Carousel>
    )
}

export default TestimonialsCarousel;
