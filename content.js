document.addEventListener("DOMContentLoaded", () => {
    const kaya303 = document.querySelectorAll(`[alt='Kaya303']`);
    const regularAds = document.querySelectorAll(`[alt='Advertisement']`);
    if (kaya303) kaya303.forEach((el) => el.remove());
    if (regularAds) regularAds.forEach((el) => el.remove());

    const addCSS = (s) =>
        (document.head.appendChild(document.createElement("style")).innerHTML =
            s);

    addCSS(
        `
            .lepopup-popup-overlay {
                display: none !important;
            }
                        
            .lepopup-popup-container {
                display: none !important;
            }
        `
    );
});
