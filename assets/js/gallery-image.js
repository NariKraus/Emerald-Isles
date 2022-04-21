const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img, .gallery a, .stat-block-link, .item-material");
const original = document.querySelector(".full-img");

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
        console.log(originalSrc);
        original.src = originalSrc;
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

var element = document.getElementById('panview')

var instance = panzoom(element, {
    maxZoom: 10,
    minZoom: 0.8,
    initialZoom: 1,
    transformOrigin: {x: 0.5, y: 0.5},
    smoothScroll: true,
    bounds: true,
    boundsPadding: 0.1
  });

instance.on('panstart', function(e) {
  console.log('Fired when pan is just started ', e);
  // Note: e === instance.
});

instance.on('pan', function(e) {
  console.log('Fired when the scene is being panned', e);
});

instance.on('panend', function(e) {
  console.log('Fired when pan ended', e);
});

instance.on('zoom', function(e) {
  console.log('Fired when scene is zoomed', e);
});

instance.on('transform', function(e) {
  // This event will be called along with events above.
  console.log('Fired when any transformation has happened', e);
});