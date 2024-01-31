const ContactButtons = () => {

    const handleContactButton = () => {
        console.log("Click is Working");
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top ="0";
    }

    return(
        <div className=" flex absolute justify-end gap-[50px] right-[16%] bottom-[8.6%] ">
            <button className=" bg-orange rounded-[8px] px-[16px] py-[6px] ">SEND MAIL</button>
            <button onClick={handleContactButton} className=" bg-orange rounded-[8px] px-[16px] py-[6px] ">CONTACT ME</button>
        </div>
    );
}

export default ContactButtons;