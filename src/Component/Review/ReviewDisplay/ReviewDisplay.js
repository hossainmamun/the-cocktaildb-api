import React from 'react';

const ReviewDisplay = (props) => {
    const { img, name, comment } = props.review;

    return (
        <div className="col mx-3 shadow">
            <div className="card border-0 text-center">
                <img src={img} className="img-fluid" alt="img" />
                <div className="card-body">
                    <h4 className="text-capitalize">{name}</h4>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDisplay;