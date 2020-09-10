export interface Iproduct {
	productId: number;
	name: string;
	price: number;
	productCode: string;
	starRating: number;
	description: string;
	details: string;
	releaseDate: string;
	imageUrl: string;
	num?: number;
	total?: number;
}

export interface IproductResolved {
	product: Iproduct;
	error?: any;
}
