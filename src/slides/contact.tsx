import Slide from "../components/slide";

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
            <p className="text-black">CONTACT</p>
            <button className="text-black" onClick={() => handleclick()}>Click Me</button>
        </div>
    );
}

const Contact = (props: props) => {

    return(
        <Slide id="contact">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Contact;