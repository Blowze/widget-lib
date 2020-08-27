import setStyle from '../helpers/setStyle';
import widgetMob from '../helpers/widgetMob';

const bannerMobile = (params) => {
    const bannerLink = params.link ? params.link : '/';
    const bannerTop = params.top ? params.top : 140;
    const bannerSlideTime = params.time ? params.time : 3000;

    // create element
    const banner = document.createElement('a'); // Обертка
    const bannerWrap = document.createElement('div');
    const bannerCloseWrap = document.createElement('div');
    const bannerClose = document.createElement('span');
    const bannerCloseLine = document.createElement('span'); // Крестик линия
    const bannerCloseLineTwo = document.createElement('span'); // Крестик линия два

    // Выстраиваем шаблон
    bannerWrap.appendChild(banner);
    bannerWrap.appendChild(bannerCloseWrap);
    bannerCloseWrap.appendChild(bannerClose);
    bannerClose.appendChild(bannerCloseLine);
    bannerClose.appendChild(bannerCloseLineTwo);

    // Устанавливаем атрибуты
    banner.setAttribute('href', bannerLink);
    banner.setAttribute('target', '_blank');

    // Стилизация блоков
    setStyle(bannerWrap, {
        left: '0',
        right: '0',
        width: 'auto',
        height: widgetMob() ? '65px' : '95px',
        background: 'rgb(35 36 38 / 0.9)',
        color: '#fff',
        textAlign: 'center',
        bottom: `-${bannerTop}px`,
        position: 'fixed',
        boxShadow: '4px 0 8px rgba(0,0,0,.4)',
        zIndex: '999',
    });

    setStyle(banner, {
        height: '100%',
        width: '100%',
        display: 'block',
        userSelect: 'none',
        textDecoration: 'none',
        fontSize: widgetMob() ? ''.concat(Math.ceil(0.5 * 22), 'px') : `${22}px`,
        fontWeight: 700,
        lineHeight: '1.25',
        padding: widgetMob() ? '5px' : '20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#fff',
        boxSizing: 'border-box',
    });
    setStyle(bannerCloseWrap, {
        position: 'absolute',
        width: widgetMob() ? '30px' : '50px',
        height: widgetMob() ? '100%' : '50px',
        background: 'transparent',
        bottom: '0',
        right: '0',
        zIndex: '9999',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });
    setStyle(bannerClose, {
        width: '25px',
        height: '25px',
        lineHeight: '21px',
        background: 'transparent',
        bottom: '0',
        right: '0',
        zIndex: '9999',
        border: '1px solid #ccc',
        display: 'block',
        cursor: 'pointer',
        margin: widgetMob() ? '0' : '10px',
        position: widgetMob() ? 'relative' : 'relative',
        top: 0,
        borderRadius: '50%',
        transform: widgetMob() ? 'scale(0.6)' : 'none',
    });
    setStyle(bannerCloseLine, {
        position: 'absolute',
        transform: 'rotate(45deg)',
        left: '12px',
        top: '3px',
        height: '18px',
        width: '1px',
        boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',
        background: 'white',
    });
    setStyle(bannerCloseLineTwo, {
        position: 'absolute',
        transform: 'rotate(-45deg)',
        left: '12px',
        top: '3px',
        height: '18px',
        width: '1px',
        boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',
        background: 'white',
    });
    window.addEventListener('scroll', () => {
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
    const arrText = params.text;
    const arrSlider = [];
    // const cloneArrSlider = [];
    for (const index in arrText) {
        const bannerText = document.createElement('span');
        const bannerImage = document.createElement('img');
        bannerText.innerHTML = arrText[index].name;
        arrSlider.push(bannerText);
        banner.append(bannerText);
        if (arrText[index].image) {
            bannerText.appendChild(bannerImage);
            bannerImage.setAttribute('src', arrText[index].image);
        }
        setStyle(bannerImage, {
            display: 'block',
            marginLeft: '10px',
            height: '95px',
            marginTop: widgetMob() ? '-50px' : '-60px',
            borderRadius: '5px',
            marginRight: widgetMob() ? '20px' : '0',

        });
        setStyle(bannerText, {
            maxWidth: widgetMob() ? '90%' : '65%',
            opacity: '0',
            margin: 'auto',
            boxSizing: 'border-box',
            position: 'absolute',
            left: '0',
            right: '0',
            transition: 'all .6s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '53px',
            textAlign: widgetMob() ? 'left' : 'center',
        });
        let i = 0;
        setStyle(arrSlider[0], {
            opacity: '1',
        });
        setInterval(() => {
            i += 1;
            if (i > arrSlider.length - 1) {
                i = 0;
            }
            const filteredItems = arrSlider.filter((value, idx) => i !== idx);
            // cloneArrSlider.push(bannerText);
            // const indexOff = cloneArrSlider.splice(1, cloneArrSlider.length - 1);
            // console.log(indexOff);
            for (const indexs in filteredItems) {
                setStyle(filteredItems[indexs], {
                    opacity: '0',
                });
            }
            setStyle(arrSlider[i], {
                opacity: '1',
            });
        }, bannerSlideTime);
    }
    bannerClose.onclick = () => {
        bannerWrap.parentNode.removeChild(bannerWrap);
    };
    if (widgetMob()) {
        document.body.append(bannerWrap);
    }
};
export default bannerMobile;
