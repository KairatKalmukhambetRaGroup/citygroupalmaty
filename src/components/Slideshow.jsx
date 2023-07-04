import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import Slide1 from '@/assets/images/slide1.jpg';
import Slide2 from '@/assets/images/slide2.jpg';
import Slide3 from '@/assets/images/slide3.jpg';
import Slide4 from '@/assets/images/slide4.jpg';
import Slide5 from '@/assets/images/slide5.jpg';
import Slide6 from '@/assets/images/slide6.jpg';

import 'swiper/css';
import "swiper/swiper-bundle.css";
import '@/styles/slideshow.scss';

const Slideshow = () => {
    const [swiper, setSwiper] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = (e) => {
        e.preventDefault();
        swiper.slidePrev();
    }
    const nextSlide = (e) => {
        e.preventDefault();
        swiper.slideNext();
    }

    const slideChangeHandler = (e) => {
        setCurrentSlide(swiper.activeIndex);
    }

    const imgLoaded = (e) => {
        if(e.currentTarget){
            e.currentTarget.classList.add('loaded');
        }
    }

    return (
        <div id="slideshow">
            <div className="slideshow-content">
                <div className="slideshow">
                <i className="prev" onClick={prevSlide}></i>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2
                            },
                            992: {
                                slidesPerView: 3
                            }
                        }}
                        onSlideChange={slideChangeHandler}
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        loop
                        autoplay={{delay: 3000}}
                        pagination={{ 
                            el: '.pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '"></span>';
                            },
                        }}
                        onSwiper={setSwiper}
                    >
                        <SwiperSlide>
                            <div className="slide slide1">
                                <Image src={Slide1} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide' />
                                <div className="text">
                                составление и предоставление финансовой отчётности жителям ЖК, МЖД по каждому объекту, находящемуся в управлении
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide slide2">
                                <Image src={Slide2} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide'/>
                                <div className="text">
                                    круглосуточный контактный центр 
                                    <br/>
                                    (единый номер 8 8000 041 041)
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide slide3">
                                <Image src={Slide3} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide'/>
                                <div className="text">
                                составление и предоставление финансовой отчётности жителям ЖК, МЖД
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide slide4">
                                <Image src={Slide4} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide'/>
                                <div className="text">
                                сайт и мобильное приложение для жителей, ответственных лиц, исполнителей и подрядчиков
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide slide5">
                                <Image src={Slide5} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide'/>
                                <div className="text">
                                цифровой маркетплейс для партнёров компании
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide slide6">
                                <Image src={Slide6} onLoadingComplete={imgLoaded} onLoad={imgLoaded} alt='slide'/>
                                <div className="text">
                                сопровождение субъектов сервисной деятельности и предоставление других услуг
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                <i className="next" onClick={nextSlide}></i>
                </div>
            </div>
            {swiper && (
                <div className="pagination">
                </div>
            )}
        </div>
        // <div id="slideshow">
        //     <div className="slides">
        //         <div className="slide">
        //             <div className="text">
        //                 составление и предоставление финансовой отчётности жителям ЖК, МЖД по каждому объекту, находящемуся в управлении
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Slideshow;