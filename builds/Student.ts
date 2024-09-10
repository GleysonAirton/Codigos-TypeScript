export interface Student {
    idStudent: number                      
    nameStudent: string                    
    borrowedBooks: number  
}
    export let students:Array<Student> = [     
        {
            idStudent:1, 
            nameStudent:"Junior",            
            borrowedBooks: 2
        },
        {
            idStudent: 2,
            nameStudent: "Lucas",                  
            borrowedBooks: 3
        
        },       
        {
            idStudent: 3,
            nameStudent: "João",                   
            borrowedBooks: 4
        }  
    ]
    console.log(students)