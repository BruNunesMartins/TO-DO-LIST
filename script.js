
const button = document.querySelector(".button-task") //elementos mapeados
const input = document.querySelector(".task-input")
const listaCompleta = document.querySelector(".list-task")



//array
let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push({

        tarefa: input.value,
        concluida: false //por padrao é false

    })
    input.value = ""

    mostrarTarefas()

}

function mostrarTarefas() {

    let novaLi = ""


    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + ` 

<li class="task ${item.concluida && "done"}">
<img src="./check.png" alt="check-tarefa" onclick="concluirTarefa(${posicao})">
<p>${item.tarefa}</p>
<img src="./apagar.png" alt="apagar-tarefa" onclick="deletarItem(${posicao})">
</li>

`
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))

}


function concluirTarefa(posicao) {
minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida  //!sinal de negação

mostrarTarefas()

}



function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)//quem eu quero deletar e qtos itens a partir de la

    mostrarTarefas()
}


function recarregarTarefas(){
const tarefasDoLocalStorage = localStorage.getItem("lista")

if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)

}

mostrarTarefas()

}

recarregarTarefas()

button.addEventListener("click", adicionarNovaTarefa)
//ouvinte, toda vez que meu botao for clicado eu chamo uma função

















