

function inserir(num){
    document.querySelector('div#tela').innerHTML += num;
}

function clean(){
    document.querySelector('div#tela').innerHTML = "";
}

function backspace(){
    let tela = document.querySelector('div#tela').innerHTML;
    document.querySelector('div#tela').innerHTML = tela.substring(0, tela.length - 1);

}

function resultado(){
    let tela = document.querySelector('div#tela').innerHTML 
    
    if(tela){
    document.querySelector('div#tela').innerHTML = eval(tela);
    }
    else{
    document.querySelector('div#tela').innerHTML = "Nenhum comando...";
    }

}