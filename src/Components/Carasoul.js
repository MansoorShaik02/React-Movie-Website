import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carasoul() {
    return (
        <div className='carasouldiv'>

            <Carasoul showThumbs={false} autoPlay={true}
                transitionTime={3}
                showStatus={false}
                infiniteLoop={true}>
                <div>
                    <p>para 1</p>
                </div>

                <div>
                    <p>para 2</p>
                </div>

                <div>
                    <p>para 3</p>
                </div>
            </Carasoul>
        </div>
    )
}

export default Carasoul