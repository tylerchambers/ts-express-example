import { Request, Response } from "express";
import { getUsers, getUserById } from "../../services/users";

export const allUsersController = async (_: Request, res: Response) => {
	getUsers().then((users) => res.json(users));
};

export const getUserByIdController = async (
	req: Request<{ id: Number }>,
	res: Response
) => {
	if (typeof Number(req.params.id) === "number") {
		getUserById(Number(req.params.id))
			.then((user) => res.json(user))
			.catch((err) => res.status(404).json({error: "not found"}));
        return
	}
	res.status(400).json({ error: "invalid user id" });
};
