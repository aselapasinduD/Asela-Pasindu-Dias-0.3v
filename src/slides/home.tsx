import Slide from "../components/slide";

import { SocialIcons } from "../assests/Icons/socialIcons";
import Logo from "../assests/Icons/LOGO.svg";
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
                    <div key={index} className="tracking-[0.5em] w-[100%]">
                        <div><h1 className=" text-[4.4em]">{oneWord.toUpperCase()}</h1></div>
                    </div>
                )
            })}
        </div>
    );
}

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    console.log(childrenProps);

    return (
        <div className={` home bg-black flex flex-col w-[100%] h-[100%] ${className? className : ""}`}>
                <nav className="flex w-[100%] items-center py-[15px] px-[35px]">
                    <span className="flex grow gap-[20px] socilIcons">
                        {socialIconList.map((socialIcon, index) => {
                            return <span key={index} className=" socialIcon block ">
                                <a href={socialIcon.url}>{socialIcon.icon}</a>
                            </span>
                        })}
                    </span>
                    <img className="flex-end" src={Logo}/>
                </nav>
                <div className=" flex flex-col flex-1 border-2 border-orange rounded-[30px] ">
                    <Menu />
                    <div className=" home-main relative h-[100%] mx-[28px] mb-[32px] ">
                        <p className=" absolute tracking-[0.3em] text-[1.16rem] top-[24.5%] left-[39%] ">
                            WELCOME TO MY HOME
                        </p>
                        <div className=" absolute top-[8%] left-[65%]">
                            {headTopic()}
                        </div>
                        <h2 className=" absolute leading-[1.5em] bottom-[6%] left-[55%]">
                            {'var me = “ME”;'}
                            <br />
                            {'var you = “YOU”;'}
                            <br />
                            <br />
                            {'try{'}
                            <br />
                            &emsp;{'const hireMe = you.contact(me);'}
                            <br />
                            &emsp;{'if(hireMe){'}
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
                <ContactButtons />
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