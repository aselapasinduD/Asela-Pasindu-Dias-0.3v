import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";

import "./styles/contact.css";
import { useAppDispatch, useAppSelector } from "../states/hooks";
import { closeSection } from "../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../helper/helper";

interface props {
    ViewportSize: number[],
    className?: string
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();

    const isOpenContactSection = useAppSelector((state) => state.section.contactSection);

    const title = "CONTACT";

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const helper = new Helper();

    useEffect(() => {
        if(isOpenContactSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenContactSection]);


    return (
        <div className={`contact ${className? className: ""} bg-orange w-[100%] h-[100%]`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('contactSection'))} ismobile={ismobile} />
            <h1 className=" text-center ">Under Construction</h1>
        </div>
    );
}

const Contact = (props: props) => {
    const { ViewportSize } = props;
    const isOpenContactSection = useAppSelector((state) => state.section.contactSection);

    const closeContactSection = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = "0.5s";
    }
    const openContactSection = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top ="0";
        if(contactElement) contactElement.transitionDuration = "0.2s";
    }
    if(isOpenContactSection){
        openContactSection();
    } else {
        closeContactSection();
    }

    return(
        <Slide id="contact" className=" z-[9999]">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Contact;