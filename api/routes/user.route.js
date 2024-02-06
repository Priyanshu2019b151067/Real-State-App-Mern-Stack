import express from 'express';
import { test } from '../controlers/user.conroller.js';
const myuserrouter = express.Router();
myuserrouter.get('/test',test);

export default myuserrouter;