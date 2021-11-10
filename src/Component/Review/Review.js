import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewDisplay from './ReviewDisplay/ReviewDisplay.js';

const Review = () => {
    const reviewData = [
        {
            img: 'https://i.ibb.co/z6swSHk/beer.jpg',
            name: 'safuda',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/YTs9tzX/friends.jpg',
            name: 'jack almond',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/MRhRJgc/drink.jpg',
            name: 'rifat julit',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/wzxYWRp/mod.jpg',
            name: 'rifat julit',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/MRhRJgc/drink.jpg',
            name: 'rifat julit',
            comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div id="review" className="container" style={{marginBottom: '150px'}}>
            <div className="my-4 header-section">
                <h2 className="text-capitalize">our clint review</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                < Slider {...settings}>
                    {
                        reviewData.map(review => <ReviewDisplay review={review} />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Review;