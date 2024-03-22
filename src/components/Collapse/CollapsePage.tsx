import React from 'react';
import { Collapse } from "./Collapse.tsx";

export const CollapsePage: React.FC = () => {
    return (
        <div className="container mx-auto mt-16">
            <Collapse >
                <h3 className="text-xl font-bold">Title</h3>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, modi! </p>
            </Collapse>
        </div>
    );
};