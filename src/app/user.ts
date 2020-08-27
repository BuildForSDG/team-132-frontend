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

export interface Iresponce {
	alternatePhone: string;
	email: string;
	firstname: string;
	lastname: string;
	password: string;
	phone: string;
	role: string;
	__v: number;
	_id: string;
}

export interface ReturnedUser {
	status: string;
	Message: string;
	farmer: Iresponce[];
}
