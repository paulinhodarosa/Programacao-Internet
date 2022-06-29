//obtem os elementos da pagina
const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []; // array para colocar os numeros apostados
const sorteado = Math.floor(Math.random() * 100) + 1;  

const CHANCES = 6;

console.log(sorteado)

frm.addEventListener ("submit", (e) => {
    e.preventDefault();
    const num = Number(frm.inNumero.value) //obtem o numero
    if (num == sorteado) {
        respDica.innerText = `Parabéns voce acertou!! o numero sorteadoeado: ${sorteado}`
    } else {
        if(erros.includes(num)) { //verifica se o numero ja foi apostado
            alert(`saci voce ja digitou esse numero ${num}`)
        } else {
            erros.push(num); //adiciona o numero errado ao array
            const numErros = erros.length; //verifica o tamanho do array
            const numChance = CHANCES - numErros //calculao numero de chances restantes
            //exibir o numero de erros, conteudo do vetor e numero de chances
            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChance
            if (numChance == 0) {
                alert("suas chances acabaram");
                frm.btSubmit.disable = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `game over o numero sorteado foi ${sorteado}`
            } else {
                //usar o operador ternario para mensagem de dica
                const dica = num < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: tente um numero maior que: ${dica} que ${num}`
            }
        }
    }
    frm.inNumero.value = "";
    frm.inNumero.focus();
});

frm.btNovo.addEventListener("click", () => {
    location.reload() //recarregar pagina
})