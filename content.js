// Blocked : Shinigami, Kuramanime, Otakudesu
document.addEventListener("DOMContentLoaded", () => {
    // Hide GIF images and their parent elements for shinigami websites only
    const hideGifImages = () => {
        const gifImages = document.querySelectorAll('img[src$=".gif"]');
        
        gifImages.forEach(img => {
            // Hide the image itself
            img.style.display = 'none';
            
            // For shinigami: hide grandparent (parent of parent)
            if (img.parentElement && img.parentElement.parentElement) {
                img.parentElement.parentElement.style.display = 'none';
            }
        });
    };

    const addCSS = (s) =>
        (document.head.appendChild(document.createElement("style")).innerHTML =
            s);

    // Only run on shinigami websites
    const currentUrl = window.location.href.toLowerCase();
    if (currentUrl.includes('shinigami')) {
        sessionStorage.setItem('showAds', 0);
        // Run on page load
        hideGifImages();

        // Also run when new content is added (for dynamic content)
        const observer = new MutationObserver(hideGifImages);
        observer.observe(document.body, { childList: true, subtree: true });
    }

    if(currentUrl.includes('kuramanime')) {
        // Hide the #headerBannerSection element if it exists
        addCSS(
            `
            #headerBannerSection, #abovePlayerBannerSection, #aboveListBannerSection, #aboveDownloadBannerSection, #floatingFooterBannerSection, #aboveEpisodeListBannerSection {
                display: none !important;
            }
            `
        );
    }

    if(currentUrl.includes('otakudesu')) {
        // Hide the #headerBannerSection element if it exists
        addCSS(
            `
            .iklan, .bloxkln, #iklantengah1, .iklanpost, #overplay {
                display: none !important;
            }
            `
        );
    }

    if(currentUrl.includes('komikcast')) {
        // Hide the #headerBannerSection element if it exists
        addCSS(
            `
            .kln {
                display: none !important;
            }
            `
        );
    }
});
