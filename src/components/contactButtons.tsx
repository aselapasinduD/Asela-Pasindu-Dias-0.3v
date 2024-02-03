const ContactButtons = () => {

    const handleContactButton = () => {
        console.log("Click is Working");
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top ="0";
    }

    return(
        <div className=" flex absolute lg:text-[1.2rem] justify-end gap-[50px] right-[9%] lg:right-[15%] bottom-[8%] ">
            <button className=" bg-orange rounded-[8px] px-[16px] "><h3>SEND MAIL</h3></button>
            <button onClick={handleContactButton} className=" bg-orange rounded-[8px] px-[16px] "><h3>CONTACT ME</h3></button>
        </div>
    );
}

export default ContactButtons;