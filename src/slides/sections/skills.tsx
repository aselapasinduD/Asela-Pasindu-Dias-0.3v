import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";
import ContactButtons from "../../components/contactButtons";

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
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    handleClick();

    return(
        <div className="bg-black w-[100%] h-[100%]">
            <SectionNavBar title="SKILLS" handleBackButton={handleClick} />
            <h1 className=" text-center ">Under Construction</h1>
            <ContactButtons />
        </div>
    );
}

const Skills = (props: props) => {
    return(
        <Slide id="skills" className="translate-x-[-30px] lg:translate-x-[-50px]">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Skills;