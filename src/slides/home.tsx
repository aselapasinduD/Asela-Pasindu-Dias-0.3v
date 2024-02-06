import Slide from "../components/slide";
import Logo from "../components/logo";

import { SocialIcons } from "../assests/Icons/socialIcons";
import ContactButtons from "../components/contactButtons";

import "./styles/home.css";
import Menu from "../components/menu";

const iconColor = "#ffffff";

const socialIconList = [
    {
        icon: SocialIcons(iconColor).linkedin,
        url: "https://www.linkedin.com/in/asela-pasindu-dias-55a7a7210"
    },
    {
        icon: SocialIcons(iconColor).github,
        url: "https://github.com/aselapasinduD"
    },
    {
        icon: SocialIcons(iconColor).instagram,
        url: "https://www.instagram.com/asel_pasindu/"
    },
    {
        icon: SocialIcons(iconColor).whatsapp,
        url: "https://wa.me/message/LZH7ESTX73MWD1"
    },
    {
        icon: SocialIcons(iconColor).twitter,
        url: "https://twitter.com/Asela_Pasindu_D"
    },
    {
        icon: SocialIcons(iconColor).facebook,
        url: "https://web.facebook.com/AselPasindu"
    }
];

interface props {
    ViewportSize: number[],
    className?: string
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

const headTopic = () => {
    const word = "Asela Pasindu Dias";
    const wordList = word.split(" ");

    return(
        <div className=" leading-[5em]">
            {wordList.map((oneWord, index) => {
                return(
                    <div key={index} className="tracking-[0.6em] w-[100%]">
                        <div><h1 className=" text-[3rem] mb390:text-[4rem] leading-none ">{oneWord.toUpperCase()}</h1></div>
                    </div>
                )
            })}
        </div>
    );
}

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;

    console.log("Is Mobile: " + ismobile);

    return (
        <div className={`home bg-black flex flex-col w-[100%] h-[100%] ${className? className : ""}`}>
                <nav className={
                    `flex w-[100%] items-center py-[8px] px-[24px]
                `}>
                    <span className="flex grow gap-[18px] socilIcons [&_svg]:w-[20px] [&_svg]:h-[20px]">
                        {socialIconList.map((socialIcon, index) => {
                            return <span key={index} className=" socialIcon block ">
                                <a href={socialIcon.url}>{socialIcon.icon}</a>
                            </span>
                        })}
                    </span>
                    <Logo />
                </nav>
                <div className=" flex flex-col flex-1 border-[3px] border-orange rounded-[20px] ">
                    <Menu ismobile={ismobile} />
                    <div className={
                        `home-main relative h-[100%] mx-[8px] mb-[14px] 
                        mb390:mb-[70px]
                    `}>
                        <p className={
                            `static tracking-[0.3em] text-[1.2rem] text-center pt-[10px]
                        `}>
                            WELCOME TO MY HOME
                        </p>
                        <div className={
                            `static
                        `}>
                            {headTopic()}
                        </div>
                        <h2 className={
                            `hidden
                        `}>
                            {'var me = “ME”;'}
                            <br />
                            {'var you = “YOU”;'}
                            <br />
                            <br />
                            {'try{'}
                            <br />
                            &emsp;{'const hireMe = you.contact(me);'}
                            <br />
                            &emsp;{'if(!hireMe){'}
                            <br />
                            &emsp;&emsp;{'throw error;'}
                            <br />
                            &emsp;{'}'}
                            <br />
                            {'} catch (error) {'}
                            <br />
                            &emsp;{'console.log(“YOU MUST HIRE ME: ”, error);'}
                            <br />
                            {'}'}
                        </h2>
                    </div>
                </div>
                <ContactButtons ismobile={ismobile} />
            </div>
    );
}

const Home = (props: props) => {
    return(
        <Slide id="home">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Home;