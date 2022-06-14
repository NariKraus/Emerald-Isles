$( "#header" ).load( "/Emerald-Isles/assets/html/navbar.html", function () {
    if (~document.location.search.indexOf("GM")) {
        $('.nav-link:hidden').attr('hidden', false);
        $('a').each(function() {
            var href = $(this).attr('href');
            if (href) {
                if (~href.indexOf('#')) {
                    var splitHref = href.split('#');
                    splitHref[0] += (splitHref[0].match(/\?/) ? '&' : '?') + 'GM';
                    href = splitHref[0] + '#' + splitHref[1];
                } else {
                    href += (href.match(/\?/) ? '&' : '?') + 'GM';
                };
                $(this).attr('href', href);
            };
        });
    };
});