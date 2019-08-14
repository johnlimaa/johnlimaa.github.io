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

    // Cria as views de skill
    function createSkillsView(selector, data) {
        function defineSkillLevel(level) {            
            switch(level) {
                case ("Profissional") :
                    level = "professional";
                    break;
                case ("Avançado") :
                    level = "avancado";
                    break;
                case ("Intermediário") :
                    level = "intermediario";
                    break;
                default:
                    level = "basico";
            };

            return level;
        };
        
        let skill = $("<div/>").addClass("mt-3 skill");

        skill.append($("<h6/>").text(data.titulo));
        skill.append($("<div/>").addClass("progress").append($("<div/>").attr({ role: "progressbar" }).addClass("progress-bar " + defineSkillLevel(data.nivel)).text(data.nivel)));

        skill.appendTo(selector);
    };

    // Ordena as skills
    $("#skills").delegate("a", "click", function(evt) {
        function removeDOMs(arr) {
            for (var i in arr) {
                $(arr[i]).remove();
            };
        };       

        function appendToDOM(arr, selector) {
            for (let i in arr) {
                $(arr[i]).appendTo(selector);
            };
        };

        function orderElem(sequel, data) {
            var order = [];
            for (let s in sequel) {
                for (let d in data) {
                    if ($(data[d]).find("." + sequel[s]).length === 1) order.push(data[d]);
                };
            };

            return order;
        };

        evt.preventDefault();        
        var ordem = evt.target.hash.replace("#", ""),
            skills = $.find(".skill"),
            posicao;

        if (ordem === "crescente") {
            posicao = orderElem(["basico", "intermediario", "avancado", "profissional"], skills);
            removeDOMs(skills);
            appendToDOM(posicao, "#skills");
        } else if (ordem === "decrescente") {
            posicao = orderElem(["profissional", "avancado", "intermediario", "basico"], skills);
            removeDOMs(skills);
            appendToDOM(posicao, "#skills");
        } else if (ordem === "aleatorio") {
            console.log("2");
        };
    });
})();