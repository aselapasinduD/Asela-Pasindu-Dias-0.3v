import React, { useEffect, useState } from "react";

import Back from "./back";
import Logo from "./logo";
import Helper from "../helper/helper";
import { useAppSelector } from "../states/hooks";

interface props {
    title: string,
    handleBackButton: () => void,
    ismobile?: boolean,
    className?: string
}

const SectionNavBar: React.FC<props> = ({ title, handleBackButton, ismobile, className }) => {
    return(
        <div>
            <Back handleBackButton={handleBackButton} ismobile={ismobile} className={className} />
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