// password -> admin@123 -> 2@serjko4resjr -> encrypt, decrypt

import { Router } from "express";
import passwordController from "../controllers/password.controller.mjs";

// hashing -> one way function

// bcrypt -> library

// npm i bcrypt

// working
// 1. password -> 123
// 2. salt -> random string -> 123dslkjflskd
// 3. encrypt password + salt -> hash -> 2@serjko4resjr
// 4. compare password + salt -> hash

// create hash -> hash(), compare password -> compare()

const passRouter = Router();

passRouter.post("/hash", passwordController.hash_password);

export default passRouter;

