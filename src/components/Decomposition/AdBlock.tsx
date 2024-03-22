import React from 'react';
import {PageProps} from "./pageData.ts";

const AdBlock: React.FC<{adBlock: PageProps['adBlock']}> = ({ adBlock }) => {
    const { image, title, text } = adBlock;
    return (
        <div className="">
            <img src={image} alt="Preview" className="m-6 rounded-full"/>
            <h3 className="text-blue-600 font-bold mb-2">{title}</h3>
            <p className="text-sm">{text}</p>
        </div>
    );
};

export default AdBlock;