import Logo from "../assests/Icons/LOGO.svg";

interface props {
    className?: string
}

const logo = (props: props) => {
    const {className} = props
    return(
        <a href="https://asela-pasindu-dias.onrender.com/" className={className}>
            <img className="flex-end w-[34px] mb390:w-[40px]" src={Logo}/>
        </a>
    )
}

export default logo;