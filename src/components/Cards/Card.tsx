import React from 'react';
// import { CardType } from "./CardType.ts";

interface CardProps {
    children: React.ReactNode;
    url?: string;
    name: string;
}

export const Card: React.FC<CardProps> = ({ children, url, name }) => {
    const height = url ? "h-auto" : "h-48";
    return (
        <div className={`w-72 border border-gray-300 rounded-lg ${height}`}>
            {url ? <img src={url} className="w-full rounded-t-lg" alt={name} /> : null}
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};