const { Personagem } = require("Personagem");

class ServicoPersonagem {
  constructor() {
    this.personagens = [];
  }

  cadastrar(dados) {
    const novo = new Personagem(dados.nome, dados.nomeAventureiro, dados.classe, dados.forca, dados.defesa, dados.level);
    this.personagens.push(novo);
    return novo;
  }

  listar() {
    return this.personagens;
  }

  buscarPorId(id) {
    return this.personagens.find(p => p.id === id);
  }

  atualizarNomeAventureiro(id, novoNome) {
    const p = this.buscarPorId(id);
    if (!p) throw new Error("Personagem não encontrado.");
    p.nomeAventureiro = novoNome;
    return p;
  }

  remover(id) {
    const index = this.personagens.findIndex(p => p.id === id);
    if (index === -1) throw new Error("Personagem não encontrado.");
    this.personagens.splice(index, 1);
  }

  adicionarItemAoPersonagem(id, item) {
    const p = this.buscarPorId(id);
    if (!p) throw new Error("Personagem não encontrado.");
    p.adicionarItem(item);
  }

  listarItensPorPersonagem(id) {
    const p = this.buscarPorId(id);
    if (!p) throw new Error("Personagem não encontrado.");
    return p.itens;
  }

  removerItemDoPersonagem(idPersonagem, idItem) {
    const p = this.buscarPorId(idPersonagem);
    if (!p) throw new Error("Personagem não encontrado.");
    p.removerItemPorId(idItem);
  }

  buscarAmuleto(id) {
    const p = this.buscarPorId(id);
    if (!p) throw new Error("Personagem não encontrado.");
    return p.buscarAmuleto();
  }
}

module.exports = ServicoPersonagem;
