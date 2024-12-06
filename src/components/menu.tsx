import { useEffect, useState } from "react";
import Helper from "../helper/helper";

import { useAppDispatch } from "../states/hooks";
import { toggleSection } from "../states/sectionSlice";

interface props {
    ismobile?: boolean;
}

const Menu = (props: props) => {
    const {ismobile} = props;
    const helper = new Helper();
    const dispatch = useAppDispatch();

    const [menu1, setMenu1] = useState<string[]>([]);
    const [counterMenu1, setCounterMenu1] = useState<number>(0);
    const [menu1Index, setMenu1Index] = useState<number>(0);

    const [menu2, setMenu2] = useState<string[]>([]);
    const [counterMenu2, setCounterMenu2] = useState<number>(0);
    const [menu2Index, setMenu2Index] = useState<number>(0);

    const [menu3, setMenu3] = useState<string[]>([]);
    const [counterMenu3, setCounterMenu3] = useState<number>(0);
    const [menu3Index, setMenu3Index] = useState<number>(0);

    const menuList = ["ABOUT ME", "Innenta Solutions", "MY BLOG"];

    useEffect(() => {
        helper.StringAnimation(0.5, menuList[0], menu1Index, counterMenu1, setMenu1Index, setCounterMenu1, setMenu1, true, false);
    }, [counterMenu1, menu1Index]);
    useEffect(() => {
        helper.StringAnimation(0.2, menuList[1], menu2Index, counterMenu2, setMenu2Index, setCounterMenu2, setMenu2, true, false);
    }, [counterMenu2, menu2Index]);
    useEffect(() => {
        helper.StringAnimation(0.5, menuList[2], menu3Index, counterMenu3, setMenu3Index, setCounterMenu3, setMenu3, true, false);
    }, [counterMenu3, menu3Index]);

    function handleMouseEnterMenu1(){
        if(menu1[0] === menuList[0]){
            setCounterMenu1(0);
            setMenu1Index(0);
        }
    }
    function handleMouseEnterMenu2(){
        if(menu2[0] === menuList[1]){
            setCounterMenu2(0);
            setMenu2Index(0);
        }
    }
    function handleMouseEnterMenu3(){
        if(menu3[0] === menuList[2]){
            setCounterMenu3(0);
            setMenu3Index(0);
        }
    }

    return(
        <div  className={`
            flex justify-center text-[0.8rem] gap-[20px] pt-[10px]
            mb400:text-[0.9rem]
            sm:text-[1rem]
            md:text-[1.2rem]
            lg:justify-end lg:mr-[10%]
            lg:gap-[30px]
            xl:mr-[12%]
        `}>
            <button className="w-[60px] md:w-[100px] text-left" onClick={() => dispatch(toggleSection('aboutMeSection'))} onMouseEnter={handleMouseEnterMenu1}>{menu1[0]}</button>
            <a className="w-[120px] md:w-[200px]" href="#" onMouseEnter={handleMouseEnterMenu2}>{menu2[0]}</a>
            <a className="w-[60px] md:w-[100px]" href="#" onMouseEnter={handleMouseEnterMenu3}>{menu3[0]}</a>
        </div>
    );
}

export default Menu;