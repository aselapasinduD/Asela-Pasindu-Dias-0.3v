import { useEffect, useState } from "react";

import Back from "./back";
import Logo from "./logo";
import Helper from "../helper/helper";
import { useAppSelector } from "../states/hooks";

interface props {
    title: string,
    handleBackButton: () => void,
    ismobile?: boolean
}

const SectionNavBar = (props: props) => {
    const { title, handleBackButton, ismobile } = props;

    return(
        <div>
            <Back handleBackButton={handleBackButton} ismobile={ismobile} />
                <nav className=" py-[8px] md:py-[12px]">
                    <div className="flex flex-col">
                        <Logo className=" self-end mr-[24px]" />
                        <h1 className=" leading-none self-center ">{title}</h1>
                    </div>
                </nav>
        </div>
    );
}

export default SectionNavBar;