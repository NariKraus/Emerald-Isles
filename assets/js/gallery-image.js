const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery a, .stat-block-link, .item-material");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() {
        window.scrollTo(x, y);
    };
};

function enableScrolling() {
    window.onscroll = function() {};
};
previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        disableScrolling();
        openFullscreen();
        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        original.src = originalSrc;
        const altText = preview.alt;
        caption.textContent = altText;
        const zoomFactor = preview.getAttribute("data-zoom-factor");
        original.dataset.zoom = zoomFactor;
    });
});
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove("open");
        enableScrolling();
        closeFullscreen();
    };
});
const magnifying_area = document.getElementById("magnifying_area");
const magnifying_img = document.getElementById("magnifying_img");
var scrollCount = 1;
magnifying_area.addEventListener('wheel', function(event) {
    if (event.deltaY < 0 && scrollCount < 8) {
        scrollCount++;
    } else if (event.deltaY > 0 && scrollCount > 1) {
        scrollCount--;
    };
    zoomWidth = 800 * (scrollCount / 8);
    zoomHeight = 800 * (scrollCount / 8);
    console.log(scrollCount);
    console.log(magnifying_img.width);
    magnifying_img.style.width = zoomWidth + '%';
    magnifying_img.style.height = zoomHeight + '%';
});
const Pannable = (EL) => {
    const initial = {
        x: 0,
        y: 0
    };
    let isPan = false;
    const getXY = ({
        clientX,
        clientY
    }) => {
        const bcr = EL.getBoundingClientRect();
        return {
            x: clientX - bcr.left,
            y: clientY - bcr.top,
        };
    };
    const panStart = (ev) => {
        ev.preventDefault();
        isPan = true;
        const {
            x,
            y
        } = getXY(ev);
        initial.x = EL.scrollLeft + x;
        initial.y = EL.scrollTop + y;
    };
    const panMove = (ev) => {
        if (!isPan) return; // Do nothing
        const {
            x,
            y
        } = getXY(ev);
        EL.scrollTo(initial.x - x, initial.y - y);
    };
    const panEnd = (ev) => {
        isPan = false;
    };
    var x = window.scrollX;
    var y = window.scrollY;
    EL.onscroll = function() {
        window.scrollTo(x, y);
    };
    EL.addEventListener("mousedown", panStart);
    document.addEventListener("mousemove", panMove);
    document.addEventListener("mouseup", panEnd);
};
document.querySelectorAll(".viewport").forEach(Pannable);

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