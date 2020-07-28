window.onload = function() {
    // the current website the user is on
    let current = window.location.href

    // this will remove the overlay from a youtube url that is loaded
    if (current.includes('youtube')) {
        let overlay = document.querySelector('div.ytp-pause-overlay');
        overlay.remove();
    };
}