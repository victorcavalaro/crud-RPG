const ServicoPersonagem = require("./services/ServicoPersonagem");
const ServicoItemMagico = require("./services/ServicoItemMagico");

const personagemService = new ServicoPersonagem();
const itemService = new ServicoItemMagico();

const p1 = personagemService.cadastrar({
  nome: "Arnaldo",
  nomeAventureiro: "Caçador das Sombras",
  classe: "Arqueiro",
  forca: 5,
  defesa: 5,
  level: 2
});

const arma = itemService.cadastrar({ nome: "Arco Élfico", tipo: "Arma", forca: 3, defesa: 2 });
const armadura = itemService.cadastrar({ nome: "Manto da Floresta", tipo: "Armadura", forca: 1, defesa: 4 });
const amuleto = itemService.cadastrar({ nome: "Amuleto Lunar", tipo: "Amuleto", forca: 2, defesa: 2 });

personagemService.adicionarItemAoPersonagem(p1.id, arma);
personagemService.adicionarItemAoPersonagem(p1.id, armadura);
personagemService.adicionarItemAoPersonagem(p1.id, amuleto);

console.log(p1.descrever());
console.log("Itens:");
personagemService.listarItensPorPersonagem(p1.id).forEach(i => console.log(i.descrever()));
