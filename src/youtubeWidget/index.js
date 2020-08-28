import setStyle from '../helpers/setStyle';
import widgetMob from '../helpers/widgetMob';

const version = '[AIV]{version}[/AIV]';
export default function initWidgetVideo(params) {
    const video = params.videoId ? params.videoId : 'M7lc1UVf-VE'; // Ссылка на видео
    let width = params.width ? params.width : 240; // Параметры размера
    const marginSide = params.marginSide ? params.marginSide : 50; // отступ со стороны
    const marginBottom = params.marginBottom ? params.marginBottom : 50; // отступ снизу

    // create element
    const widgetVideo = document.createElement('div'); // Обертка
    const widgetVideoBlock = document.createElement('div'); // Основной блок
    const widgetVideoBlockVideo = document.createElement('div'); // Блок с видео
    const widgetVideoBlockClick = document.createElement('span'); // Блок с накладкой
    const widgetVideoBlockClose = document.createElement('span'); // Крестик блок
    const widgetVideoBlockCloseLine = document.createElement('span'); // Крестик линия
    const widgetVideoBlockCloseLineTwo = document.createElement('span'); // Крестик линия два

    // Выстраиваем шаблон
    widgetVideo.appendChild(widgetVideoBlock);
    widgetVideoBlock.appendChild(widgetVideoBlockVideo);
    widgetVideoBlock.appendChild(widgetVideoBlockClick);
    widgetVideoBlock.appendChild(widgetVideoBlockClose);
    widgetVideoBlockClose.appendChild(widgetVideoBlockCloseLine);
    widgetVideoBlockClose.appendChild(widgetVideoBlockCloseLineTwo);

    // Устанавливаем атрибуты
    widgetVideoBlockVideo.setAttribute('id', 'player');
    widgetVideo.className = 'getreview-widget';
    widgetVideo.setAttribute('id', 'getreview_widget');

    // Стилизация блоков

    setStyle(widgetVideo, {
        position: 'fixed',
        zIndex: '999999',
    });

    setStyle(widgetVideoBlock, {
        zIndex: '999999',
        overflow: 'hidden',
        borderStyle: 'solid',
        background: '#eeeeee',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.40)',
        transition:
      'transform 0.2s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, bottom 0.3s ease-in-out, border-color 0.2s ease-in-out, opacity 1s ease-in-out',
        outline: 'none',
        cursor: 'pointer',
        boxSizing: 'border-box',
        userSelect: 'none',
    });

    setStyle(widgetVideoBlockClick, {
        zIndex: '999999',
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: 0,
        top: 0,
        background: '#fff',
        opacity: 0.2,
    });

    setStyle(widgetVideoBlock, {
        borderRadius: '20px',
        'borderWidth:': '3px',
        borderColor: 'rgb(255, 255, 255)',
    });

    setStyle(widgetVideoBlockClose, {
        position: 'absolute',
        top: '6px',
        right: '6px',
        width: '20px',
        height: '20px',
        'z-index': '250',
        opacity: '0',
        zIndex: '999999',
        transition: 'transform 0.3s ease-in-out 0s, opacity 0.2s ease-in-out 0s',
    });
    setStyle(widgetVideoBlockCloseLine, {
        position: 'absolute',
        transform: 'rotate(45deg)',
        left: '9px',
        top: '1px',
        height: '18px',
        width: '2px',
        'box-shadow': 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',
        background: 'white',
    });
    setStyle(widgetVideoBlockCloseLineTwo, {
        position: 'absolute',
        transform: 'rotate(-45deg)',
        left: '9px',
        top: '1px',
        height: '18px',
        width: '2px',
        'box-shadow': 'rgba(0, 0, 0, 0.5) 1px 1px 10px;',
        background: 'white',
    });

    // css video
    setStyle(widgetVideoBlockVideo, {
        objectFit: 'cover',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '102%',
        minHeight: '102%',
        zIndex: '200',
        transition: 'opacity 0.4s ease-in-out 0s',
    });

    // Стилизация для выбора стороны
    if (params.position === 'right') {
        setStyle(widgetVideoBlock, {
            position: 'absolute',
            right: widgetMob()
                ? ''.concat(Math.ceil(0.75 * marginSide), 'px')
                : `${marginSide}px`,
            bottom: widgetMob()
                ? ''.concat(Math.ceil(0.75 * marginBottom), 'px')
                : `${marginBottom}px`,
        });
        setStyle(widgetVideo, {
            right: 0,
            bottom: 0,
        });
    } else {
        setStyle(widgetVideoBlock, {
            position: 'absolute',
            left: widgetMob()
                ? ''.concat(Math.ceil(0.75 * marginSide), 'px')
                : `${marginSide}px`,
            bottom: widgetMob()
                ? ''.concat(Math.ceil(0.75 * marginBottom), 'px')
                : `${marginBottom}px`,
        });
        setStyle(widgetVideo, {
            left: 0,
            bottom: 0,
        });
    }

    // Адаптив
    if (widgetMob()) {
        setStyle(widgetVideoBlock, {
            maxWidth: `${320 - Math.ceil(0.75 * marginSide)}px`,
        });
    }

    let stateHover = true;
    let stateOpen = false;
    let stateCloseBg = false;
    const styleHover = () => {
        setStyle(widgetVideoBlock, {
            borderColor: 'rgb(0, 0, 255)',
            transform: 'scale(1.05) translate(5px, -5px)',
        });
    };
    const styleOrientation = (item) => {
    // Стилизация размера под 16:9 и 9:16
        if (params.orientation === 'vertical') {
            width = item;
            setStyle(widgetVideoBlock, {
                width: widgetMob()
                    ? ''.concat(Math.ceil(0.75 * width), 'px')
                    : `${width}px`,
                height: `${
                    ((widgetMob() ? ''.concat(Math.ceil(0.75 * width)) : width) * 16) / 9
                }px`,
            });
        } else {
            width = item;
            setStyle(widgetVideoBlock, {
                width: widgetMob()
                    ? ''.concat(Math.ceil(0.75 * width), 'px')
                    : `${width}px`,
                height: `${
                    ((widgetMob() ? ''.concat(Math.ceil(0.75 * width)) : width) * 9) / 16
                }px`,
            });
        }
    };
    styleOrientation(width);

    widgetVideoBlock.addEventListener('mouseover', () => {
        if (stateHover === true) {
            setStyle(widgetVideoBlockClose, {
                opacity: '1',
            });
            styleHover();
        }
    });
    widgetVideoBlock.addEventListener('mouseout', () => {
        if (stateHover === true) {
            setStyle(widgetVideoBlock, {
                borderColor: 'rgb(255, 255, 255)',
                transform: 'scale(1) translate(0,0)',
            });

            setStyle(widgetVideoBlockClose, {
                opacity: '0',
            });
        }
    });

    const loadVideo = (item) => {
        let player = null;

        const setupPlayer = () => {
            window.YT.ready(() => {
                const onPlayerReady = () => {
                    if (stateOpen === false) {
                        player.mute();
                    }
                    widgetVideoBlockClose.onclick = () => {
                        if (stateOpen === false) {
                            widgetVideo.parentNode.removeChild(widgetVideo);
                        } else {
                            player.mute();
                            styleOrientation(Math.ceil(0.5 * width));

                            setStyle(widgetVideoBlockCloseLine, {
                                transform: 'rotate(45deg)',
                            });
                            setStyle(widgetVideoBlockCloseLineTwo, {
                                transform: 'rotate(-45deg)',
                            });
                            setStyle(widgetVideoBlockClick, {
                                display: 'block',
                            });
                            setStyle(widgetVideoBlock, {
                                borderColor: 'rgb(255, 255, 255)',
                            });

                            stateOpen = false;
                            stateCloseBg = false;
                            stateHover = true;
                        }
                    };

                    widgetVideoBlockClick.onclick = () => {
                        if (stateOpen === false) {
                            styleOrientation(Math.ceil(2 * width));
                            player.unMute();

                            setStyle(widgetVideoBlockClick, {
                                display: 'none',
                            });
                            setStyle(widgetVideoBlock, {
                                borderColor: 'rgb(0, 0, 255)',
                                transform: 'none',
                            });
                            setStyle(widgetVideoBlockCloseLine, {
                                transform: 'rotate(90deg)',
                            });
                            setStyle(widgetVideoBlockCloseLineTwo, {
                                transform: 'rotate(90deg)',
                            });
                            stateHover = false;
                            stateOpen = true;
                            stateCloseBg = true;
                        }

                        return false;
                    };
                    player.play();
                    document.addEventListener('click', (event) => {
                        const e = widgetVideo;

                        if (!e.contains(event.target)) {
                            if (stateCloseBg === true) {
                                player.mute();
                                setStyle(widgetVideoBlockCloseLine, {
                                    transform: 'rotate(45deg)',
                                });
                                setStyle(widgetVideoBlockCloseLineTwo, {
                                    transform: 'rotate(-45deg)',
                                });

                                styleOrientation(Math.ceil(0.5 * width));

                                setStyle(widgetVideoBlockClick, {
                                    display: 'block',
                                });
                                setStyle(widgetVideoBlock, {
                                    borderColor: 'rgb(255, 255, 255)',
                                });
                                stateCloseBg = false;
                                stateOpen = false;
                                stateHover = true;
                            }
                        }
                    });
                };

                player = new window.YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: item,
                    playerVars: {
                        playlist: item,
                        modestbranding: 1,
                        loop: 1,
                        autoplay: 1,
                        controls: 0,
                        iv_load_policy: 3,
                        showinfo: 0,
                        rel: 0,
                        fs: 0,
                        disablekb: 0,
                    },
                    events: {
                        onReady: onPlayerReady,
                    },
                });
            });
        };

        (function loadYoutubeIFrameApiScript() {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            tag.onload = setupPlayer;
        }());
    };

    if (document.readyState !== 'loading') {
        loadVideo(video);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            loadVideo(video);
        });
    }
    console.log([{
        version: `${version}`,
        screen: `${window.screen.width}x${window.screen.height}`,
        device: navigator.userAgent,
        link: document.location.href,
    }]);
    document.body.append(widgetVideo);
}
window.topdent.widgetVideo = initWidgetVideo.bind(null);
