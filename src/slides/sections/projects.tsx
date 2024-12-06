import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();
    const helper = new Helper();

    const isOpenProjectsSection = useAppSelector((state) => state.section.projectsSection);

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);

    const title = "PROJECTS";

    useEffect(() => {
        if(isOpenProjectsSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenProjectsSection]);
    

    return(
        <div className="bg-black w-[100%] h-[100%]">
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('projectsSection'))} ismobile={ismobile} />
            <h1 className="text-center">Under Construction</h1>
        </div>
    );
}

const Projects = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.projectsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    const openSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="projects" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`} >
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Projects;