export interface Livro {
    id_livro: number                  //Identificador único do livro.
    titulo : string             //ítulo do livro.
    autor: string              // Autor do livro.
    ano: number               //Ano de publicação do livro.
    disponibilidade: boolean  //Indica se o livro está disponível para aluguel.
    quantidades: number      //Quantidade total de exemplares do livro na biblioteca.

   
}

export let livros:Array<Livro> = [             // criação do Array com tipo da interface para manipulação de interface e Array
    
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
    
]

const dispo = livros.filter(function(livros:{           //função que filtar oque estao disponiveis  
    quantidades : number
}): boolean{
    return livros.quantidades >= 1 
})

//console.log(dispo)

const retornar_titulo = livros.map(function(livros:{
    titulo:string
}):string{
    return livros.titulo
})

//console.log(retornar_titulo)

function totalLivrosPorAutor(livros: Livro[], autor: string): number {
    return livros.reduce((total, livro) => {
        // Verificar se o livro é do autor especificado
        if (livro.autor === autor) {
            // Adicionar a quantidade do livro ao total acumulado               
            return  total + livro.quantidades;
        }
        // Caso não seja do autor, retornar o total sem alteração
        return total;
    }, 0); // Inicializando o acumulador com 0
}

const totalDeLivrosAutorX = totalLivrosPorAutor(livros, "Sergio Castro"); // informa o autor aqui
//console.log(totalDeLivrosAutorX);
//console.log(livros)


function ordenarLivrosPorAno(livros: Livro[]): Livro[] {
    return livros.sort((a, b) => {
        // Comparar anos de forma decrescente
        return b.ano - a.ano;
    });
}
    
const livrosOrdenados = ordenarLivrosPorAno(livros);
//console.log(livrosOrdenados);

