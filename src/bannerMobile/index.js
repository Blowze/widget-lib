import '../index.js'
import '../helper.js'

function bannerMobile(params){
    var bannerLink =  params.link ? params.link : '/'
    var bannerTop =  params.top ? 430 : '/'

    //create element
    var banner = document.createElement('a') // Обертка
    var bannerText = document.createElement('span') // Обертка

    var bannerWrap = document.createElement('div')  
    var bannerCloseWrap = document.createElement('div')  
    var bannerClose = document.createElement('span') 
    var bannerCloseContent = document.createElement('span') 
    bannerCloseContent.innerHTML = 'x'

    // Выстраиваем шаблон
    bannerWrap.appendChild(banner)
    bannerWrap.appendChild(bannerCloseWrap)
    bannerCloseWrap.appendChild(bannerClose)
    bannerClose.appendChild(bannerCloseContent)

    // Устанавливаем атрибуты
    banner.setAttribute("href", bannerLink)
    banner.setAttribute("target", "_blank")

    // Стилизация блоков
    setStyle(bannerWrap, {
        'left': '0',
        'right': '999999',
        'width' : 'auto',
        'height': '95px',
        'background': 'rgba(50,55,60,.75)',
        'color': '#fff',
        'textAlign': 'center',
        'bottom': '-' + bannerTop + 'px',
        'padding': '0 0 8px',
        'position': 'fixed',
        'boxShadow': '4px 0 8px rgba(0,0,0,.4)',
        'zIndex': '999',
        'right': '0'
    })

    setStyle(banner, {
        'height': '100%',
        'width': '100%',
        'display': 'block',
        'userSelect': 'none'
    })

    setStyle(bannerCloseWrap, {
        'position': 'absolute',
        'width': '50px',
        'height': '50px',
        "background": "transparent",
        "bottom": "0",
        "right": "0",
        "zIndex" : "9999",
        "top": 0,

    })
    setStyle(bannerClose, {
        'width': '25px',
        'height': '25px',
        'lineHeight': '21px',
        "background": "transparent",
        "bottom": "0",
        "right": "0",
        "zIndex" : "9999",
        "textAlign": "center",
        "fontSize": "18px",
        "color": "#fff",
        "border": "1px solid #ccc",
        "display": "block",
        "marginLeft": "auto",
        "cursor": "pointer"
    })
    
    // params.text.forEach(function(item, i) {
    //     console.log(item)
    //     var bannerText = document
    //     banner.appendChild(bannerText)
    // });
    

    window.addEventListener('scroll', function() {
        var scrollTo = window.pageYOffset;

        if(window.pageYOffset > bannerTop){
            setStyle(bannerWrap, {
                'bottom': '0'
            })
            
        }
        else{
            setStyle(bannerWrap, {
                'bottom': '-' + params.top + 'px'
            })
        }
    });

    bannerClose.onclick = function () {
        
        bannerWrap.parentNode.removeChild(bannerWrap);

    }

    document.body.append(bannerWrap);
    
    
}
topdent.bannerMobile({})
