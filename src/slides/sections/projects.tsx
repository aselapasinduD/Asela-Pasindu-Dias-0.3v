import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { SocialIcons } from "../../assests/Icons/socialIcons";
import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

import projectImagePlaceHolder from "../../assests/project-image-holder.png";
import fullstackAdminMern from "../../assests/project_images/fullstack-admin-mern.png";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const iconColor = "#ffffff";

const projectList = [
    {
        name: 'Fullstack Admin Panel',
        date: '2024/03',
        details: 'Modern and responsive admin panel with dynamic dashboards, data visualization, and client management, ensuring seamless control over business operations.',
        imageURL: fullstackAdminMern,
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/fullstack-admin-mern"
            },
            {
                icon: SocialIcons(iconColor).web,
                url: "https://admin-frontend-wjs8.onrender.com"
            },
        ]
    },
    {
        name: 'Markdown Editor',
        date: '2024/03',
        details: 'Project Details',
        imageURL: '',
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Markdown-Editor-electron"
            },
            {
                icon: SocialIcons(iconColor).web,
                url: "https://www.linkedin.com/in/asela-pasindu-dias-55a7a7210"
            },
        ]
    }
]

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

    const projectCardStyle = {'--card-width': '230px', '--card-height': '345px'} as React.CSSProperties;

    return(
        <div className="bg-black w-[100%] h-[100%] overflow-hidden">
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('projectsSection'))} ismobile={ismobile} />
            <div className="project-list flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-4 bg-[#d9d9d920] p-3" style={projectCardStyle}>
                {projectList.map((project, index) =>
                    <div key={index} className="project-card relative w-full sm:w-[var(--card-width)] h-[var(--card-height)] border-[var(--secondary-color)] overflow-hidden">
                        <div className="project-card-top relative h-1/2 bg-[#ffffff] flex justify-center items-center overflow-hidden">
                            <img src={project.imageURL !== ''? project.imageURL : projectImagePlaceHolder} alt="Project Main Image" className="project-card-image h-full w-full object-cover"/>
                            <div className="project-card-inside absolute w-[140%] aspect-square bg-[var(--secondary-color)] top-1/2 left-1/2 translate-x-[calc(var(--card-width)/2)] translate-y-[calc(var(--card-height)/4)] rounded-[999999px]">
                            </div>
                        </div>
                        <div className="relative h-1/2 p-2">
                            <hr />
                            <div className="flex justify-between items-center my-1">
                                <h4 className="text-[0.9rem] leading-none">{project.name}</h4>
                                <p className="text-[0.7rem]">{project.date}</p>
                            </div>
                            <div className="flex gap-2">
                                {project.socialIconList.map((socialIcon, index) =>
                                    <span key={index} className="socialIcon block [&_svg]:w-[20px] [&_svg]:h-[20px]">
                                        <a href={socialIcon.url}>{socialIcon.icon}</a>
                                    </span>
                                )}
                            </div>
                            <p className="text-[0.8rem] leading-none my-1">{project.details}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const Projects = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.projectsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
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