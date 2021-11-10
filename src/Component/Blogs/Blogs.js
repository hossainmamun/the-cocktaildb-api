import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogDisplay from './BlogDisplay/BlogDisplay.js';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#264653"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const Blogs = () => {
    const blogs = [
        {
            img: 'https://i.ibb.co/wzxYWRp/mod.jpg',
            titla: 'new votkamix soli',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/MRhRJgc/drink.jpg',
            titla: 'sarli modu',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/YTs9tzX/friends.jpg',
            titla: 'red tuxido',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/z6swSHk/beer.jpg',
            titla: 'blue neown',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/wzxYWRp/mod.jpg',
            titla: 'new votkamix soli',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
        {
            img: 'https://i.ibb.co/z6swSHk/beer.jpg',
            titla: 'new votkamix soli',
            describe: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        },
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
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
    };

    return (
        <div id="blog" className="container" style={{ marginBottom: '150px' }}>
            <div className="my-4 header-section" style={{ marginBottom: '150px' }}>
                <h2 className="text-capitalize">our clint review</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
                <Slider {...settings}>
                    {
                        blogs.map(blog => <BlogDisplay blog={blog} />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Blogs;