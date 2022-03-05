import React from 'react';

const Post = ({photo, title, description, price}) => {
    return (
        <div className="menu-card">
            <img src={photo} alt="egg" className="h-full rounded mb-20 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">{title}</h2>
                <p className="mb-2">{description}</p>
                <span>{price}</span>
            </div>
        </div>
    );
}

export default Post;