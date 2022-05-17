import { pool } from "../db/pool";
import * as UserQuery from "../db/queries/users/user.queries";
import { User } from "../models/user/user.model";

export const getUsers = async (): Promise<User[]> => {
	const client = await pool.connect();
	const users = await UserQuery.getAllUsers.run(undefined, client);
	client.release();
	// parse the result into a User object
	return users.map(
		(user) => new User(user.id, user.username, user.email, user.created)
	);
};

export const getUserById = async (id: number): Promise<User> => {
	const client = await pool.connect();
	const users = await UserQuery.findUserById.run({ id: id }, client);
	client.release();
	if (users[0]) {
		return new User(
			users[0].id,
			users[0].username,
			users[0].email,
			users[0].created
		);
	}
	return Promise.reject(new Error("User not found"));
};
