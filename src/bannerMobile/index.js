import setStyle from '../helpers/setStyle';

const bannerMobile = (params) => {
    const bannerLink = params.link ? params.link : '/';
    const bannerTop = params.top ? 430 : '/';

    // create element
    const banner = document.createElement('a'); // Обертка
    const bannerText = document.createElement('span'); // Обертка

    const bannerWrap = document.createElement('div');
    const bannerCloseWrap = document.createElement('div');
    const bannerClose = document.createElement('span');
    const bannerCloseContent = document.createElement('span');
    bannerCloseContent.innerHTML = 'x';

    // Выстраиваем шаблон
    bannerWrap.appendChild(banner);
    bannerWrap.appendChild(bannerCloseWrap);
    bannerCloseWrap.appendChild(bannerClose);
    bannerClose.appendChild(bannerCloseContent);

    // Устанавливаем атрибуты
    banner.setAttribute('href', bannerLink);
    banner.setAttribute('target', '_blank');

    // Стилизация блоков
    setStyle(bannerWrap, {
        left: '0',
        right: '999999',
        width: 'auto',
        height: '95px',
        background: 'rgba(50,55,60,.75)',
        color: '#fff',
        textAlign: 'center',
        bottom: `-${bannerTop}px`,
        padding: '0 0 8px',
        position: 'fixed',
        boxShadow: '4px 0 8px rgba(0,0,0,.4)',
        zIndex: '999',
        right: '0',
    });

    setStyle(banner, {
        height: '100%',
        width: '100%',
        display: 'block',
        userSelect: 'none',
    });

    setStyle(bannerCloseWrap, {
        position: 'absolute',
        width: '50px',
        height: '50px',
        background: 'transparent',
        bottom: '0',
        right: '0',
        zIndex: '9999',
        top: 0,

    });
    setStyle(bannerClose, {
        width: '25px',
        height: '25px',
        lineHeight: '21px',
        background: 'transparent',
        bottom: '0',
        right: '0',
        zIndex: '9999',
        textAlign: 'center',
        fontSize: '18px',
        color: '#fff',
        border: '1px solid #ccc',
        display: 'block',
        marginLeft: 'auto',
        cursor: 'pointer',
    });

    // params.text.forEach(function(item, i) {
    //     console.log(item)
    //     const bannerText = document
    //     banner.appendChild(bannerText)
    // });

    window.addEventListener('scroll', () => {
        const scrollTo = window.pageYOffset;

        if (window.pageYOffset > bannerTop) {
            setStyle(bannerWrap, {
                bottom: '0',
            });
        } else {
            setStyle(bannerWrap, {
                bottom: `-${params.top}px`,
            });
        }
    });

    bannerClose.onclick = () => {
        bannerWrap.parentNode.removeChild(bannerWrap);
    };

    document.body.append(bannerWrap);
};
// Нельзя вызвать метод объекта который еще не был создан
// topdent.bannerMobile({})

export default bannerMobile;
