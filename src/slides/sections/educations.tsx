import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();

    return(
        <div className="bg-black w-[100%] h-[100%]">
            <SectionNavBar title="EDUCATIONS" handleBackButton={() => dispatch(closeSection('educationsSection'))} ismobile={ismobile} />
            <h1 className="text-center">Under Construction</h1>
        </div>
    );
}

const Educations = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.educationsSection);
    
    const closeSection = () => {
        const contactElement = document.getElementById("educations")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
    }
    const openSection = () => {
        const contactElement = document.getElementById("educations")?.style;
        if(contactElement) contactElement.bottom = '0px';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="educations" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Educations;