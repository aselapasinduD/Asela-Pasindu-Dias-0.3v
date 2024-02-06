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
            `flex justify-center text-[0.8rem] gap-[30px] pt-[10px]
            mb400:text-[0.9rem]
        `}>
            <button onClick={() => moveAboutMeSlide()}>ABOUT ME</button>
            <a href="#">VEBDRAKstudio</a>
            <a href="#">MY BLOG</a>
        </div>
    );
}

export default Menu;