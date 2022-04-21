const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery a, .stat-block-link, .item-material");
const original = document.querySelector(".full-img");
const pan_element = document.getElementById('panzoom');
const modal_close = document.getElementById('close-modal');

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
        modal_close.classList.add('active');
        disableScrolling();
        openFullscreen();
        // Dynamic change text and image
        const originalSrc = preview.getAttribute("data-original");
        console.log(originalSrc);
        original.src = originalSrc;
        pan_instance.moveTo(0, 0);
    });
});
modal_close.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal_close')) {
        modal.classList.remove("open");
        original.classList.remove("open");
        modal_close.classList.remove('active');
        enableScrolling();
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

var pan_instance = panzoom(pan_element, {
    maxZoom: 10,
    minZoom: 0.8,
    initialZoom: 1,
    smoothScroll: true,
    bounds: true,
    boundsPadding: 0.1
});

pan_instance.on('panstart', function(e) {
//   console.log('Fired when pan is just started ', e);
});

pan_instance.on('pan', function(e) {
//   console.log('Fired when the scene is being panned', e);
});

pan_instance.on('panend', function(e) {
//   console.log('Fired when pan ended', e);
});

pan_instance.on('zoom', function(e) {
//   console.log('Fired when scene is zoomed', e);
});

pan_instance.on('transform', function(e) {
//   This event will be called along with events above.
//   console.log('Fired when any transformation has happened', e);
});