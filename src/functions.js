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
        throw new Error("Livro não encontrado.");
    }
    if (!studentForTest) {
        throw new Error("Aluno não encontrado.");
    }
    if (studentForTest.borrowedBooks === bookLimitRented) {
        throw new Error("O estudante excedeu o número de aluguéis.");
    }
    if (bookForTest.quantity === minimumNumberQuantity) {
        throw new Error("Livro não disponível.");
    }
    return { book: bookForTest, student: studentForTest };
}
exports.validateRent = validateRent;
function rentBook(idStudentForTest, idLivroForTeste) {
    try {
        const { book, student } = validateRent(idLivroForTeste, idStudentForTest);
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
    catch (error) {
        if (error instanceof Error) {
            return `Falha no aluguel: ${error.message}`;
        }
    }
}
exports.rentBook = rentBook;
exports.dateOfRent = new Date();
exports.resultOfRent = rentBook(1, 2);
