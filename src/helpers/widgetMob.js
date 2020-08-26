export default () => {
    if ((/iphone|ipod|ipad|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) && (screen.width < 992)) {
        return true
    }

    return false
}