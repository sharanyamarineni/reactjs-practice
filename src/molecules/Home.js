import React from "react";
import HomeHtag from "../atoms/HomeHtag";

const Home = props => {
    const { name } = props;
    return(
            <HomeHtag>Welcome to {name}</HomeHtag>
    )
}

export default Home