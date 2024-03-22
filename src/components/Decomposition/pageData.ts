import { faker } from "@faker-js/faker";

export  interface PageProps {
    news: {
        time: Date,
    }
    exchangeWidget: {
        index: string,
        price: number,
        change: string
    }[],
    adBlock: {
        image: string,
        title: string,
        text: string
    },
    search: {
        menu: string[],
        logo: string,
        slogan: string,
        example: string,
    },
    banner: {
        src: string;
        name: string;
        href: string;
    },
    forecastWidget: {
        icon: string,
        currentTemp: string,
        morningTemp: string,
        dayTemp: string
    }
    links: {
        theme: string,
        content: string
    }[],
    listTV: {
        time: string,
        program: string,
        channel: string
    }[],
    broadCast: {
        icon: string,
        title: string,
        program: string
    }[]
}

const  pageData = {
    news: {
        time: new Date(),
        articles: [...Array(5)].map(() => ({
            icon: faker.image.urlPlaceholder({ width: 15, height: 15, format: 'png' }),
            title: faker.lorem.words(6)
        }))
    },
    exchangeWidget: [
        { index: "USD MOEX", price: 62.52, change: "+0.09"},
        { index: "EUR MOEX", price: 70.86, change: "+0.14"},
        { index: "НЕФТЬ", price: 64.90, change: "+1.63%"}
    ],
    adBlock: {
        image: faker.image.urlPicsumPhotos({ width: 100 , height: 100}),
        title: "Работа над ошибками",
        text: "Смотрите на Яндексе и запоминайте"
    },
    search: {
        menu: ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'еще'],
        logo: 'public/яндекс-лого1.png',
        slogan: "Найдется все. Например,",
        example: "фаза луны сегодня"
    },
    banner: {
        src: faker.image.urlPicsumPhotos({ width: 728 , height: 89}),
        name: faker.commerce.productName(),
        href: "#"
    },
    forecastWidget: {
        icon: "public/free-icon-rain-116251.png",
        currentTemp: "+17˚",
        morningTemp: "+17",
        dayTemp: "+20"
    },
    links: [
        {theme: "Недвижимость", content: "о сталинках"},
        {theme: "Маркет", content: "люстры и светильники"},
        {theme: "Авто.ру", content: "привод 4х4 до 500 000"},
    ],
    listTV: [
        {time: "2:00", program: "ТНТ. Best", channel: "THT International"},
        {time: "2:15", program: "Джинглики", channel: "Карусель INT"},
        {time: "2:25", program: "Наедине со всеми", channel: "Первый"}
    ],
    broadCast: [
        {icon: "public/pngwing.com.png", title: "Управление как искусство", program: "Успех"},
        {icon: "public/pngwing.com.png", title: "Ночь. Мир в это время", program: "earth TV"},
        {icon: "public/pngwing.com.png", title: "Андрей Возн...", program: "Совершенно секретно"},
    ]
};

export default pageData;
