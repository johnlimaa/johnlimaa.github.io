M.AutoInit();

// Carrega a sidebar em dispositivos móveis
document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {edge: "right"});
});