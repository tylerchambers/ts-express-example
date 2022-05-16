import { Router } from 'express';
import Posts from './posts/posts';
import Users from './users/users';

const main = Router();

main.use('/posts', Posts);
main.use('/users', Users);

export default main;