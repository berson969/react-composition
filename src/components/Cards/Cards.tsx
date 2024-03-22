import React, { useEffect } from 'react';
import { Card } from "./Card.tsx";
import { cardItems } from "./simpleCards.ts";


export const Cards: React.FC = () => {
    useEffect(() => {
        document.title = 'Карточки';
    }, []);
    console.log(cardItems)
    return (
        <div className="container mx-auto mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-end">
                {cardItems.map(cardItem => {
                    const { id, url, name, title, text } = cardItem;
                    return (
                    <Card key={id} url={url} name={name}>
                        <h5 className="text-lg font-semibold">{title}</h5>
                        <p className="text-gray-700 mt-2">{text}</p>
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >Go somewhere</a>
                        </div>
                    </Card>
                    );
                })}
            </div>
        </div>
    )
}