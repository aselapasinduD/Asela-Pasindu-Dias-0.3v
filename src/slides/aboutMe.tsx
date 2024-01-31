import React from "react";
import Slide from "../components/slide";

import "./styles/aboutme.css";

interface props {
    ViewportSize: number[];
    className?: string
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;

    const handleClick = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    handleClick();

    return (
        <div className={`aboutme bg-orange w-[100%] h-[100%] ${className? className : ""}`}>
            <p>ABOUT ME</p>
            <h1>WHO AM I</h1>
            <button onClick={handleClick}>Click ME</button>
        </div>
    );
}

const AboutMe = (props: props) => {

    return(
        <Slide id="aboutme">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default AboutMe;