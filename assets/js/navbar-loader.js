$( "#header" ).load( "/Emerald-Isles/assets/html/navbar.html", function () {
    if (~document.location.search.indexOf("GM")) {
        $('.nav-link:hidden').attr('hidden', false);
        $('a').each(function() {
            var href = $(this).attr('href');
            if (href) {
                href += (href.match(/\?/) ? '&' : '?') + 'GM';
                $(this).attr('href', href)
            }
        });
    };
});