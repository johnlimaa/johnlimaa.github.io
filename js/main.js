(function () {
    
    // Carregamento do dados no arquivo JSON
    $.getJSON("data/main.json", function(json) {
        json = json.data;
        console.log(json);

        for (var i in json) {
            switch (json[i].tipo) {
                case ("exp") :
                    createCardsView("#exp", json[i]);
                    break;
                case ("course") :
                    createCardsView("#courses", json[i]);
                    break;
                default:
                    null;
            };
        };
    });

    // Cria e carrega os dados referentes as experiencias de trabalho
    function createCardsView(selector, data) {
        var card = $("<div/>").addClass("card mb-3"),
            body = $("<div/>").addClass("card-body"),
            footer;

        body.append($("<h5/>").addClass("card-title").text(data.titulo));
        body.append($("<h6/>").addClass("card-subtitle mb-2 text-muted").text(data.instituicao));
        body.append($("<p/>").addClass("card-text").text(data.descricao));
        
        if (data.tipo == "exp") {
            card.append($("<div/>").addClass("card-header").text(data.duracao));
            card.append(body);            
        } else if (data.tipo == "course") {
            footer = $("<div/>").addClass("card-footer text-center");

            footer.append($("<a/>").addClass("btn btn-primary").attr({href: data.link, target: "_blank"}).text("Certificado"));
            card.append(body);
            card.append(footer);            
        };

        card.appendTo(selector);
    };
})();