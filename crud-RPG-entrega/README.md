RPG Manager - Sistema de Gerenciamento de Personagens e Itens Mágicos

Bem-vindo ao RPG Manager! 

Objetivo

Criar um sistema completo utilizando JavaScript puro com foco em boas práticas de programação orientada a objetos, manipulação de DOM, e validações de regras de negócio.

Estrutura de Pastas Atual

crud-RPG-entrega/
├── index.html                # Interface principal
├── style.css                 # Estilo visual do sistema
├── item/
│   └── item.js               # Classe e lógica dos Itens Mágicos
├── personagem/
│   └── personagem.js         # Classe e lógica dos Personagens
├── script/
│   └── script.js             # Controle da interface e chamadas

Funcionalidades.

1. Criar Personagem

Formulário com campos de nome, nome aventureiro, classe, nível, força e defesa.

A soma de força e defesa deve ser exatamente 10 pontos.

Classes permitidas: Guerreiro, Mago, Arqueiro, Ladino, Bardo.

2. Listar Personagens

Exibição em grade com todos os personagens criados.

Mostra nome, classe, level, atributos (com os valores somados dos itens equipados).

3. Buscar Personagem por ID

Campo de busca por identificador.

Mostra os dados completos do personagem correspondente.

4. Atualizar Nome de Guerreiro por ID

Campo de ID e novo nome.

Atualiza o nome aventureiro apenas se a classe for "Guerreiro".

5. Remover Personagem

Campo de ID para remoção.

Remove completamente o personagem da lista.

6. Criar Item Mágico

Campos para nome, tipo (Arma, Armadura, Amuleto), força, defesa e personagem associado.

Validações aplicadas:

Arma: defesa obrigatoriamente 0.

Armadura: força obrigatoriamente 0.

Amuleto: pode ter força e defesa, mas só é permitido um por personagem.

Item precisa ter pelo menos um valor (força ou defesa) maior que zero.

7. Listar Itens Mágicos

Exibição dos itens associados a cada personagem.

8. Buscar Item Mágico por ID

Campo para digitar o identificador do item.

Mostra os detalhes do item mágico correspondente.

9. Adicionar Item Mágico ao Personagem

Após criação do item, ele é automaticamente associado ao personagem escolhido.

10. Listar Itens Mágicos por Personagem

Após selecionar um personagem, mostra todos os seus itens.

11. Remover Item Mágico do Personagem

Seleciona um personagem e insere o ID do item a ser removido.

Remove o item da lista de itens do personagem.

12. Buscar Amuleto do Personagem

Seleciona um personagem.

Exibe se ele possui um amuleto e quais são seus atributos.


Regras de Negócio Implementadas

Um personagem sempre possui 10 pontos para distribuir entre Força e Defesa.

Itens:

Arma: Força > 0, Defesa = 0

Armadura: Defesa > 0, Força = 0

Amuleto: Pode ter ambos, mas apenas um por personagem

Nenhum item pode ter Força = 0 e Defesa = 0

Os valores exibidos na tela consideram os atributos base somados aos atributos dos itens equipados.

Como Executar

Clone ou baixe este repositório.

Abra o arquivo index.html diretamente no navegador.

Utilize os formulários para criar e gerenciar personagens e itens.
