import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App.js';
import Navbar from '../Shared/Navbar/Navbar.js';

const Cart = () => {
    const { cocktailId } = useParams()
    const [singleDetail, setSingleDetail] = useState({})
    const [cart, setCart] = useContext(userContext)
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
            .then(response => response.json())
            .then(data => {
                setSingleDetail(data.drinks[0])
            })
    }, [])

    // handle cart function
    const handleCart = (addItem) => {
        const newCart = [...cart, addItem];
        setCart(newCart);
        console.log(newCart);
    }

    // destructure singleDetail
    const { strDrink, strTags, strCategory, strIBA, strAlcoholic, strGlass, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strInstructions } = singleDetail;
    return (
        <div>
            <div style={{ background: '#073b4c', height: '80px' }}>
                <Navbar />
            </div>
            <div className="row justify-content-center" style={{ marginTop: '150px' }}>
                <div className="col-12 col-lg-6">
                    <div className="card border-0 p-3">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <img src={strDrinkThumb} className="img-fluid" alt="img" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5> <strong>Title</strong>: {strDrink || `sorry Name Not Found`}</h5>
                                    <p><strong>Category</strong>: {strCategory || `sorry Category Not Found`}</p>
                                    <p><strong>TagName</strong>: {strTags || `Tags Not Found`}</p>
                                    <p><strong>IBA</strong>: {strIBA || `IBA Not Found`}</p>
                                    <p><strong>Type</strong>: {strAlcoholic || `sorry Not Found`}</p>
                                    <p><strong>GlassType</strong>: {strGlass || `sorry Not Found`}</p>
                                    <p><strong>Instruction</strong>: {strInstructions || `sorry Not Found`}</p>
                                    <p><strong>Ingredient1</strong>:{strIngredient1 || `sorry Not Found`}</p>
                                    <p><strong>Ingredient2</strong>:{strIngredient2 || `sorry Not Found`}</p>
                                    <p><strong>Ingredient3</strong>:{strIngredient3 || `sorry Not Found`}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-6">
                            <div className="row justify-content-center">
                                <div className="col-md-12 d-grid mb-4">
                                    <button className="btn general-btn rounded-0" onClick={() => handleCart(singleDetail)}>add to cart</button>
                                </div>
                                <Link to="/order">
                                    <div className="col-md-12 d-grid ">
                                        <button className="btn general-btn rounded-0 order-btn">Order now</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;