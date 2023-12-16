// Try to remove ads every 5 seconds.
setInterval(removeAds, 5000);

// Check if there is ads on the current page. If so, remove them.
function removeAds() {
// Get list of iframes in the page.
    const iframes = document.querySelectorAll("iframe");

// Filter iframes that have a title that match one of the following regexes.
    const regexes = [/.*Afficher publicité.*/];
    const filteredIframes = Array.from(iframes).filter(iframe => {
        return regexes.some(r => r.test(iframe.title));
    });

    // For each iframe, get the parent element and remove it.
    filteredIframes.forEach(iframe => iframe.parentElement.remove());
}
