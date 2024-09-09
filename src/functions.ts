import { Student, students } from "./Student";
import { Book, books } from "./Book";
import { Rental, rent } from "./Rental";

interface ValidationResult {
	isValid: boolean;
	message?: string;
	book?: Book;
	student?: Student;
}

const bookLimitRented = 5;
const minimumNumberQuantity = 0;

export const getAvailableBooks = (): Book[] =>
	books.filter((books: Book) => books.quantity > minimumNumberQuantity);

export const getBookTitles = (): string[] =>
	books.map((books: Book) => books.title);

export function getTotalBooksByAuthor(author: string): number {
	return books.reduce(
		(total, books) =>
			books.author === author ? total + books.quantity : total,
		0
	);
}
export const chooseAuthor = getTotalBooksByAuthor("Sergio Castro");

export function sortBooksByYear(books: Book[]): Book[] {
	return [...books].sort((a, b) => b.year - a.year);
}
export const orderedBooks = sortBooksByYear(books);

export function validateRent(
	idLivroForTeste: number,
	idstudent: number
): ValidationResult {
	const bookForTest: Book | undefined = books.find(
		(book) => book.idBook === idLivroForTeste
	);
	const studentForTest: Student | undefined = students.find(
		(student) => student.idStudent === idstudent
	);

	if (!bookForTest) {
		return { isValid: false, message: "Livro não encontrado." };
	}
	if (!studentForTest) {
		return { isValid: false, message: "Aluno não encontrado." };
	}
	if (studentForTest.borrowedBooks === bookLimitRented) {
		return {
			isValid: false,
			message: "O estudante excedeu o número de aluguéis.",
		};
	}
	if (bookForTest.quantity === minimumNumberQuantity) {
		return { isValid: false, message: "Livro não disponível." };
	}
	return { isValid: true, book: bookForTest, student: studentForTest };
}

export function rentBook(
	idStudentForTest: number,
	idLivroForTeste: number
): string {
	const validationResult = validateRent(idLivroForTeste, idStudentForTest);

	if (!validationResult.isValid) {
		return validationResult.message || "Erro desconhecido.";
	}

	const book = validationResult.book!;
	const student = validationResult.student!;

	book.quantity--;
	student.borrowedBooks++;
	rent.push({
		idStudent: idStudentForTest,
		idLivros: idLivroForTeste,
		date: new Date(),
	});
	return `Livro: '${book?.title}' alugado com sucesso`;
}
export const dateOfRent: Date = new Date();
export const resultOfRent = rentBook(1, 2);
