import React, {ReactNode} from 'react';
import {PageProps} from "./pageData.ts";

const News: React.FC<{time: PageProps['news']['time'], children: ReactNode}> = ({time, children }) => {
    const dateFormatter = new Intl.DateTimeFormat('ru', { day: '2-digit', month: 'long', weekday: 'long', hour: '2-digit', minute: '2-digit' });

    return (
        <div className="ml-32 mb-3">
            <nav className="mb-2 text-blue-700 text-xl font-bold flex gap-4 items-end">
                <a href="#" className="flex-nowrap">Сейчас в СМИ</a>
                <a href="#">в Германии</a>
                <a href="#">Рекомендуем</a>
                <span className="text-gray-600 font-normal text-sm ">{dateFormatter.format(time)}</span>
            </nav>
            {children}

        </div>
    );
};

export default News;