// import initWidgetVideo from './youtubeWidget';
import bannerMobile from './bannerMobile';

export const topdent = {
    release: '0.0.1',
    // widgetVideo: initWidgetVideo.bind(null),
    bannerMobile: bannerMobile.bind(null),
};
console.log(`Версия библиотеки виджетов: ${topdent.release}`);
topdent.bannerMobile({
    link: 'https://24stoma.ru/bazalnaya-implantaciya.html',
    time: 3000,
    text: [
        {
            name: 'Элайнеры По цене брекетов',
            image: 'https://yellmed.ru/static/stock/a2561521bf7a8c5a965a2b543816155b.jpg',
        },
        {
            name: 'Тест',
            image: 'https://yellmed.ru/static/stock/a2561521bf7a8c5a965a2b543816155b.jpg',
        },
        {
            name: 'Элайнеры тест',
            image: 'https://yellmed.ru/static/stock/a2561521bf7a8c5a965a2b543816155b.jpg',
        },
    ],
});
