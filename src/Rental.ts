export interface Rental {
	idStudent: number;
	idLivros: number;
	date: Date;
}
export let rent: Array<Rental> = [
	{
		idStudent: 1,
		idLivros: 1,
		date: new Date(2024, 7, 8),
	},
	{
		idStudent: 3,
		idLivros: 4,
		date: new Date(2024, 9, 12),
	},
];
