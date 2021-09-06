var inicio = true;

function geraCor(){
    if(inicio){
        document.getElementsByTagName("div")[0].hidden=true;
        inicio=false;
    }
    var painel = document.getElementById("cor-gerada");
    var mudaCor = document.getElementsByTagName("section");
    var cor ="#"+("00"+Math.round(Math.random()*255).toString(16)).slice(-2)+("00"+Math.round(Math.random()*255).toString(16)).slice(-2)+("00"+Math.round(Math.random()*255).toString(16)).slice(-2);
    painel.innerHTML=cor.toUpperCase();
    for(let i=0;i<2;i++){
        mudaCor[i].style.backgroundColor=cor;
    }
}