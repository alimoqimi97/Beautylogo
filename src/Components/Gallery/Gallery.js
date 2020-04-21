import React from "react";
// import $ from "jquery";
import "./Gallery.css";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.min.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";
import  pic1 from "./pictures/worksample/daya.jpg";
import  pic2 from "./pictures/worksample/casbinab3.png";
import  pic3 from "./pictures/worksample/ag4.jpg";
import  pic4  from "./pictures/worksample/dc.jpg";
import  pic5  from "./pictures/worksample/casbinab.jpg";
import  pic6  from "./pictures/worksample/IT.jpg";
import  pic7  from "./pictures/worksample/istafelez.jpg";
import pic8  from "./pictures/worksample/sheikh.jpg";




class Gallery extends React.Component
{
    constructor(props){
        super(props);
        
    }


    render(){

        const params = {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            // paginationClickable: true,
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
            }
          };

        return (
            <div className="swiper-frame">
                <Swiper {...params} >
                    <div><img id="slide-image" src={pic1} alt="p1" /></div>
                    <div><img id="slide-image" src={pic2} alt="p2" /></div>
                    <div><img id="slide-image" src={pic3} alt="p3" /></div>
                    <div><img id="slide-image" src={pic4} alt="p4" /></div>
                    <div><img id="slide-image" src={pic5} alt="p5" /></div>
                    <div><img id="slide-image" src={pic6} alt="p6" /></div>
                    <div><img id="slide-image" src={pic7} alt="p7" /></div>
                    <div><img id="slide-image" src={pic8} alt="p8" /></div>
                </Swiper>
            </div>
        );
    }
}

export default Gallery