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

    return(
        <div className={
            `flex absolute lg:text-[1.2rem] xl:text-[1.5rem] gap-[50px] right-[9%] lg:right-[15%] xl:right-[14%] z-[9999]
            ${ismobile? "bottom-[4.5%]" : "bottom-[8%]"}
        `}>
            <button className=" bg-orange rounded-[8px] px-[16px] "><h3>SEND MAIL</h3></button>
            <button onClick={handleContactButton} className=" bg-orange rounded-[8px] px-[16px] "><h3>CONTACT ME</h3></button>
        </div>
    );
}

export default ContactButtons;