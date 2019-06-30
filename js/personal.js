(function () {

    M.AutoInit();

    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems, { edge: "right" });
    });
    
    // Lê arquivo JSON e envia os dados para funções construtoras.
    $.getJSON("data/data.json", function(json) {
        var cursoOnLine = [],
            cursoPresencial = [],
            treinamento = [],
            experienciaProfissional = [];
            
        json = json.data;

        for (var i = 0; i < json.length; i++) {
            if (json[i].tipo == "cursoOnline") {
                cursoOnLine.push(json[i]);
            } else if (json[i].tipo == "cursoPresencial") {
                cursoPresencial.push(json[i]);
            } else if (json[i].tipo == "treinamento") {
                treinamento.push(json[i]);
            } else if (json[i].tipo == "experienciaProfissional") {
                experienciaProfissional.push(json[i]);
            }
        }

        console.log(json);
        createCurso("#cursoPresencial", cursoPresencial);
        createCurso("#cursoOnline", cursoOnLine);
    });
    
    function createCurso(selectorPai, dados) {
        var column,
            card;

        for (var c = 0; c < dados.length; c++) {
            column = $("<div/>").addClass("col s12 m12 l12");
            card = $("<div/>").addClass("card-panel z-depth-2");
            
            $("<span/>").text(dados[c].ano).appendTo(card);
            $("<h5/>").text(dados[c].titulo).appendTo(card);
            $("<blockquote/>").addClass("justify-text").text(dados[c].descricao).appendTo(card);
            $("<a/>").attr({ href: dados[c].link, target: "_blank" }).addClass("btn center").text("Certificado").appendTo(card);

            card.appendTo(column);
            column.appendTo(selectorPai);
        }               
    }

})();
