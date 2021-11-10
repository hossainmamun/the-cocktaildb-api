import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ItemDisplay from '../ItemDisplay/ItemDisplay.js';

const SearchCocktail = () => {
    const [search, setSearch] = useState('');
    const [cocktails, setCocktails] = useState([])

    const handleChange = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => response.json())
            .then(data => {
                const cocktailSlice = data.drinks?.slice(0, 24)
                setCocktails(cocktailSlice)
            })
    }, [search])

    return (
        <div className="container" style={{marginBottom: '100px'}}>
            <div className="header-section mb-4">
                <h2>search you favorite cocktail</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div class="input-group">
                        <input type="text" class="form-control bg-transparent" placeholder="search your favorite cocktail" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="text-center my-4">
                {
                    cocktails ? <h4>{`total items found : ${cocktails?.length}`}</h4> : <h4>Search did't matched</h4>
                }
            </div>
            <div className="row">
                <div className="header-section">
                    <h2>recommended items</h2>
                    <p>mod khabi manus hobi!! mod ka, mod ka......</p>
                </div>
                {
                    cocktails?.map(cocktail => <ItemDisplay cocktail={cocktail} key={cocktail.idDrink} />)
                }
            </div>
        </div>
    );
};

export default SearchCocktail;