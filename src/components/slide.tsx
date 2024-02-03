import {HTMLAttributes, ReactNode, Component, Children, isValidElement, cloneElement, ReactElement} from "react";

interface SlideProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

class Slide extends Component<SlideProps> {
    render(): React.ReactNode {
        const {children, ...otherProps} = this.props;
        let ismobile: boolean = false;

        // Get current viewport width and heigth
        const viewportWidth = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
        const viewportHeight = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0);

        const setAspectRatio = 3/2;
        const viewportAspectRation = viewportWidth/ viewportHeight;
        let newViewportWidth = 0;
        let newviewportHeigth = 0;

        // check viewport is portrait or landsacpe
        if(viewportAspectRation > setAspectRatio){
            newviewportHeigth = viewportHeight;
            newViewportWidth = setAspectRatio * newviewportHeigth;
        } else {
            newViewportWidth = viewportWidth;
            newviewportHeigth = viewportHeight;
            ismobile = true;
        }

        // Pass isMobile to children
        const childrenWithProps = Children.map(children, child =>
            isValidElement(child) ? cloneElement(child as ReactElement, { ismobile }) : child
        );

        return <div {...otherProps} 
            className={` fixed px-[30px] pb-[40px] ${this.props.className? this.props.className : ""} `}
            style={{
                width: `${newViewportWidth}px`,
                height: `${newviewportHeigth}px`
            }}
            data-ismobile={ismobile}
        >
            {childrenWithProps}
        </div>
    }
}

export default Slide;