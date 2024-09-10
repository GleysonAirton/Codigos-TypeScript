import { rent } from "./Rental";
import { books } from "./Book";
import { students } from "./Student";
import { getAvailableBooks,
    getBookTitles,
    getTotalBooksByAuthor,
    chooseAuthor,
    sortBooksByYear,
    orderedBooks,
    validateRent,
    rentBook,
    dateOfRent,
    resultOfRent,
} from "./functions";
console.log("---------------------------------------------- Livros disponiveis:------------------------------------------------")
console.log(getAvailableBooks());
console.log("---------------------------------------------- Titulos de todos os livros: ---------------------------")
console.log(getBookTitles());
console.log("---------------------------------------------- Numeros totais de livros por autor:-----------------------------------")
console.log(`Total de Livros: `, chooseAuthor);

console.log("---------------------------------------------- Livros de forma Ordenados:---------------------------------------------")
console.log(orderedBooks);
console.log("------------------------------------------------  ALUGUEL -------------------------------------");
console.log(resultOfRent);  
console.log(`Quantidades desse livro: ${books.find(books => books.idBook === 2)?.quantity}`);  
console.log(`Quantidades de livros ja alugados deste aluno: ${students.find(students => students.idStudent === 1)?.borrowedBooks}`); 
console.log(`Horário: ${dateOfRent}`);
console.log("------------------------------------------------ REGISTRO DO ALUGUEL ----------------------------");
console.log(rent)
console.log(students)