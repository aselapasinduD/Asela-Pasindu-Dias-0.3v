interface props {
    ismobile?: boolean
}

const ContactButtons = (props: props) => {
    const {ismobile} = props;

    const handleContactButton = () => {
        console.log("Click is Working");
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top ="0";
    }

    const handleSendMailButton = () => {
        console.log("Send Mail Button is Working");
    }

    return(
        <div className={
            `w-max absolute flex gap-[40px] left-[50%] translate-x-[-50%] bottom-[4%]
            [&>button]:bg-orange [&>button]:rounded-[8px] [&>button]:px-[16px]
        `}>
            <button onClick={handleSendMailButton}><h3>SEND MAIL</h3></button>
            <button onClick={handleContactButton}><h3>CONTACT ME</h3></button>
        </div>
    );
}

export default ContactButtons;