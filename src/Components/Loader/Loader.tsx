// Preloader.js
import React from "react";
import "./loader.scss";

interface ComponentProps {
    loadingProgress: number;
}

const Loader: React.FC<ComponentProps> = ({ loadingProgress }) => {
    return (
        <div className="preloader">
            <div>
                <div className="preloader-line preloader-line-top"></div>
                <div className="preloader-line preloader-line-bottom"></div>
                <div className="preloader-percentage">{loadingProgress === 1 ? "100%" : Math.round(loadingProgress * 100) + "%"}</div>
                <div className="preloader-circle"></div>
            </div>
        </div>
    );
};

export default Loader;
