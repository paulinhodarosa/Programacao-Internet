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
        : [];
    //montar o num total de poltronas (definida pela contante)
        for (let i = 1; i <= POLTRONAS; i++) {
            const figure = document.createElement("figure"); // cria a tag figure
            const imgStatus = document.createElement("img") //  cria a tag img
            
            //se a posição estiver ocupada, exibe a img ocupada, se não, a img disponivel
            imgStatus.src = ocupadas.includes(i.toString())
            ? "img/ocupada.jpg"
            : "img/disponivel.jpg";
            imgStatus.className = "poltrona"; //classe com a dimensão da imagem

            const figureCap = document.createElement("figcaption") //cria a figcaption

            //qtd de zeros antes do num da poltrona
            const zeros = i < 10 ? "00" : i < 100 ? "0" : ""

            const num = document.createTextNode(`[${zeros}${i}]`)//cria o texto

            //define os pais de cada tag criada
            figureCap.appendChild(num)
            figure.appendChild(imgStatus)
            figure.appendChild(figureCap)

            // se o modulo de 24 == 12 (é o corredor: define margem direita 60px)
            if(i % 24 == 12) {
                figure.style.marginRight = "60px"
            }

            dvPalco.appendChild(figure); //indica que a figura é filha de divPalco

            //se i modulo 24 == 0: o codigo apos o && será executado (inserindo a quebra de linha)
            (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"))
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obtem o conteudo input
    const poltrona = Number(frm.inPoltrona.value);

    //valida o preenchimento da entrada
    if (poltrona > POLTRONAS) {
        alert("informa um numero de poltrona que seja valido")
        frm.inPoltrona.focus();
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : []

    //validar se esta ocupada
    if (ocupadas.includes(poltrona.toString())){
        alert(`A poltrona ${poltrona} já está ocupada`)
        frm.inPoltrona.value = ""
        frm.inPoltrona.focus()
        return
    } 
    //captura a imagem da poltrona, filha de divPalco
    const imgPoltrona = dvPalco.querySelector("img")[poltrona -1]

    imgPoltrona.src = "img/reservada.jpg" //modifica o atributo da imagem

    reservadas.push(poltrona) //adc a poltrona ao vetor

    frm.inPoltrona.value = ""
    frm.inPoltrona.focus()
})
