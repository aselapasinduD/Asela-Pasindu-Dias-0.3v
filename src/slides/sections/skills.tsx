import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

import skillImageHolder from "../../assests/skill-image-holder.png";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const SkillList = [
    {
        name: 'Problem Solving',
        details: 'Skill Details',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: ""
    },
    {
        name: 'Research and Development (R&D)',
        details: 'Skill Details',
        spanSizeCol: 2,
        spanSizeRow: 1,
        imageURL: ""
    },
    {
        name: 'Designing',
        details: 'Skill Details',
        spanSizeCol: 1,
        spanSizeRow: 2,
        imageURL: ""
    },
    {
        name: 'Solution Architecture',
        details: 'Skill Details',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: ""
    },
    {
        name: 'Full-Stack Development',
        details: 'Skill Details',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: ""
    },
    {
        name: 'Communication',
        details: 'Skill Details',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: ""
    },
]

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
        <div className={`bg-black w-[100%] h-[100%] overflow-y-scroll sm:overflow-y-hidden ${className? className : "" }`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('skillsSection'))} ismobile={ismobile} className='z-10' />
            <div className="px-6 sm:px-0 grid grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] grid-rows-[repeat(6,186px)] sm:grid-rows-[repeat(3,186px)] lg:grid-rows-[repeat(2,186px)] gap-x-4 lg:gap-x-6">
                {SkillList.map((skill, index) =>
                        <div key={index} className="skill-card h-full" style={{gridColumn: "span " + skill.spanSizeCol, gridRow: "span " + skill.spanSizeRow}}>
                            <div className="relative h-[calc(100%-1.5rem)] overflow-hidden [&>div]:hover:left-0">
                                <img src={`${skill.imageURL !== ""? skill.imageURL : skillImageHolder}`} className="w-full h-full object-cover" alt="Skill Image" />
                                <div className="absolute h-full w-full p-2 top-0 bg-[#27272a80] -left-[100%] transition-all easy-in-out duration-500">
                                    <p>{skill.details}</p>
                                </div>
                            </div>
                            <h2 className="leading-none text-[1.5rem] sm:text-[1.2rem] md:text-[1.5rem] text-center sm:text-left">{skill.name.toUpperCase()}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

const Skills = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.skillsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
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