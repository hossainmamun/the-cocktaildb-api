import React from 'react';
import { useHistory } from 'react-router';


const Banner = () => {
    const history = useHistory();
    const handleAllPopularMeal = () => {
        history.push('/allPopularItems')
    }
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>welcome to the cocktailDB world</h1>
                <h4 className="text-warning my-3">our slogan is Mod Khabi Manus Hobi, Mod kha.. Mod Kha...</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Ipsam sapiente, ea omnis eligendi aperiam nam vero. Quisquam repellat nisi consequatur, <br /> eaque non id nihil impedit optio labore ad distinctio voluptate.</p>
                <div className="text-center my-4">
                    <button className="btn general-btn popular-btn rounded-0 mt-3" onClick={handleAllPopularMeal}>Check Out All Popular Item</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;