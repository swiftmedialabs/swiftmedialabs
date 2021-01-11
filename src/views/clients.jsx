
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
// import 'swiper/components//autoplay.scss';
// import 'swiper/components/navigation/navigation.scss';
import './../styles/clients.sass'
// import images
import Client1 from "../assets/clients/amar.png"
import Client2 from "../assets/clients/hina.png"
import Client3 from "../assets/clients/shalya.png"
import Client4 from "../assets/clients/nishthas.png"
import Client5 from "../assets/clients/adventure-things.jpeg"

const Clients = () => {
    SwiperCore.use([EffectFade]);
    SwiperCore.use([Autoplay]);
    return (
        <>
            <h5 className="primary-orange font-600 font-weight-bold clients-title pb-4">Clients we have worked for</h5>
            <div className="container-fluid">
                <div className="client-slideshow w-md-100 h-md-25 row">
                    <div className="d-md-flex 
                    container flex-row justify-content-center align-content-center h-25 w-75">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop
                            autoplay={true}
                        >
                            <SwiperSlide><span className="img-container-1"><img src={Client1} alt="client amar atheletics" /></span></SwiperSlide>
                            <SwiperSlide><span className="img-container-2"><img src={Client2} alt="client hina closet" /></span></SwiperSlide>
                            <SwiperSlide><span className="img-container-3"><img src={Client3} alt="client shalya natural" /></span></SwiperSlide>
                            <SwiperSlide><span className="img-container-4"><img src={Client4} alt="client nishthas" /></span></SwiperSlide>
                            <SwiperSlide><span className="img-container-5"><img src={Client5} alt="client adventure" /></span></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Clients