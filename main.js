var imagens = ["meu pai.jpg",
    "mãe.jpg",
    "eu.jpg",
];
var legenda = ["meu pai",
                "mãe",
                "meu celular cagado"];
   var i = 1;

function proximo(){
    var proximaImagem = imagens[i];
    var proximaLegenda = legenda[i];

    document.getElementById("fotos").src=proximaImagem;
document.getElementById("legenda").innerHTML=proximaLegenda;
i++;
if (i>2){
i=0;
    }
}

