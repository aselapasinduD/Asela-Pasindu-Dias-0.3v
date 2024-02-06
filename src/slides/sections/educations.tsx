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
        const contactElement = document.getElementById("educations")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    handleClick();

    return(
        <div className="bg-black w-[100%] h-[100%]">
            <SectionNavBar title="EDUCATIONS" handleBackButton={handleClick} ismobile={ismobile} />
            <h1 className="text-center">Under Construction</h1>
        </div>
    );
}

const Educations = (props: props) => {
    const {ismobile} = props;
    return(
        <Slide id="educations" className={`${ismobile? "translate-x-[-4px]" : "translate-x-[-30px] lg:translate-x-[-50px]" }`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Educations;