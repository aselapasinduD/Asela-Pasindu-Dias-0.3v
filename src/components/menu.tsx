const Menu = () => {

    const moveAboutMeSlide = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    return(
        <div  className=" flex justify-end text-[0.9rem] gap-[24px] pr-[9%] ">
            <button onClick={() => moveAboutMeSlide()}>ABOUT ME</button>
            <a href="#">VEBDRAKstudio</a>
            <a href="#">MY BLOG</a>
        </div>
    );
}

export default Menu;