const formulario = document.getElementById ("pers-form");
const tabela = document.getElementById("personagem-tabela");

let personagem = []; 

formulario.addEventListener("submit", (evento)=> {
evento.preventDefault();

const nomeInput = document.getElementById("nome");
const nomepersonagem = nomeInput.value.trim();

if(nomepersonagem){
    adcionarPersonagem(nomepersonagem);
    nomeInput.value = ""; 
}
});

function adcionarPersonagem(nome) {
const novopersonagem = {id: Date.now(), nome: nome}; 
personagem.push(novopersonagem);
atualizarTabela();
}

function atualizarTabela(){
tabela.innerHTML = ""; 

personagem.forEach(personagem => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
    <td>${personagem.nome}</td>
    <td>
        <button onclick="editarPersonagem(${personagem.id})">Editar</button>
        <button onclick="deletarPersonagem(${personagem.id})">Excluir</button>
    </td>
    `;
    tabela.appendChild(linha);
});
}

function editarPersonagem(id){
const personagem = personagem.find(personagem => personagem.id === id);

if(personagem){
    const novoNome = prompt("Digite o novo nome do personagem", personagem.nome);

    if(novoNome && novoNome.trim() !== ""){
        personagem.nome = novoNome.trim();
        atualizarTabela();
    }
}
}

function deletarPersonagem(id){
personagem = personagem.filter(personagem => personagem.id !== id);
atualizarTabela();
}