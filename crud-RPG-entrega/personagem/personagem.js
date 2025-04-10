export class Personagem {
    static CLASSES_VALIDAS = ["Guerreiro", "Mago", "Arqueiro", "Ladino", "Bardo"];
  
    constructor(id, nome, nomeAventureiro, classe, level, forca, defesa) {
      this.validarClasse(classe);
      this.validarAtributos(forca, defesa);
  
      this.id = id;
      this.nome = nome;
      this.nomeAventureiro = nomeAventureiro;
      this.classe = classe;
      this.level = level;
      this.forca = forca;
      this.defesa = defesa;
      this.itens = [];
    }
  
    validarClasse(classe) {
      if (!Personagem.CLASSES_VALIDAS.includes(classe)) {
        throw new Error(`Classe inválida: ${classe}`);
      }
    }
  
    validarAtributos(forca, defesa) {
      const total = forca + defesa;
      if (total > 10) {
        throw new Error("Distribuição inválida: máximo de 10 pontos entre Força e Defesa.");
      }
    }
  
    adicionarItem(item) {
      if (item.tipo === "Amuleto" && this.itens.some(i => i.tipo === "Amuleto")) {
        throw new Error("O personagem já possui um Amuleto.");
      }
      this.itens.push(item);
    }
  
    get forcaTotal() {
      return this.forca + this.itens.reduce((acc, item) => acc + item.forca, 0);
    }
  
    get defesaTotal() {
      return this.defesa + this.itens.reduce((acc, item) => acc + item.defesa, 0);
    }
  }
  