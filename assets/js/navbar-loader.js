$( "#header" ).load( "data/navbar.html", function () {
    let params = (new URL(document.location)).searchParams;
    let DM = params.get('DM');
    if (DM == 'true') {
        $('.nav-link:hidden').attr('hidden', false);
        for (let i = 0; i < $('a[href]').length; i++) {
            const x = $('a[href]')[i];
            $(x).attr("href", function(i, href) {
                return href + '?DM=true';
            });
        };
    };

    var elements = $('.breadcrumbs > div > ol > li');
    var elementArray = Array.from(elements);

    for (let i = 0; i < elementArray.length; i++) {
        $(`.nav-link:contains("` + $(elementArray[i]).text() + `")`).addClass('active')

    };
});