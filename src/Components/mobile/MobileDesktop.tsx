import BackgroundDecorations from "../BackgroundDecorations.js";
import MobileHeader from "./MobileHeader.js";
import MobileApps from "./MobileApps.js";
import { MobileScreenContext } from "../../MobileApp.js";
import React from "react";

export default function MobileDesktop(){
    
    const {screen} = React.useContext(MobileScreenContext)
    return(
            <div className={`desktop-bg color-background ${screen}`}>
                <div className='line-background'>
                    <BackgroundDecorations/>
                    <div className="mdesktop-wrapper">
                        <MobileHeader/>
                        <MobileApps/>
                    </div>
                </div>
            </div>
    )
}