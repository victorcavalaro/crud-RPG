import { Personagem } from '../personagem/personagem.js';
import { Item } from '../item/item.js';

const personagens = [];
let personagemId = 1;
let itemId = 1;

const formPersonagem = document.getElementById('form-personagem');
const formItem = document.getElementById('form-item');
const personagemSelect = document.getElementById('personagem-select');
const personagensDiv = document.getElementById('personagens');

formPersonagem.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const nomeAventureiro = document.getElementById('nomeAventureiro').value;
  const classe = document.getElementById('classe').value;
  const level = parseInt(document.getElementById('level').value);
  const forca = parseInt(document.getElementById('forca').value);
  const defesa = parseInt(document.getElementById('defesa').value);

  try {
    const personagem = new Personagem(personagemId++, nome, nomeAventureiro, classe, level, forca, defesa);
    personagens.push(personagem);
    atualizarSelectPersonagem();
    renderizarPersonagens();
    formPersonagem.reset();
  } catch (error) {
    alert(error.message);
  }
});

formItem.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome-item').value;
  const tipo = document.getElementById('tipo').value;
  const forca = parseInt(document.getElementById('forca-item').value);
  const defesa = parseInt(document.getElementById('defesa-item').value);
  const personagemIdSelecionado = parseInt(personagemSelect.value);

  const personagem = personagens.find(p => p.id === personagemIdSelecionado);
  if (!personagem) {
    alert("Personagem não encontrado.");
    return;
  }

  try {
    const item = new Item(itemId++, nome, tipo, forca, defesa);
    personagem.adicionarItem(item);
    renderizarPersonagens();
    formItem.reset();
  } catch (error) {
    alert(error.message);
  }
});

function atualizarSelectPersonagem() {
  personagemSelect.innerHTML = '<option value="">Selecione</option>';
  personagens.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = `${p.nomeAventureiro} (${p.classe})`;
    personagemSelect.appendChild(option);
  });
}

