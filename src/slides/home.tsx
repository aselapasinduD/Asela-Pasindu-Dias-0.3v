import { useEffect, useState } from "react";

import { SocialIcons } from "../assests/Icons/socialIcons";
import { svgLoadingScreen1, svgLoadingScreen2, svgLoadingScreen3 } from "../assests/loading-screen";
import "./styles/home.css";

import ContactButtons from "../components/contactButtons";
import Menu from "../components/menu";
import Helper from "../helper/helper";
import Slide from "../components/slide";
import Logo from "../components/logo";

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

const HeadTopic = () => {
    const [stringList, setStringList] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [counterLimit, setCounterLimit] = useState<number>(0);

    const topic1 = "Asela Pasindu Dias";
    const topic2 = "Full Stack Developer";
    const topic3 = "Code Programmer Developer";
    const topic1List = topic1.split(" ");
    const topic2List = topic2.split(" ");
    const topic3List = topic3.split(" ");


    const listOfCharacters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/~`";

    useEffect(() => {
        setCounterLimit(topic1List.reduce((max, word) => Math.max(max, word.length), 0));
    });

    useEffect(() => {
        // console.log(counterLimit);
        if(counter > counterLimit){
            return;
        }
        const stringAnimation = setInterval(() => {
            const updatedList = topic1List.map((word)=> {
                // console.log("before word: " + word.length);
                const remaningLength = word.slice(counter, -1).length;
                word = word.slice(0, counter) + " ".repeat(remaningLength);
                // console.log("after word: " + word.length);
                return`${word}-${counter}`
            });
            setStringList(updatedList);
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000);
        return () => clearInterval(stringAnimation);
    }, [counter]);

    return(
        <div className="leading-[5em]">
            {stringList.map((oneWord, index) => {
                return(
                    <div key={index} className="tracking-[0.6rem] w-[100%] sm:tracking-[0.9rem] lg:tracking-[0.6rem]">
                        <div>
                            <h1 className="text-[3rem] mb390:text-[4rem] leading-none sm:text-[4.5rem] sm:text-end lg:text-start xl:leading-tight">
                                {oneWord.toUpperCase()}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;

    console.log("Is Mobile: " + ismobile);

    useEffect(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if(loadingScreen){
            const Loaded = setTimeout(() => {
                loadingScreen.style.display = 'none';
                loadingScreen.remove();
            }, 1000 * 6);

            return () => clearTimeout(Loaded);
        }
    });

    return (
        <div className={`home bg-black flex flex-col w-[100%] h-[100%] ${className? className : ""}`}>
            <nav className={`flex w-[100%] items-center py-[8px] px-[24px] md:py-[12px] md:px-[28px]`}>
                <span className="
                        flex grow gap-[18px] socilIcons [&_svg]:w-[20px] [&_svg]:h-[20px]
                        sm:[&_svg]:w-[26px] sm:[&_svg]:h-[26px]
                        lg:[&_svg]:w-[32px] lg:[&_svg]:h-[32px]
                    ">
                    {socialIconList.map((socialIcon, index) => {
                        return <span key={index} className=" socialIcon block ">
                            <a href={socialIcon.url}>{socialIcon.icon}</a>
                        </span>
                    })}
                </span>
                <Logo />
            </nav>
            <div className="flex relative flex-col flex-1 border-[3px] border-orange rounded-[20px] overflow-hidden">
                <div id="loading-screen" className="loadingscreen absolute w-full h-full z-10 [&_svg]:absolute [&_svg]:h-full [&_svg]:w-full [&_svg]:top-0 [&_svg]:left-0">
                    <div className="relative [&_:first-child]:left-[-1px] lg:[&_:nth-child(2)]:top-[3px] [&_:nth-child(2)]:left-[-2px] lg:[&_:nth-child(2)]:left-[-1px] [&_:nth-child(3)]:left-[-4px] lg:[&_:nth-child(3)]:left-0 aspect-[45/32] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full lg:h-auto [@media(max-width:1366px)]:h-full">
                        {svgLoadingScreen1}
                        {svgLoadingScreen2}
                        {svgLoadingScreen3}
                    </div>
                </div>
                <Menu ismobile={ismobile} />
                <div className={`home-main relative h-[100%] mx-[8px] mb-[14px] mb390:mb-[70px] lg:mb-[30px]`}>
                    <p className={
                        `static tracking-[0.3rem] text-[1.2rem] text-center pt-[10px]
                        sm:text-[1.4rem] sm:tracking-[0.5rem]
                        md:py-[18px] md:text-[1.7rem]
                        lg:absolute lg:left-[20%] lg:top-[11%]
                        xl:left-[35%] xl:text-[1.1rem] xl:top-[24%] xl:py-[0px]
                    `}>
                        WELCOME TO MY HOME
                    </p>
                    <div className={
                        `static
                        lg:absolute lg:left-[72%] lg:top-[6%]
                        xl:left-[62%]
                    `}>
                        <HeadTopic />
                    </div>
                    <h2 className={
                        `hidden
                        lg:block lg:absolute lg:left-[680px] lg:top-[48%]
                        xl:top-[44%] xl:left-[670px]
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