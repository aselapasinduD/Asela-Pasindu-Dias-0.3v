import Logo from "../assests/Icons/LOGO.svg";

interface props {
    className?: string
}

const logo = (props: props) => {
    const {className} = props
    return(
        <a href="http://localhost:3000/" className={className}>
            <img className="flex-end" src={Logo}/>
        </a>
    )
}

export default logo;