import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser, updateUserCompletely } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

router.put('/:id', updateUserCompletely);

export default router;