import express from 'express';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { addUser, getUsers } from '../controller/user-controller.js';

const route = express.Router();
route.post('/add', addUser);
route.get('/users',getUsers);
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

export default route;