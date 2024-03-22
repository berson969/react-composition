import React from 'react';
import pageData from "./pageData.ts"
import PageProps from "./PageProps.ts";

// import News from "./News.tsx";
// import ExchangeWidget from "./ExchangeWidget.tsx";
// import AdBlock from "./AdBlock.tsx";
// import YandexSearch from "./YandexSearch.tsx";
import { Banner } from "./Banner.tsx";
// import ForecastWidget from "./ForecastWidget.tsx";
// import Links from "./Links.tsx";
// import Maps from "./Maps.tsx";
// import ListTV from "./ListTV.tsx";
// import Broadcast from "./Broadcast.tsx";


const YandexPage : React.FC<PageProps> = () => {
    return (
        <div className="mx-5">
            {/*<div className='flex'>*/}
            {/*    <div className="flex flex-col">*/}
            {/*        <News />*/}
            {/*        <ExchangeWidget />*/}
            {/*    </div>*/}
            {/*    <AdBlock />*/}
            {/*</div>*/}
            {/*<YandexSearch />*/}
            <Banner banner={pageData.banner} />
            {/*<div className="flex ">*/}
            {/*    <div className="flex flex-col">*/}
            {/*        <ForecastWidget />*/}
            {/*        <Links />*/}
            {/*    </div>*/}
            {/*    <div className="flex flex-col">*/}
            {/*        <Maps />*/}
            {/*        <ListTV />*/}
            {/*    </div>*/}
            {/*    <Broadcast />*/}
            {/*</div>*/}
        </div>
    );
};

export default YandexPage;