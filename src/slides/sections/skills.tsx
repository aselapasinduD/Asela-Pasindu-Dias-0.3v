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
    const {className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();

    const isOpenSkillsSection = useAppSelector((state) => state.section.skillsSection);

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const helper = new Helper();

    const title = "SKILLS";

    useEffect(() => {
        if(isOpenSkillsSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenSkillsSection]);
    

    return(
        <div className={`bg-black w-[100%] h-[100%] ${className? className : "" }`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('skillsSection'))} ismobile={ismobile} />
            <h1 className=" text-center ">Under Construction</h1>
        </div>
    );
}

const Skills = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.skillsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    const openSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="skills" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Skills;