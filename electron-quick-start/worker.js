self.addEventListener('message', function(e) {
    //self.postMessage(e.data);

    //var dataobj = JSON.parse(e.data.data);
    //var columnsobj = JSON.parse(e.data.columns);

    var numberOfUpdates = Math.round(Math.random() * (10 / 10));

    for (var i = 0; i < numberOfUpdates; i++) {

        var title = Math.round(Math.random() * (10 - 1));
        var col = Math.round(Math.random() * (17 - 1));
        var delta = Math.round(Math.random() * 50) - 25;

        self.postMessage({ 'title': title, 'col': col, 'delta': delta });
    }
}, false);

