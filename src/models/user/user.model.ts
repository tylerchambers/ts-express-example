export interface IUser {
	email: string;
	id: number;
	username: string;
    created: Date;
}

export class User implements IUser {
	constructor(
		public email: string,
		public id: number,
		public username: string,
        public created: Date
	) {}
}