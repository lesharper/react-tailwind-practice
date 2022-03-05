import React from 'react';
import ImageOne from "../images/egg.jpg"
import ImageTwo from "../images/egg-2.jpg"
import Post from "./Post";

const Content = () => {
    return (
        <>
            <Post photo={ImageOne}
                  title="Egg Muffins"
                  description="Cripsy, delicious, and nutritious"
                  price="$17"
            />
            <Post photo={ImageTwo}
                  title="Egg Muffins"
                  description="Cripsy, delicious, and nutritious"
                  price="$17"
            />
        </>
    );
}

export default Content;