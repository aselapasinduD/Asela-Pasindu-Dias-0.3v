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

    console.log("Is Mobile: " + ismobile);

    const handleClick = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    // handleClick();

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
                `flex flex-col absolute [&_h1]:leading-tight
                ${ismobile? "text-[1.5rem] [&_h1]:text-end right-[10px] top-[95px]" : "text-[1.8rem] xl:text-[2rem] [&_h1]:text-start right-[110px] xl:right-[200px] top-[140px] xl:top-[160px]"}
            `}>
                <button onClick={BringFrontSkillsSlide}>
                    <h1>SKILLS</h1>
                </button>
                <button onClick={BringFrontEducationsSlide}>
                    <h1>EDUCATIONS</h1>
                </button>
                <button onClick={BringFrontProjectsSlide}>
                    <h1>PROJECTS</h1>
                </button>
            </div>
            <div className={
                `flex-grow flex flex-col leading-tight
                ${ismobile? "ml-[0] px-[4px] text-[1rem] gap-[20px] z-[1]" : "ml-[90px] lg:ml-[120px] text-[1.1rem] xl:text-[1.24rem] justify-evenly"}
            `}>
                <p className={
                    `font-bold
                    ${ismobile? "w-[50%]" : "w-[400px] lg:w-[500px]"}
                `}>
                    Hello. I'm Asela Pasindu Dias. I'm a multi-talented person who has over 4+ years of experience in a variety of design disciplines, coding, and research fields.
                </p>
                <p className={
                    `font-light
                    ${ismobile? "ml-[0] w-fit" : "w-[400px] lg:w-[500px] ml-[100px]"}
                `}>
                    Additionally, I'm Doing UI/UX design, software development, and full-stack web development, Three.JS development, C# development. I'm also interested in varieties of programming languages and the concept of disciplines in programming.
                </p>
                <p className={
                    `font-light
                    ${ismobile? "ml-[0] w-fit" : "w-[480px] xl:w-[660px] ml-[220px]"}
                `}>
                    I prefer not to use my past work to define who I am. I define myself by the work I want to do. Although personality cannot be taught, skills can. I prefer to continue learning, to challenge myself, and to engage in worthwhile activities.
                </p>
                <p className={
                    `font-light
                    ${ismobile? "ml-[0] w-fit" : "ml-[220px]"}
                `}>
                    I'm passionate about learning new things and conducting research. I have published on Medium.com about my research and my ideas. I'm an enthusiast of science, quantum physics, astronomy, and UAP (UFO).
                </p>
                <p className={
                    `w-[500px] font-light
                    ${ismobile? "w-fit" : ""}
                `}>
                    Over the course of my life and profession, I like to gain competence in a variety of subjects. I am an ENFJ-T personality type. I now conduct remote work with a chosen group of freelancing clients, but I'm always interested in new opportunities.
                </p>
            </div>
            <div className={
                `absolute ml-[34px] lg:ml-[50px]
                ${ismobile? "top-[360px] blur-[2px]" : "top-[222px] xl:top-[233px]"}
            `}>
                <svg height="385">
                    <polygon points="2,6 2,260 220,380" fill="transparent" stroke="#ff6600" strokeWidth="3" />
                </svg>
            </div>
            <ContactButtons ismobile={ismobile} />
            <Skills ViewportSize={ViewportSize} />
            <Educations ViewportSize={ViewportSize} />
            <Projects ViewportSize={ViewportSize} />
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