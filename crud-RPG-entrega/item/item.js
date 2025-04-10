export class Item {
    static TIPOS_VALIDOS = ["Arma", "Armadura", "Amuleto"];
  
    constructor(id, nome, tipo, forca, defesa) {
      this.validarTipo(tipo);
      this.validarAtributos(tipo, forca, defesa);
  
      this.id = id;
      this.nome = nome;
      this.tipo = tipo;
      this.forca = tipo === "Armadura" ? 0 : forca;
      this.defesa = tipo === "Arma" ? 0 : defesa;
    }
  
    validarTipo(tipo) {
      if (!Item.TIPOS_VALIDOS.includes(tipo)) {
        throw new Error(`Tipo de item inválido: ${tipo}`);
      }
    }
  
    validarAtributos(tipo, forca, defesa) {
      if (forca < 0 || forca > 10 || defesa < 0 || defesa > 10) {
        throw new Error("Atributos devem estar entre 0 e 10.");
      }
  
      if (forca === 0 && defesa === 0) {
        throw new Error("Item não pode ter Força e Defesa iguais a zero.");
      }
  
      if (tipo === "Arma" && defesa !== 0) {
        throw new Error("Armas devem ter Defesa igual a 0.");
      }
  
      if (tipo === "Armadura" && forca !== 0) {
        throw new Error("Armaduras devem ter Força igual a 0.");
      }
    }
  
    getResumo() {
      return {
        id: this.id,
        nome: this.nome,
        tipo: this.tipo,
        forca: this.forca,
        defesa: this.defesa
      };
    }
  }
  