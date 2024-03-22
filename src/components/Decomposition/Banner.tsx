import React from 'react';
import { PageProps }  from "./pageData.ts";

export const Banner: React.FC<{ banner: PageProps["banner"]}> = ({ banner}) => {
    const { src, name, href} = banner;
    return (
        <div className="h-24 my-1 mx-32">
            <a href={href} >
                <img src={src} alt={name} className="w-full h-20"/>
            </a>
        </div>
    );
};