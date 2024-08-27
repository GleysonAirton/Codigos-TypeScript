"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livros = void 0;
exports.livros = [
    // instacias dos Livros com valores de suas propriedades 
    {
        id_livro: 1,
        titulo: "As aventuras do Homem-aranha no Brasil",
        autor: "Stan Lee",
        ano: 2024,
        disponibilidade: true,
        quantidades: 5
    },
    {
        id_livro: 2,
        titulo: "Fome e Sede",
        autor: "Sergio Castro",
        ano: 1984,
        disponibilidade: true,
        quantidades: 3
    },
    {
        id_livro: 3,
        titulo: "Como ficar rico",
        autor: "Sergio Castro",
        ano: 2020,
        disponibilidade: false,
        quantidades: 0
    },
    {
        id_livro: 4,
        titulo: "Linux - completo",
        autor: "Cleber Augusto",
        ano: 1990,
        disponibilidade: true,
        quantidades: 2
    },
    {
        id_livro: 5,
        titulo: "Sherlock Homes",
        autor: "José De Alencar",
        ano: 2018,
        disponibilidade: false,
        quantidades: 0
    },
];
const dispo = exports.livros.filter(function (livros) {
    return livros.quantidades >= 1;
});
//console.log(dispo)
const retornar_titulo = exports.livros.map(function (livros) {
    return livros.titulo;
});
//console.log(retornar_titulo)
function totalLivrosPorAutor(livros, autor) {
    return livros.reduce((total, livro) => {
        // Verificar se o livro é do autor especificado
        if (livro.autor === autor) {
            // Adicionar a quantidade do livro ao total acumulado               
            return total + livro.quantidades;
        }
        // Caso não seja do autor, retornar o total sem alteração
        return total;
    }, 0); // Inicializando o acumulador com 0
}
const totalDeLivrosAutorX = totalLivrosPorAutor(exports.livros, "Sergio Castro"); // informa o autor aqui
//console.log(totalDeLivrosAutorX);
//console.log(livros)
function ordenarLivrosPorAno(livros) {
    return livros.sort((a, b) => {
        // Comparar anos de forma decrescente
        return b.ano - a.ano;
    });
}
const livrosOrdenados = ordenarLivrosPorAno(exports.livros);
//console.log(livrosOrdenados);
