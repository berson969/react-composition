import React from 'react';
import pageData from "./pageData.ts"

import News from "./News.tsx";
import ExchangeWidget from "./ExchangeWidget.tsx";
import AdBlock from "./AdBlock.tsx";
import YandexSearch from "./YandexSearch.tsx";
import { Banner } from "./Banner.tsx";
import ForecastWidget from "./ForecastWidget.tsx";
import Links from "./Links.tsx";
import Maps from "./Maps.tsx";
import ListTV from "./ListTV.tsx";
import Broadcast from "./Broadcast.tsx";


const YandexPage : React.FC = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className='flex'>
                <div className="flex flex-col">
                    <News time={pageData.news.time}>
                        {pageData.news.articles.map(article => {
                            return (
                                <div className="relative">
                                    <h4>{article.title}</h4>
                                    <img src={article.icon} alt="Preview" className="absolute w-4 h-4 rounded-full top-1 -left-6"/>
                                </div>
                                )
                            })}
                    </News>
                    <ExchangeWidget exchangeWidget={pageData.exchangeWidget}/>
                </div>
                <AdBlock adBlock={pageData.adBlock}/>
            </div>
            <YandexSearch  search={pageData.search}/>
            <Banner banner={pageData.banner} />
            <div className="flex gap-4 ml-32 mt-6">
                <div className="flex flex-col">
                    <ForecastWidget forecast={pageData.forecastWidget}/>
                    <Links>
                        {pageData.links.map(link => {
                            return (
                                <span key={link.theme} className="flex-nowrap flex leading-loose"><a href="#" className="font-bold">{link.theme}</a>--<p>{link.content}</p></span>
                            )
                        })

                        }
                    </Links>
                </div>
                <div className="flex flex-col">
                    <Maps />
                    <ListTV>
                        {pageData.listTV.map(item => {
                            const { time, program, channel } = item;
                            return (
                                <div key={time} className="inline-flex gap-1 leading-loose">
                                    <span>{time}</span>
                                    <span>{program}</span>
                                    <span className="text-gray-600 italic">{channel}</span>
                                </div>
                            )
                        })}
                    </ListTV>
                </div>
                <Broadcast>
                    {pageData.broadCast.map(item => {
                        return (
                            <div className="flex gap-2 leading-loose relative" key={item.title}>
                                <img className="absolute top-1 -left-6 w-6 h-6 " src={item.icon} alt=">"/>
                                <span>{item.title}</span>
                                <span className="italic text-gray-400">{item.program}</span>
                            </div>
                        )
                    })}
                </Broadcast>
            </div>
        </div>
    );
};

export default YandexPage;