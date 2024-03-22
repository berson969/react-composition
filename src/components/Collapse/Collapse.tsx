import React, { useEffect, useState } from 'react';
import { CollapseProps } from "./collapse.ts";


export const Collapse: React.FC<CollapseProps> = ({ collapsedLabel= "Развернуть", expandedLabel = "Свернуть", children}) => {

    useEffect(() => {
        document.title = 'Collapse';
    }, []);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSwitcher = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="w-80 overflow-hidden transition-max-height">
            <button
                className="bg-blue-500 text-white w-32 font-bold py-2 px-4 rounded"
                onClick={toggleSwitcher}
            >
                {isCollapsed ? collapsedLabel : expandedLabel}
            </button>
            <div className={`mt-10 ${isCollapsed ? 'opacity-0' : 'opacity-100'} border rounded transition-opacity`}>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};