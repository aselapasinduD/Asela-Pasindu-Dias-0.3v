export const svgLoadingScreen1 =    <svg id="loading-screen-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1024">
                                        <rect class="cls-2" width="1440" height="1024"  fill="none"/>
                                        <polygon class="cls-1" fill="#ff6600" points="869.38 1024 0 1024 0 0 485 0 869.38 1024"/>
                                        <path class="logo-icon-1" d="m635.27,429.24l62.17,165.53h-62.17v-165.53Z"/>
                                    </svg>

export const svgLoadingScreen2 =    <svg id="loading-screen-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1024">
                                        <rect class="cls-2" width="1440" height="1024" fill="none"/>
                                        <polygon class="cls-1" fill="#ff6600" points="1269.36 0 707.31 592.23 485 0 1269.36 0" />
                                        <path class="logo-icon-2" d="m673.83,474.17h130.9l-93.71,99.14-37.19-99.14Z"/>
                                    </svg>


export const svgLoadingScreen3 =    <svg id="loading-screen-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1024">
                                        <rect class="cls-2" width="1440" height="1024" fill="none"/>
                                        <polygon class="cls-1" fill="#ff6600" points="1440 0 1440 1024 297.53 1024 1269.36 0 1440 0"/>
                                        <path class="logo-icon-3" d="m788.27,522.15v72.61h-69.09l69.09-72.61Z"/>
                                    </svg>




class SVGLoader{
    async load(svgfile){
        try{
            const response = await fetch(svgfile);
            if(!response){
                throw new Error(`Couldn't load the SVG file${response.status}`);
            }
            const svgContent = await response.text();
            console.log(svgContent);
            return svgContent;
        } catch(error){
            console.error('Error Loading SVG file: ', error);
            return null;
        }
    }
}

export default SVGLoader;