const Menu = () => {

    const moveAboutMeSlide = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    return(
        <div  className=" flex justify-end gap-[40px] pr-[12%] ">
            <button onClick={() => moveAboutMeSlide()}>ABOUT ME</button>
            <a href="#">VEBDRAKstudio</a>
            <a href="#">MY BLOG</a>
        </div>
    );
}

export default Menu;