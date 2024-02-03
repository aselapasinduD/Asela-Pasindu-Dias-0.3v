import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";
import ContactButtons from "../components/contactButtons";

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
    // handleClick();

    return (
        <div className={`aboutme flex flex-col bg-black w-[100%] h-[100%] ${className? className : ""}`}>
            <div className=" flex flex-col text-[1.8rem] absolute right-[200px] top-[200px] ">
                <button>
                    <h1 className=" text-start leading-tight ">SKILLS</h1>
                </button>
                <button>
                    <h1 className=" text-start leading-tight ">EDUCATIONS</h1>
                </button>
                <button>
                    <h1 className=" text-start leading-tight ">PROJECTS</h1>
                </button>
            </div>
            <SectionNavBar title="WHO AM I" handleBackButton={handleClick} />
            <div className=" flex-grow flex flex-col ml-[120px] justify-evenly text-[1.5rem] leading-none ">
                <p className=" w-[500px] font-bold ">
                    Hello. I'm Asela Pasindu Dias. I'm a multi-talented person who has over 4+ years of experience in a variety of design disciplines, coding, and research fields.
                </p>
                <p className=" w-[500px] ml-[130px] font-light ">
                    Additionally, I'm Doing UI/UX design, software development, and full-stack web development, Three.JS development, C# development. I'm also interested in varieties of programming languages and the concept of disciplines in programming.
                </p>
                <p className=" w-[624px] ml-[280px] font-light ">
                    I prefer not to use my past work to define who I am. I define myself by the work I want to do. Although personality cannot be taught, skills can. I prefer to continue learning, to challenge myself, and to engage in worthwhile activities.
                </p>
                <p className=" ml-[280px] font-light ">
                    I'm passionate about learning new things and conducting research. I have published on Medium.com about my research and my ideas. I'm an enthusiast of science, quantum physics, astronomy, and UAP (UFO).
                </p>
                <p className=" w-[688px] font-light ">
                    Over the course of my life and profession, I like to gain competence in a variety of subjects. I am an ENFJ-T personality type. I now conduct remote work with a chosen group of freelancing clients, but I'm always interested in new opportunities.
                </p>
            </div>
            <div className=" absolute top-[268px] ml-[53px] ">
                <svg height="500">
                    <polygon points="0,0 0,360 250,500" fill="transparent" stroke="#ff6600" stroke-width="3" />
                </svg>
            </div>
            <ContactButtons />
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