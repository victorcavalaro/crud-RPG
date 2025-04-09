const { v4: uuidv4 } = require("uuid");

const TIPOS_VALIDOS = ["Arma", "Armadura", "Amuleto"];

class ItemMagico {
  constructor(nome, tipo, forca, defesa) {
    if (!TIPOS_VALIDOS.includes(tipo)) throw new Error("Tipo inválido.");
    if ((forca + defesa) === 0) throw new Error("O item não pode ter força e defesa zeradas.");
    if (forca > 10 || defesa > 10) throw new Error("Força e defesa devem ser no máximo 10.");

    this.id = uuidv4();
    this.nome = nome;
    this.tipo = tipo;

    if (tipo === "Arma") {
      this.forca = forca;
      this.defesa = 0;
    } else if (tipo === "Armadura") {
      this.forca = 0;
      this.defesa = defesa;
    } else {
      this.forca = forca;
      this.defesa = defesa;
    }
  }

  descrever() {
    return `🧪 ${this.nome} [${this.tipo}] - Força: ${this.forca}, Defesa: ${this.defesa}`;
  }
}

module.exports = { ItemMagico };
