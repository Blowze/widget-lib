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
    time: 300000,
    text: [
        {
            name: 'новые зубы и улыбка сразу Smile-at-Once пожизненная гарантия на имплантацию',
            image: 'https://yellmed.ru/static/stock/a2561521bf7a8c5a965a2b543816155b.jpg',
        },
        {
            name: 'новые зубы и нтия на имплантацию',
        },
        {
            name: 'новые зубы и нтия на имплантацию имплантацию имплантацию',
        },
        {
            name: 'новые зубы и  имплантацию имплантацию имплантацию',

        },
    ],
});
