// Get list of iframes in the page.
const iframes = document.querySelectorAll("iframe");

// Filter iframes that have a title that match one of the following regexes.
const regex = [/.*Google Docs.*/];
const filteredIframes = Array.from(iframes).filter(iframe => {
    return regex.some(r => r.test(iframe.title));
});

// For each iframe, get the parent element and remove it.
filteredIframes.forEach(iframe => {
    const parent = iframe.parentElement;
    parent.removeChild(iframe);
    parent.style.backgroundColor = getColor();
});

function getColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
