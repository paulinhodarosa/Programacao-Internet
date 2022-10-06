//obter os elementos da pag
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco")

// constante para definir o num de poltronas
const POLTRONAS = 240;

//vetor com as poltronas reservadas pelo cliente
const reservadas = [];
window.addEventListener("load", () => {
        //se houver dados salvos em localstorage, faz um split(";") e atribui esses dados no array, 
        //caso o contrario inicializamos o array
        const ocupadas = localStorage.getItem("teatroOcupadas")
        ? localStorage.getItem("teatroOcupadas").split(";")
    //montar o num total de poltronas (definida pela contante)
    for (let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure"); // cria a tag figure
        const imgStatus = document.createElement("img") //  cria a tag img
        
        //se a posição estiver ocupada, exibe a img ocupada, se não, a img disponivel
        imgStatus.src = ocupadas.
        if (condition) {
            
        }
    }
})