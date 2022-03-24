var jsonRaces = (function () {
    var jsonRaces = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://raw.githubusercontent.com/NariKraus/Emerald-Isles-Utilities/main/races.json',
        'dataType': "json",
        'success': function (data) {
            jsonRaces = data;
        }
    });
    return jsonRaces;
})();

var jsonTerrains = (function () {
    var jsonTerrains = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'https://raw.githubusercontent.com/NariKraus/Emerald-Isles-Utilities/main/race%20terrains.json',
        'dataType': "json",
        'success': function (data) {
            jsonTerrains = data;
        }
    });
    return jsonTerrains;
})();

function showStateRaces() {
    var stateTerrains = $('.breadcrumbs').find('h5').text();
    var terrains = stateTerrains.split(', ');
    var stateRaceArray = [];
    var stateRaces = '';
    
    for (let i = 0; i < terrains.length; i++) {
        const x = terrains[i];
        for (let j = 0; j < jsonTerrains[x].length; j++) {
            const y = jsonTerrains[x][j];
            stateRaceArray.push(y);
        };
    };
    
    stateRaceArray = [...new Set(stateRaceArray)];

    stateRaceArray.sort();

    for (let i = 0; i < stateRaceArray.length; i++) {
        const z = stateRaceArray[i];
        stateRaces += ', ' + z;
    };

    stateRaces = stateRaces.substring(2);

    var w = 200;
    var h = 400;
    var left = Number((window.screen.width / 2)-(w / 2));
    var top = Number((window.screen.height / 2)-(h / 2));

    left += window.screenX;

    var state = $('.breadcrumbs ol').children().last().text();
    var win = window.open("about:blank", '_blank', 'height = ' + h + 'px , width = ' + w + 'px');
    win.moveTo(left, top);
    win.document.write('<title>Races of ' + state + '</title>')
    win.document.write(stateRaces);
    win.document.close();
};

$('.breadcrumbs ol').children().last().on('click', function () {
    showStateRaces();
});