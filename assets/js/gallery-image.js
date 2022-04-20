const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery a, .stat-block-link, .item-material");
const original = document.querySelector(".full-img");

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        openFullscreen();
        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        console.log(originalSrc);
        original.src = originalSrc;
    });
});
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove("open");
        closeFullscreen();
    };
});

function openFullscreen() {
    if (modal.requestFullscreen) {
        modal.requestFullscreen();
    } 
    else if (modal.mozCancelFullScreen) {
        /* Firefox */
        modal.mozCancelFullScreen();
    } 
    else if (modal.webkitRequestFullscreen) {
        /* Safari */
        modal.webkitRequestFullscreen();
    } 
    else if (modal.msRequestFullscreen) {
        /* IE11 */
        modal.msRequestFullscreen();
    };
};

function closeFullscreen() {
    // Javascript Code To Exit Fullscreen Goes Here
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } 
    else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } 
    else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } 
    else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    };
};