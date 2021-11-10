import React from 'react';

const CartDisplay = (props) => {
    const { strDrink, strTags, strCategory, strIBA, strAlcoholic, strGlass, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strInstructions } = props.item;
    console.log(props)
    return (
        <div style={{ marginTop: '150px' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-0 ">
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
                </div>
            </div>
        </div>
    );
};

export default CartDisplay;