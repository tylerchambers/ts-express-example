import { Router } from "express";

const users = Router();

users.get("/", (_, res) => {
	res.send("All users!");
});

users.get("/:id", (req, res) => {
	res.send("User with id: " + req.params.id);
});

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
