import Back from "./back";
import Logo from "./logo";

interface props {
    title: string,
    handleBackButton: () => void
}

const SectionNavBar = (props: props) => {
    const { title, handleBackButton } = props;
    
    return(
        <div>
            <Back handleBackButton={handleBackButton} />
                <nav className=" py-[15px]">
                    <div className="flex flex-col">
                        <Logo className=" self-end mr-[35px]" />
                        <h1 className=" leading-none self-center ">{title}</h1>
                    </div>
                </nav>
        </div>
    );
}

export default SectionNavBar;