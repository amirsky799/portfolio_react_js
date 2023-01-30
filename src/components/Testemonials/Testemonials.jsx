import React from 'react';
import "./testemonial.css";
import { Data } from './Data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testemonials = () => {
    return (
        <section className="testemonial container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testemonial</span>

            <Swiper className="testemonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },

                }}
                modules={[Pagination]}

            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testemonial__card" key={id}>
                            <img src={image} alt="" className="testemonial__img" />
                            <h3 className="testemonial__name">{title}</h3>
                            <p className="testemonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Testemonials;