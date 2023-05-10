var modal = document.getElementById("modal");

var botaoAbrir = document.getElementById("botao-abrir");

var botaoFechar = document.getElementsByClassName("modal-fechar")[0];

    botaoAbrir.onclick = function() {
        modal.style.display = "block";
    }
 
    botaoFechar.onclick = function() {
        modal.style.display = "none";
    }  

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }










