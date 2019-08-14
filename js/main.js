(function () {
    
    // Carregamento do dados no arquivo JSON
    $.getJSON("data/main.json", function(json) {
        json = json.data;        

        for (var i in json) {
            switch (json[i].tipo) {
                case ("exp") :
                    createCardsView("#exp", json[i]);
                    break;
                case ("course") :
                    createCardsView("#courses", json[i]);
                    break;
                case ("training") :
                    createCardsView("#training", json[i]);
                    break;
                case ("skill") :
                    createSkillsView("#skills", json[i]);
                    break;
                default:
                    console.log(json[i]);
            };
        };
    });

    // Cria e carrega os dados referentes as experiencias de trabalho e cursos
    function createCardsView(selector, data) {
        var card = $("<div/>").addClass("card mb-3"),
            body = $("<div/>").addClass("card-body"),
            footer,
            title;

        if (data.tipo == "training") {
            title = $("<h5/>").addClass("card-title");
            title.append($("<span/>").addClass("badge").append($("<i/>").addClass("fas " + data.icone)));
            title.append(data.titulo);            

            body.append(title);
            body.append($("<h6/>").addClass("card-subtitle mb-2 text-muted").text(data.instituicao));
        } else {
            body.append($("<h5/>").addClass("card-title").text(data.titulo));
            body.append($("<h6/>").addClass("card-subtitle mb-2 text-muted").text(data.instituicao));
            body.append($("<p/>").addClass("card-text").text(data.descricao));
        }
        
        if (data.tipo == "exp") {
            card.append($("<div/>").addClass("card-header").text(data.duracao));
            card.append(body);            
        } else if (data.tipo == "course") {
            footer = $("<div/>").addClass("card-footer text-center");

            footer.append($("<a/>").addClass("btn btn-primary").attr({href: data.link, target: "_blank"}).text("Certificado"));
            card.append(body);
            card.append(footer);            
        } else {
            card.append(body);
        };

        card.appendTo(selector);
    };

    function createSkillsView(selector, data) {
        console.log(data);
    };

})();