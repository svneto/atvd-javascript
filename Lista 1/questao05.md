As palavras-chave var, let e const são usadas para declarar variáveis em JavaScript, mas cada uma tem suas próprias características e escopos.

var:
No passado, var era a única maneira de declarar variáveis em JavaScript.
As variáveis declaradas com var têm escopo de função. Isso significa que elas são visíveis dentro da função em que são declaradas, independentemente de blocos de código (como loops ou condicionais).
As variáveis var são suscetíveis ao fenômeno chamado de "hoisting", onde a declaração da variável é movida para o topo de sua função ou escopo, mesmo que a inicialização permaneça no lugar onde foi declarada.

let:
let foi introduzido no ES6 (ECMAScript 2015) para resolver algumas das limitações de var.
As variáveis declaradas com let têm escopo de bloco. Isso significa que elas são visíveis apenas dentro do bloco em que são declaradas (como um loop for, while, if, etc.).
As variáveis let não são suscetíveis ao hoisting, o que significa que elas não podem ser acessadas antes da sua declaração no código.

const:
const também foi introduzido no ES6 e é usado para declarar variáveis com valores que não serão reatribuídos.
As variáveis declaradas com const têm escopo de bloco e não podem ser reatribuídas depois de inicializadas. No entanto, o valor de uma variável const pode ser mutável se for um objeto ou um array, o que significa que você pode modificar os valores das propriedades do objeto ou elementos do array, mas não pode reatribuir a variável.
Assim como let, as variáveis const não são suscetíveis ao hoisting.

Enquanto var tem escopo de função e é suscetível ao hoisting, let e const têm escopo de bloco e não são suscetíveis ao hoisting. const é usado para valores que não serão reatribuídos, enquanto let é usado para valores que podem ser reatribuídos.

Basicamente, quando o Javascript compila todo seu código, todas as declarações de variáveis usando var são hoistiadas(abrasilerei)/levadas ao topo de suas funções/escopo local (se declaradas dentro de uma função), ou ao topo do escopo global (se declaradas fora de uma função) independentemente de onde a declaração foi feita. Isto é o que queremos dizer com “hoisting”.