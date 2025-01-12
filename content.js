// Blocked : Shinigami, Kuramanime, Otakudesu
document.addEventListener("DOMContentLoaded", () => {
    const addCSS = (s) =>
        (document.head.appendChild(document.createElement("style")).innerHTML =
            s);

    addCSS(
        `
            #aboveDownloadBannerSection, #aboveListBannerSection, #headerBannerSection, #abovePlayerBannerSection, #floatingFooterBannerSection, a[href='https://kantongdoraemon.com/djn/'], .lepopup-popup-overlay, .lepopup-popup-container, img[alt="Advertisement"], img[alt="Kaya303"], .iklannew-container-single, .iklannew-container, img[alt="Iklan 1"], img[alt="Iklan 2"], .body-bottom-ads, .iklan, #iklanbawah, .iklanpost {
                display: none !important;
            }
        `
    );
});
