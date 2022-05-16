import { IUser } from "../user/user.model";

export interface IPost {
    id: number;
    content: string;
    created: Date;
    userId: number;
    user: IUser;
}

export class Post implements IPost {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public created: Date,
        public userId: number,
        public user: IUser
    ) {}
}