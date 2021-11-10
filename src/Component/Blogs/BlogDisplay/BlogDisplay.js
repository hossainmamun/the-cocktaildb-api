import React from 'react';


const BlogDisplay = (props) => {
    const { img, title, describe } = props.blog
    return (
        <div className="col m-3">
            <div className="card border-0 shadow">
                <img src={img} className="img-fluid" alt="img" />
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{describe}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDisplay;