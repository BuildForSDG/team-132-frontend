export interface User {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	phone: string;
	role: string;
	idNumber?: string;
	alternatePhone?: string;
}

export interface Itoken {
	token: string;
	success: boolean;
}
