import React from 'react';
import PageProps from "./PageProps.ts";

export const Banner: React.FC<PageProps> = ( props ) => {
    const { src, name, href} = props.banner;
    return (
        <div className="h-24 my-1">
            <a href={href} >
                <img src={src} alt={name} className="w-full h-20"/>
            </a>
        </div>
    );
};