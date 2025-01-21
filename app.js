//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo(inputId) {
    const inputElement = document.getElementById(inputId);

    if (!inputElement) {
        alert("Input não encontrado!");
        return;
    }

    const value = inputElement.value.trim();

    if (!value) {
        alert("O campo está vazio. Por favor, insira um valor!");
        return;
    }

    // Adicionar o valor à lista
    const listElement = document.getElementById("listaAmigos");
    const newItem = document.createElement("li");
    newItem.textContent = value;
    listElement.appendChild(newItem);

    // Limpar o input após adicionar
    inputElement.value = "";
}


function sortearAmigo(listaId, resultadoId) {
    const listElement = document.getElementById(listaId);
    const resultListElement = document.getElementById(resultadoId);

    if (!listElement) {
        alert("Lista principal não encontrada!");
        return;
    }

    if (!resultListElement) {
        alert("Lista de resultados não encontrada!");
        return;
    }

    const items = listElement.getElementsByTagName("li");

    if (items.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const sorteado = items[randomIndex].textContent;

    // Exibir o nome sorteado na lista de resultados
    const newResultItem = document.createElement("li");
    newResultItem.textContent = sorteado;
    resultListElement.appendChild(newResultItem);
    listElement.removeChild(items[randomIndex]);



}