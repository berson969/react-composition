import React from 'react';
import {PageProps} from "./pageData.ts";

const ForecastWidget: React.FC<{forecast: PageProps['forecastWidget']}> = ({ forecast }) => {
    const { icon, currentTemp, morningTemp, dayTemp } = forecast;
    return (
        <div className="">
            <h1 className="text-blue-600 font-bold text-2xl mb-2">Погода</h1>
            <div className="flex gap-1">
                <img src={icon} alt="Rain" className="w-12 h-12 text-blue-400 "/>
                <h1 className="text-4xl font-bold">{currentTemp}</h1>
                <div className='flex flex-col'>
                    <span>Утром  {morningTemp}</span>
                    <span>днем  {dayTemp}</span>
                </div>
            </div>
        </div>
    );
};

export default ForecastWidget;