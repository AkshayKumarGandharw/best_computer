import React from 'react'
import '../../App';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

function SwiperTeachers() {
    return (
        <>
            <Swiper

                navigation={true}
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide >
                    <div className="experince-teachers">
                        <div className="rectangle-box">
                            <div className="img-circle">
                            <img src={'./images/digital-marketing.jpg'} alt="" />
                            </div>
                            <div className="profile-teacher">
                                <p>Teacher Full Name</p>
                                <p>Subject Name</p>
                                <p>Year of Exp</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="experince-teachers">
                        <div className="rectangle-box">
                            <div className="img-circle">
                            <img src={'./images/digital-marketing.jpg'} alt="" />
                            </div>
                            <div className="profile-teacher">
                                <p>Teacher Full Name</p>
                                <p>Subject Name</p>
                                <p>Year of Exp</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                  <SwiperSlide>
                    <div className="experince-teachers">
                        <div className="rectangle-box">
                            <div className="img-circle">
                            <img src={'./images/digital-marketing.jpg'} alt="" />
                            </div>
                            <div className="profile-teacher">
                                <p>Teacher Full Name</p>
                                <p>Subject Name</p>
                                <p>Year of Exp</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                  <SwiperSlide>
                    <div className="experince-teachers">
                        <div className="rectangle-box">
                            <div className="img-circle">
                            <img src={'./images/digital-marketing.jpg'} alt="" />
                            </div>
                            <div className="profile-teacher">
                                <p>Teacher Full Name</p>
                                <p>Subject Name</p>
                                <p>Year of Exp</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>



        </>
    )
}

export default SwiperTeachers
