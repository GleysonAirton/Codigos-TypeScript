export interface Book {
    idBook: number                 
    title : string             
    author: string           
    year: number              
    available: boolean  
    quantity: number      
}
    export let books:Array<Book> = [             
        {
            idBook: 1,
            title: "As aventuras do Homem-aranha no Brasil",
            author: "Stan Lee",
            year: 2024,
            available: true,
            quantity: 5
        },
        {
            idBook: 2,
            title: "Fome e Sede",
            author: "Sergio Castro",
            year: 1984,
            available: true,
            quantity: 3
        },
        {
            idBook: 3,
            title: "Como ficar rico",
            author: "Sergio Castro",
            year: 2020,
            available: true,
            quantity: 1
        },
        {
            idBook: 4,
            title: "Linux - completo",
            author: "Cleber Augusto",
            year: 1990,
            available: true,
            quantity: 2
        },
        {
            idBook: 5,
            title: "Sherlock Homes",
            author: "José De Alencar",
            year: 2018,
            available: false,
            quantity: 0
        },    
        ]   
