$( "#header" ).load( "/assets/html/navbar.html", function () {
    let params = (new URL(document.location)).searchParams;
    let DM = params.get('DM');
    if (DM == 'true') {
        $('.nav-link:hidden').attr('hidden', false);
        for (let i = 0; i < $('a[href]').length; i++) {
            const x = $('a.nav-link[href]')[i];
            $(x).attr("href", function(i, href) {
                return href + '?DM=true';
            });
        };
    };
});