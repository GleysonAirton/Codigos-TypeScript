import { Student,students } from "./Student"
import { Book,books } from "./Book"
import { Rental,rent } from "./Rental";

const bookLimitRented = 5;
const minimumNumberQuantity= 0;

export const getAvailableBooks = (): Book[] => 
  books.filter((books: Book) => books.quantity > minimumNumberQuantity);
  

export const getBookTitles = (): string[] => 
  books.map((books:Book) => books.title)


export function getTotalBooksByAuthor(author: string): number {
  return books.reduce((total, books) => 
    books.author === author ? total + books.quantity :total,0 )
}
export const chooseAuthor = getTotalBooksByAuthor("Sergio Castro");

export function sortBooksByYear(books: Book[]): Book[]{
  return [...books].sort((a, b) => b.year - a.year);
  };
export const orderedBooks = sortBooksByYear(books);


export function validateRent(idLivroForTeste:number , idstudent: number): any {
  const bookForTest:Book | undefined = books.find(book => book.idBook === idLivroForTeste);
  const studentForTest: Student | undefined  = students.find(student => student.idStudent === idstudent);
     
  if (!bookForTest) {
    throw new Error ( "Livro não encontrado." );
  }
  if (!studentForTest) {
    throw new Error ("Aluno não encontrado." );
  }
  if (studentForTest.borrowedBooks === bookLimitRented) {
    throw new Error ("O estudante excedeu o número de aluguéis.");
  }
  if (bookForTest.quantity === minimumNumberQuantity) {
    throw new Error ("Livro não disponível.");
  }
  return { book: bookForTest,student: studentForTest };
}

export function rentBook(idStudentForTest: number, idLivroForTeste: number): string | undefined{
  try{
  const {book,student} = validateRent(idLivroForTeste, idStudentForTest);

    book.quantity--;
    student.borrowedBooks++;
    const rented: Rental = {
      idStudent: idStudentForTest,      
      idLivros: idLivroForTeste,          
      date: new Date()
  };
  rent.push(rented);
  return `Livro: '${book?.title}' alugado com sucesso`
  
} catch (error){
  if (error instanceof Error) {
    return `Falha no aluguel: ${error.message}`;
}}}
export const dateOfRent: Date = new Date();
export const resultOfRent = rentBook(1, 2); 
