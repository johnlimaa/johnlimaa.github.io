(function () {       
    $.getJSON("data/main.json", function(json) {
        json = json.data;
        console.log(json);
    });
})();