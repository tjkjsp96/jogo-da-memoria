function embaralhar(lista) {
    let valor_temporario;
    let indice_aleatorio;
 
    for (let i = lista.length -1; i !== 0; i--) {
 
        indice_aleatorio = Math.floor(Math.random() * i);
 
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
 
    return lista;
}

let cartas = document.querySelectorAll(".carta");

let cartaVirada = null;

let imagensSalvas = ["batata.jpg","deadpoool.jpg","drake.jpg","kratos.jpg","macaco.jpg","mario.jpg","rick.jpg","squanty.jpg"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("images/${imagens[i]}")`;
}

setTimeout(function(){
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("images/troll.png")';
        carta.onclick = function(){

            if(cartaVirada && cartaVirada.id !== carta.id){
                if(cartaVirada.style.backgroundImage === cartaVirada.style.backgroundImage){
                    cartaVirada.onclick = null;
                    carta.onclick = null;
                }
                else{
                    carta.style.backgroundImage = 'url("images/troll.png")';
                    cartaVirada.style.backgroundImage = 'url("images/troll.png")';
                }
                cartaVirada = null;
            }
            else{
                carta.style.backgroundImage = `url("images/${imagens[Number(carta.id)]}")`;
                cartaVirada = carta;
            }
        }
    }
}, 2000);