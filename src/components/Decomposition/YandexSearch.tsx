import React from 'react';
import { PageProps } from "./pageData.ts";

const YandexSearch: React.FC<{ search: PageProps['search']}> = ( { search }) => {
    const { menu, logo, slogan , example} = search;
    return (
        <div className="mx-32">
            <nav className="">
                {menu.map((el, index) => {
                    return <a key={index} className="text-sm text-blue-600 mr-1 md:mr-5 decoration-0">{el}</a>
                })}
            </nav>
            <div className="flex h-10 w-full">

                <label htmlFor="search" className="relative border-2 border-amber-500 w-full">
                    <input id="search" type="text" className="w-full h-full focus:border-amber-800"/>
                    <img src={logo} alt="" className="absolute block  -top-3 -left-36 h-14 w-32"/>
                </label>

                <button className="bg-amber-500 p-4 items-center justify-center flex">Найти</button>
            </div>

            <span className="text-xs inline-flex">{slogan}<p className="text-gray-600 italic">{example}</p></span>
        </div>
    );
};

export default YandexSearch;