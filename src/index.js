import initWidgetVideo from './youtubeWidget';
import bannerMobile from './bannerMobile';

export const topdent = {
    release: '0.0.1',
    widgetVideo: initWidgetVideo.bind(null),
    bannerMobile: bannerMobile.bind(null),
};

topdent.bannerMobile({});

console.log(`Версия библиотеки виджетов: ${topdent.release}`);
