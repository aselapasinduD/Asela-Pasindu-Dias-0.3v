interface props {
    ismobile?: boolean
}

const Menu = (props: props) => {
    const {ismobile} = props;

    const moveAboutMeSlide = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    return(
        <div  className={
            `flex text-[0.9rem] lg:text-[1rem] 
            ${ismobile? "justify-center py-[5px] gap-[40px]" : "justify-end pr-[9%] gap-[24px] lg:gap-[50px]"}
        `}>
            <button onClick={() => moveAboutMeSlide()}>ABOUT ME</button>
            <a href="#">VEBDRAKstudio</a>
            <a href="#">MY BLOG</a>
        </div>
    );
}

export default Menu;