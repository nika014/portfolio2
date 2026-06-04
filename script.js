const foto = document.getElementById("fotoPerfilHero");

const modal = document.getElementById("modal");

const fechar = document.getElementById("fechar");

foto.addEventListener ("click", function() {
    modal.style.display = "flex";

});

fechar.addEventListener ("click", function() {
    modal.style.display = "none";

});

modal.addEventListener ("click", function(event) {

    if(event.target === modal) {
        modal.style.display = "none";

    }

});

console.log(foto);
console.log(modal);
console.log(fechar);
