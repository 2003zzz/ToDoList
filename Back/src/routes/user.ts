import { Router } from 'express';
import { getAllUsers, getUser, addUser,deleteUser,changeUser } from '../controllers/UserController';

const router = Router();

router.get('/getUser', getUser);
router.get('/getAllUsers', getAllUsers);
router.post('/addUser', addUser);
router.delete('/deleteUser', deleteUser);
router.put('/changeUser', changeUser);

export default router