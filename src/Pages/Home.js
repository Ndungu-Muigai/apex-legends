import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "../Assets/CSS/Cards.css"

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Home = () => 
{
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <div className="landing h-screen bg-cover bg-center flex justify-center items-center">
                <div className="text-white text-center z-10">
                    <h1 className="text-5xl font-bold">Welcome to Apex Legends</h1>
                    <p className="text-2xl mt-4">Discover your favorite legends</p>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="mx-auto">
                <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff', }}
                spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Navigation, Thumbs]} className="h-96 w-full" >
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
                </SwiperSlide>
                <SwiperSlide className="main-swiper">
                    <img className="img" src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Nature 10" />
                </SwiperSlide>
                </Swiper>
            </div>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper h-20 box-border py-2">
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8"/>
            </SwiperSlide>
            <SwiperSlide className="secondary-swiper">
            <img className="img" src="https://swiperjs.com/demos/images/nature-10.jpg" alt="Nature 10"/>
            </SwiperSlide>
        </Swiper>
        </>
    );
}

export default Home;
