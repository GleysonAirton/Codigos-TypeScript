"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultOfRent = exports.dateOfRent = exports.rentBook = exports.validateRent = exports.orderedBooks = exports.sortBooksByYear = exports.chooseAuthor = exports.getTotalBooksByAuthor = exports.getBookTitles = exports.getAvailableBooks = void 0;
const Student_1 = require("./Student");
const Book_1 = require("./Book");
const Rental_1 = require("./Rental");
const bookLimitRented = 5;
const minimumNumberQuantity = 0;
const getAvailableBooks = () => Book_1.books.filter((books) => books.quantity > minimumNumberQuantity);
exports.getAvailableBooks = getAvailableBooks;
const getBookTitles = () => Book_1.books.map((books) => books.title);
exports.getBookTitles = getBookTitles;
function getTotalBooksByAuthor(author) {
    return Book_1.books.reduce((total, books) => books.author === author ? total + books.quantity : total, 0);
}
exports.getTotalBooksByAuthor = getTotalBooksByAuthor;
exports.chooseAuthor = getTotalBooksByAuthor("Sergio Castro");
function sortBooksByYear(books) {
    return [...books].sort((a, b) => b.year - a.year);
}
exports.sortBooksByYear = sortBooksByYear;
;
exports.orderedBooks = sortBooksByYear(Book_1.books);
function validateRent(idLivroForTeste, idstudent) {
    const bookForTest = Book_1.books.find(book => book.idBook === idLivroForTeste);
    const studentForTest = Student_1.students.find(student => student.idStudent === idstudent);
    if (!bookForTest) {
        return { isValid: false, message: "Livro não encontrado." };
    }
    if (!studentForTest) {
        return { isValid: false, message: "Aluno não encontrado." };
    }
    if (studentForTest.borrowedBooks === bookLimitRented) {
        return { isValid: false, message: "O estudante excedeu o número de aluguéis." };
    }
    if (bookForTest.quantity === minimumNumberQuantity) {
        return { isValid: false, message: "Livro não disponível." };
    }
    return { isValid: true, book: bookForTest, student: studentForTest };
}
exports.validateRent = validateRent;
function rentBook(idStudentForTest, idLivroForTeste) {
    const validationResult = validateRent(idLivroForTeste, idStudentForTest);
    if (!validationResult.isValid) {
        return validationResult.message || "Erro desconhecido.";
    }
    const book = validationResult.book;
    const student = validationResult.student;
    book.quantity--;
    student.borrowedBooks++;
    const rented = {
        idStudent: idStudentForTest,
        idLivros: idLivroForTeste,
        date: new Date()
    };
    Rental_1.rent.push(rented);
    return `Livro: '${book?.title}' alugado com sucesso`;
}
exports.rentBook = rentBook;
exports.dateOfRent = new Date();
exports.resultOfRent = rentBook(1, 2);
// Camel Case// 
//Nome de classe : Começa com letra Maiuscula e separa as palavras com letras Maiusculas
//Nome de tributo : Começa com letra Minuscula e separa as palavras com letras Maiusculas
//nome de método : Começa com letra Minuscula e separa as palavras com letras Maiusculas
