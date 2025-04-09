const { v4: uuidv4 } = require("uuid");

const CLASSES_VALIDAS = ["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"];

class Personagem {
  constructor(nome, nomeAventureiro, classe, forcaBase, defesaBase, level = 1) {
    if (!CLASSES_VALIDAS.includes(classe)) throw new Error("Classe inválida.");
    if (forcaBase + defesaBase > 10) throw new Error("A soma de força e defesa não pode passar de 10.");

    this.id = uuidv4();
    this.nome = nome;
    this.nomeAventureiro = nomeAventureiro;
    this.classe = classe;
    this.level = level;
    this.forcaBase = forcaBase;
    this.defesaBase = defesaBase;
    this.itens = [];
  }

  adicionarItem(item) {
    if (item.tipo === "Amuleto" && this.itens.some(i => i.tipo === "Amuleto")) {
      throw new Error("Este personagem já possui um amuleto.");
    }
    this.itens.push(item);
  }

  removerItemPorId(itemId) {
    this.itens = this.itens.filter(i => i.id !== itemId);
  }

  buscarAmuleto() {
    return this.itens.find(i => i.tipo === "Amuleto");
  }

  get forcaTotal() {
    return this.forcaBase + this.itens.reduce((soma, i) => soma + i.forca, 0);
  }

  get defesaTotal() {
    return this.defesaBase + this.itens.reduce((soma, i) => soma + i.defesa, 0);
  }

  descrever() {
    return `🎖️ ${this.nomeAventureiro} (${this.classe})\nForça Total: ${this.forcaTotal} | Defesa Total: ${this.defesaTotal}`;
  }
}

module.exports = { Personagem };
