
export interface Aluno {
    id: number                      // criação das interfaces e declarações de suas propriedades
    nome: string                    
    livros_emprestado: number
   
}
    export let alunos:Array<Aluno> = [     // criação d Array com tipo da interface para manipulação de inyterface e Array
       
            // instacia dos Alunos com valores de suas propriedades

        {
            id:1, 
            nome:"Gleyson Airton",            
            livros_emprestado: 2
         
        },

        {
        id: 2,
        nome: "Lucas",                  
        livros_emprestado: 3
        
        },
        
        {
        id: 3,
        nome: "João",                   
        livros_emprestado: 4
        

        }
        
    ]

    //console.log(alunos)