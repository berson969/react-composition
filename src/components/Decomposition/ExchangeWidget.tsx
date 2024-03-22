import React from 'react';
import {PageProps} from "./pageData.ts";

const ExchangeWidget: React.FC<{exchangeWidget: PageProps['exchangeWidget']}> = ({ exchangeWidget}) => {
    return (
        <div className="inline-flex ml-32">
            {exchangeWidget.map(item => {
                const { index, price, change } = item;
                return (
                    <span className="font-bold inline-flex mr-1 md:mr-5">{index}&nbsp;{price}<p className="text-sm text-gray-600 italic mt-1">{change}</p></span>
                )
            })}
            <span>...</span>
        </div>
    );
};

export default ExchangeWidget;