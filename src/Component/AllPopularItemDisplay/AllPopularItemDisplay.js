import React from 'react';
import { Link } from 'react-router-dom';

const AllPopularItemDisplay = (props) => {
    const { strDrink, strDrinkThumb, idDrink } = props.cocktail;
    return (
        <div className="col-md-3 my-3">
            <div className="card shadow border-0">
                <img src={strDrinkThumb} className="img-fluid" style={{ height: '200px' }} alt="img" />
                <div className="card-body text-center">
                    <Link to={`/singleMeal/` + idDrink}>
                        <h5>{strDrink}</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllPopularItemDisplay;