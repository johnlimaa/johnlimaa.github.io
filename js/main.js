(function () {
    
    // Carregamento do dados no arquivo JSON
    $.getJSON("data/main.json", function(json) {
        json = json.data;
        console.log(json);

        for (var i in json) {
            switch (json[i].tipo) {
                case ("exp") :
                    createJobsView("#exp", json[i]);
                    break;
                default:
                    null;
            };
        };
    });

    function createJobsView(selector, data) {
        var card = $("<div/>").addClass("card mb-3"),
            body = $("<div/>").addClass("card-body");

        card.append($("<div/>").addClass("card-header").text(data.duracao));
        
        body.append($("<h5/>").addClass("card-title").text(data.titulo));
        body.append($("<h6/>").addClass("card-subtitle mb-2 text-muted").text(data.instituicao));
        body.append($("<p/>").addClass("card-text").text(data.descricao));
    
        card.append(body);
        card.appendTo(selector);
    };
})();