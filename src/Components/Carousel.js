import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        return (
            <CarouselWrapper>
                <Slider {...settings}>
                    <div className="carousel-data">
                        <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
                        <p>File Name*|2 Min Read</p>
                        <button>Read Now</button>
                    </div>
                    <div className="carousel-data">
                        <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
                        <p>File Name*|2 Min Read</p>
                        <button>Read Now</button>
                    </div>
                    <div className="carousel-data">
                        <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
                        <p>File Name*|2 Min Read</p>
                        <button>Read Now</button>
                    </div>
                    <div className="carousel-data">
                        <h1>Mastering Finances: Expert tips and Tricks to achieve your financial goals</h1>
                        <p>File Name*|2 Min Read</p>
                        <button>Read Now</button>
                    </div>
                    
                </Slider>
            </CarouselWrapper>
        );
    }
}

const CarouselWrapper = styled.div`
    color: white;
    width: 65%;
    margin: auto;
    height: 100%;
    padding-top: 50px;

    .slick-dots li button:before {
        font-family: 'slick';
        color: #ffffff;
        ${'' /* background-color: #ffffff; */}
        border-radius: 100%;
        font-size: 15px;
    }
    .slick-dots li.slick-active button:before {
        font-family: 'slick';
        color: #ffffff !important;
        font-size: 15px;
    }

    .carousel-data{
        text-align: center;
        h1 {

        }
        h1, p{
            padding: 15px;
        }
        button {
            margin-top:15px;
            border-radius: 20px;
            border: 0;
            height: 30px;
            width: 100px;
            margin-bottom: 80px;
        }
    }
`