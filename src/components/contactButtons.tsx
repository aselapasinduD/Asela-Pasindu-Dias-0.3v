import { useAppDispatch, useAppSelector } from "../states/hooks";
import { toggleSection } from "../states/sectionSlice";

interface props {
    ismobile?: boolean,
    className?: string,
    ViewportSize: number[],
}

const ContactButtons = (props: props) => {
    const {ismobile, ViewportSize, className} = props;
    const dispatch = useAppDispatch();

    const handleSendMailButton = () => {
        console.log("Send Mail Button is Working");
    }

    return(
        <div className={
            `w-max absolute flex gap-[40px] left-[50%] translate-x-[-50%] bottom-[4%]
            [&>button]:bg-orange [&>button]:rounded-[8px] [&>button]:px-[16px]
            sm:text-[1.4rem]
            lg:translate-x-[40%] lg:text-[1.6rem] lg:gap-[60px]
            ${className? className : ""}
        `}>
            <button onClick={(handleSendMailButton)}><h3>SEND MAIL</h3></button>
            <button onClick={() => dispatch(toggleSection('contactSection'))}><h3>CONTACT ME</h3></button>
        </div>
    );
}

export default ContactButtons;