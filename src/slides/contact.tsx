import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";

import "./styles/contact.css";

interface props {
    ViewportSize: number[],
    className?: string
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;

    console.log("Is Mobile: " + ismobile);

    const handleclick = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top = `-${ViewportSize[1]}px`;
    }
    handleclick();

    return (
        <div className={`contact ${className? className: ""} bg-orange w-[100%] h-[100%]`}>
            <SectionNavBar title="CONTACT" handleBackButton={handleclick} ismobile={ismobile} />
            <h1 className=" text-center ">Under Construction</h1>
        </div>
    );
}

const Contact = (props: props) => {

    return(
        <Slide id="contact" className=" z-[9999]">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Contact;