"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interAlun_1 = require("./interAlun");
const interLivros_1 = require("./interLivros");
let aluguel = [
    {
        ID_Student: 1,
        ID_Livros: 1,
        data: new Date(2024, 7, 8)
    },
    {
        ID_Student: 3,
        ID_Livros: 4,
        data: new Date(2024, 9, 12)
    }
];
// uso o find para buscar o id e comparar de acordo com oque eu escolhi
function alugar_livros(id_livro, id) {
    const livro = interLivros_1.livros.find(l => l.id_livro === id_livro);
    const aluno = interAlun_1.alunos.find(a => a.id === id);
    // compara se o id que eu coloquei esta no array alunos e livros
    if (!livro) {
        return "Livro não encontrado.";
    }
    if (!aluno) {
        return "Aluno não encontrado.";
    }
    // Verifica se o aluno já alugou 4 livros
    if (aluno.livros_emprestado >= 4) {
        return "Limite de 4 livros por aluno alcançado.";
    }
    // Verifica se há livros disponíveis
    if (livro.quantidades <= 0) {
        return "Livro não disponível.";
    }
    // Aluga o livro e registra ja atualizando os dados 
    livro.quantidades--;
    aluno.livros_emprestado++;
    const alugado = {
        ID_Student: id,
        ID_Livros: id_livro,
        data: new Date(2024, 7, 8)
    };
    aluguel.push(alugado);
    return `Livro: '${livro.titulo}' alugado com sucesso`;
}
const data = new Date();
const resultado = alugar_livros(2, 1); // Tentando alugar o livro com ID 1 para o aluno com ID 1
console.log("------------------------------------------------");
console.log(resultado);
console.log(`Quantidades desse livro: ${interLivros_1.livros.find(l => l.id_livro === 2)?.quantidades}`); // escolha o id do livro
console.log(`Quantidades de livros ja alugados deste aluno: ${interAlun_1.alunos.find(a => a.id === 1)?.livros_emprestado}`); // escolha o id do aluno
console.log(`Horário: ${data}`);
console.log("------------------------------------------------");
console.log(aluguel);
