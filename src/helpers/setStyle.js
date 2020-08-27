export default (pElem, pStyles) => {
    let s;
    for (s in pStyles) {
    // eslint-disable-next-line no-param-reassign
        pElem.style[s] = pStyles[s];
    }
};
