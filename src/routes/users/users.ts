import { Router } from "express";
import { allUsersController, getUserByIdController } from "../../controllers/users/users";

const users = Router();

users.get("/", allUsersController);
users.get("/:id", getUserByIdController);

users.post("/", (req, res) => {
	res.send("Create user! " + req.body);
});

users.put("/:id", (req, res) => {
	res.send("Update user with id: " + req.params.id);
});

users.delete("/:id", (req, res) => {
	res.send("Delete user with id: " + req.params.id);
});

export default users;