function renderizarPersonagens() {
  personagensDiv.innerHTML = '';
  personagens.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${p.nome} (${p.nomeAventureiro})</h3>
      <p>Classe: ${p.classe}</p>
      <p>Level: ${p.level}</p>
      <p>Força Total: ${p.forcaTotal}</p>
      <p>Defesa Total: ${p.defesaTotal}</p>
      <h4>Itens Mágicos:</h4>
      <ul>
        ${p.itens.map(item => `<li>${item.nome} (${item.tipo}) - Força: ${item.forca}, Defesa: ${item.defesa}</li>`).join('')}
      </ul>
    `;
    personagensDiv.appendChild(card);
  });
}

document.getElementById('buscar-personagem-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const idBuscado = document.getElementById('buscar-id').value;
  
    const personagem = personagens.find(p => p.id === idBuscado);
    const resultadoDiv = document.getElementById('resultado-busca');
    resultadoDiv.innerHTML = '';
  
    if (personagem) {
      const totalForca = personagem.forca + personagem.itens.reduce((sum, i) => sum + i.forca, 0);
      const totalDefesa = personagem.defesa + personagem.itens.reduce((sum, i) => sum + i.defesa, 0);
      resultadoDiv.innerHTML = `
        <p><strong>ID:</strong> ${personagem.id}</p>
        <p><strong>Nome:</strong> ${personagem.nome}</p>
        <p><strong>Classe:</strong> ${personagem.classe}</p>
        <p><strong>Level:</strong> ${personagem.level}</p>
        <p><strong>Nome Aventureiro:</strong> ${personagem.nomeAventureiro}</p>
        <p><strong>Força Total:</strong> ${totalForca}</p>
        <p><strong>Defesa Total:</strong> ${totalDefesa}</p>
      `;
    } else {
      resultadoDiv.innerHTML = '<p style="color:red">Personagem não encontrado.</p>';
    }
  });
  document.getElementById('form-atualizar-nome').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('id-guerreiro').value;
    const novoNome = document.getElementById('novo-nome').value;
    const resultado = document.getElementById('resultado-atualizacao');
  
    const personagem = personagens.find(p => p.id === id);
  
    if (personagem && personagem.classe === 'Guerreiro') {
      personagem.nomeAventureiro = novoNome;
      resultado.textContent = 'Nome do guerreiro atualizado com sucesso!';
      renderizarPersonagens();
    } else if (personagem) {
      resultado.textContent = 'Esse personagem não é um Guerreiro!';
    } else {
      resultado.textContent = 'Personagem não encontrado!';
    }
  });
  document.getElementById('form-remover-personagem').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('id-remover').value;
    const resultado = document.getElementById('resultado-remocao');
  
    const index = personagens.findIndex(p => p.id === id);
  
    if (index !== -1) {
      personagens.splice(index, 1);
      atualizarSelectPersonagem();
      renderizarPersonagens();
      resultado.textContent = 'Personagem removido com sucesso!';
    } else {
      resultado.textContent = 'Personagem não encontrado!';
    }
  });
  document.getElementById('form-buscar-item').addEventListener('submit', function (e) {
    e.preventDefault();
    const idItem = document.getElementById('id-item-busca').value;
    const resultado = document.getElementById('resultado-busca-item');
  
    let encontrado = null;
    for (const p of personagens) {
      encontrado = p.itens.find(item => item.id === idItem);
      if (encontrado) break;
    }
  
    if (encontrado) {
      resultado.textContent = `Item encontrado: ${encontrado.nome}, Tipo: ${encontrado.tipo}, Força: ${encontrado.forca}, Defesa: ${encontrado.defesa}`;
    } else {
      resultado.textContent = 'Item não encontrado.';
    }
  });
  function atualizarSelectRemoverItem() {
    const select = document.getElementById('personagem-remover-item');
    select.innerHTML = '';
    personagens.forEach(p => {
      const option = document.createElement('option');
      option.value = p.id;
      option.textContent = `${p.nome} (${p.nomeAventureiro})`;
      select.appendChild(option);
    });
  }
  
  document.getElementById('form-remover-item').addEventListener('submit', function (e) {
    e.preventDefault();
    const idItem = document.getElementById('id-item-remover').value;
    const idPersonagem = document.getElementById('personagem-remover-item').value;
    const resultado = document.getElementById('resultado-remover-item');
  
    const personagem = personagens.find(p => p.id === idPersonagem);
    if (personagem) {
      const index = personagem.itens.findIndex(item => item.id === idItem);
      if (index !== -1) {
        personagem.itens.splice(index, 1);
        atualizarHTML();
        resultado.textContent = `Item removido com sucesso.`;
      } else {
        resultado.textContent = `Item não encontrado neste personagem.`;
      }
    } else {
      resultado.textContent = `Personagem não encontrado.`;
    }
  });
  function atualizarSelectPersonagemAmuleto() {
    const select = document.getElementById('personagem-amuleto');
    select.innerHTML = '';
    personagens.forEach(p => {
      const option = document.createElement('option');
      option.value = p.id;
      option.textContent = `${p.nome} (${p.nomeAventureiro})`;
      select.appendChild(option);
    });
  }
  
  document.getElementById('form-buscar-amuleto').addEventListener('submit', function (e) {
    e.preventDefault();
    const idPersonagem = document.getElementById('personagem-amuleto').value;
    const resultado = document.getElementById('resultado-amuleto');
  
    const personagem = personagens.find(p => p.id === idPersonagem);
    if (personagem) {
      const amuleto = personagem.itens.find(item => item.tipo === 'Amuleto');
      if (amuleto) {
        resultado.textContent = `Amuleto encontrado: ${amuleto.nome} (Força: ${amuleto.forca}, Defesa: ${amuleto.defesa})`;
      } else {
        resultado.textContent = `Este personagem não possui um amuleto.`;
      }
    } else {
      resultado.textContent = `Personagem não encontrado.`;
    }
  });
  