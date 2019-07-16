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

let imagensSalvas = ["batata.jpg","deadpoool.jpg","drake.jpg","kratos.jpg","macaco.jpg","mario.jpg","rick.jpg","squanty.jpg"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i in cartas){
    cartas[i].style.backgroundImage = `url("images/${imagens[i]}")`;
}

