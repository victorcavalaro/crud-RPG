const { ItemMagico } = require("../models/ItemMagico");

class ServicoItemMagico {
  constructor() {
    this.itens = [];
  }

  cadastrar(dados) {
    const novo = new ItemMagico(dados.nome, dados.tipo, dados.forca, dados.defesa);
    this.itens.push(novo);
    return novo;
  }

  listar() {
    return this.itens;
  }

  buscarPorId(id) {
    return this.itens.find(i => i.id === id);
  }
}

module.exports = ServicoItemMagico;
