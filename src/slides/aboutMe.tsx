import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";
import ContactButtons from "../components/contactButtons";

import Educations from "./sections/educations";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

import "./styles/aboutme.css";
import "./styles/sectionsSlideAnimation.css";

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

    const BringFrontSkillsSlide = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = '0px';

    }

    const BringFrontEducationsSlide = () => {
        const contactElement = document.getElementById("educations")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    const BringFrontProjectsSlide = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    return (
        <div className={`aboutme flex flex-col bg-black w-[100%] h-[100%] ${className? className : ""}`}>
            <SectionNavBar title="WHO AM I" handleBackButton={handleClick} ismobile={ismobile} />
            <div className={
                `text-[1.2rem] flex flex-col absolute right-[12px] top-[76px]
                [&_h1]:leading-[3rem] [&_h1]:text-end
                mb390:text-[1.4rem] mb390:[&_h1]:leading-tight mb390:top-[92px]
                sm:text-[1.8rem] sm:mr-[50px]
                md:text-[1.9rem] md:top-[100px] md:right-[45px]
                lg:top-[180px] lg:text-[2rem] lg:right-[60px]
            `}>
                <button type="button" onClick={BringFrontSkillsSlide}>
                    <h1>SKILLS</h1>
                </button>
                <button type="button" onClick={BringFrontEducationsSlide}>
                    <h1>EDUCATIONS</h1>
                </button>
                <button type="button" onClick={BringFrontProjectsSlide}>
                    <h1>PROJECTS</h1>
                </button>
            </div>
            <div className={
                `flex-grow flex flex-col justify-around leading-none
                mb-[54px] text-[0.9rem] px-[2px]
                mb390:px-[6px] mb390:text-[1.1rem]
                sm:text-[1.4rem]
                md:justify-evenly md:text-[1.5rem]
                lg:text-[1.5rem] lg:ml-[80px] lg:mb-[20px]
            `}>
                <p className={
                    `w-[50%] font-bold
                    lg:w-[500px]
                `}>
                    Hello. I'm Asela Pasindu Dias. I'm a multi-talented person who has over 4+ years of experience in a variety of design disciplines, coding, and research fields.
                </p>
                <p className={
                    `font-light
                    lg:w-[500px] lg:ml-[100px]
                `}>
                    Additionally, I'm Doing UI/UX design, software development, and full-stack web development, Three.JS development, C# development. I'm also interested in varieties of programming languages and the concept of disciplines in programming.
                </p>
                <p className={
                    `font-light
                    lg:w-[640px] lg:ml-[200px]
                `}>
                    I prefer not to use my past work to define who I am. I define myself by the work I want to do. Although personality cannot be taught, skills can. I prefer to continue learning, to challenge myself, and to engage in worthwhile activities.
                </p>
                <p className={
                    `font-light
                    lg:w-fit lg:ml-[200px]
                `}>
                    I'm passionate about learning new things and conducting research. I have published on Medium.com about my research and my ideas. I'm an enthusiast of science, quantum physics, astronomy, and UAP (UFO).
                </p>
                <p className={
                    `w-fit font-light
                    lg:w-[650px]
                `}>
                    Over the course of my life and profession, I like to gain competence in a variety of subjects. I am an ENFJ-T personality type. I now conduct remote work with a chosen group of freelancing clients, but I'm always interested in new opportunities.
                </p>
            </div>
            <div className={
                `absolute ml-[10px] top-[210px] blur-[2px] [&>svg]:w-[230px]
                lg:top-[280px] lg:ml-[30px] lg:blur-[0px]
            `}>
                <svg height="385">
                    <polygon points="2,6 2,260 220,380" fill="transparent" stroke="#ff6600" strokeWidth="3" />
                </svg>
            </div>
            <ContactButtons ismobile={ismobile} className="z-[9999]" />
            <Skills ViewportSize={ViewportSize} ismobile={ismobile} />
            <Educations ViewportSize={ViewportSize} ismobile={ismobile} />
            <Projects ViewportSize={ViewportSize} ismobile={ismobile} />
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