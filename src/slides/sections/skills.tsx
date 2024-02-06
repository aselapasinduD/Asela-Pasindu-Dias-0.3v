import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

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

    const handleClick = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    handleClick();

    return(
        <div className={`bg-black w-[100%] h-[100%] ${className? className : "" }`}>
            <SectionNavBar title="SKILLS" handleBackButton={handleClick} ismobile={ismobile} />
            <h1 className=" text-center ">Under Construction</h1>
        </div>
    );
}

const Skills = (props: props) => {
    const {ismobile} = props;
    return(
        <Slide id="skills" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Skills;