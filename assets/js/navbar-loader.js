$( "#header" ).load( "/Emerald-Isles/assets/html/navbar.html", function () {
    if (~document.location.search.indexOf("GM")) {
        $('.nav-link:hidden').attr('hidden', false);
        $('a').each(function() {
            var href = $('a').attr('href');
            var splitHref = href.split('#');
            if (href) {
                splitHref[0] += (splitHref[0].match(/\?/) ? '&' : '?') + 'GM';
                href = splitHref[0] + '#' + splitHref[1];
                $(this).attr('href', href);
            };
        });
    };
});