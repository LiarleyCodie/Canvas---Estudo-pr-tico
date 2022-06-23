# CANVAS | UM ESTUDO DE CASO
---
## A Lâmpada de... sabedoria?
Depois de re-datilografar vários exemplos da MDN a respeito de Canvas, resolvi fazer um pequeno estudo de caso.

Semanas atrás, jogando Super Mario Bres. 3, no que seria um console (horrível) portatil de Nintendinho; depois de perder inúmeras vezes, para me consolar, o joguinho resolver me oferecer o minigame de cardflip.

Esse minigame é aquele em que, em um conjunto de cartas você vira uma carta e deve tentar encontrar a outra carta gêmea. Se ambas as cartas forem iguais você ganha o item respectivo, do contrário, você só tem mais uma chancê de errar.

Resolvi recriar esse minigame, como um estudo prático. Levei mais de uma semana, e acabou que me cansei temporariamente de ver o mesmo código.

**O fato é que** eu usei muito do próprio JavaScript para manipular a DOM e criar varios dos elementos e, claramente, a lógica do jogo. Até que cheguei a um resultado satisfatório.

[imagem do repositório citado]

---
## OK... mas e esse projeto aqui?
Depois do projeto anterior, dei uma buscada na MDN a respeito de Canvas. Depois de vários exemplos re-escritos comecei a recriar um protótipo, super simples do *joguinho multiplayer feito pelo Filipe Deschamps*. 

Fiz a movimentação do pixel verde atráves dos Direcionais do teclado.

O player não transborda a tela e, logo ao lado, existe um "debug" que retorna a posição x e y do jogador e se ele está colidindo com as bordas.

tentei usar a função **requestAnimationFrame**, mas consegui torna-la inutil nesse projeto. Por claramente não conhece-la e não saber aplicar, com ou sem ela, ela se tornou inutil de igual forma.

[fotos do projeto]