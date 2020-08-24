function widgetMob() {
    if ((/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 992)) {
        return true
    } else {
        return false
    }
}

var setStyle = function (p_elem, p_styles) {
    var s;
    for (s in p_styles) {
        p_elem.style[s] = p_styles[s];
    }
}