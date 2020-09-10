export interface Insurance {
	id: number;
	name: string;
	location: string;
	yrOfOperation: number;
}

export interface Iinsurance {
	companyName: string;
	pocPhoneNumber: string;
	businessEmail: string;
	pocFullName: string;
	idNumber: string;
}

export interface Resolved {
	status: string;
	message: string;
	data: Iinsurance[];
}

export interface ReturnedInsu {
	businessEmail: string;
	companyName: string;
	createdAt: Date;
	idNumber: string;
	pocPhoneNumber: string;
	__v: number;
	_id: string;
}

export interface ResolvedInsu {
	status: string;
	message: string;
	data: ReturnedInsu;
}

export interface Idelete {
	status: string;
	Message: string;
}
