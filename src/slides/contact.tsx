import Slide from "../components/slide";
import Back from "../components/back";
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

    const handleclick = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top = `-${ViewportSize[1]}px`;
    }
    handleclick();

    return (
        <div className={`contact ${className? className: ""} bg-orange w-[100%] h-[100%]`}>
            <SectionNavBar title="CONTACT" handleBackButton={handleclick} />
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