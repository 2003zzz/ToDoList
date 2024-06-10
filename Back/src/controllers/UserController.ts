import { Request, Response } from "express";
import { User } from "../models";

const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.send(users);
}

const getUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    // Преобразуем id в число и проверяем корректность
    if (Array.isArray(id) || typeof id !== 'string' || isNaN(Number(id))) {
        return res.status(400).json({ error: 'Invalid ID' });
    }

    const userId = Number(id);
    const user = await User.findOne({ where: { id: userId } });
    return res.json(user);
}

const addUser = async (req: Request, res: Response) => {
    const {name,phone,password} = req.body;
    try {
        const user = await User.create({name,phone,password});
        res.status(201).json(user);
    } 
    catch (error) {
        res.status(400).json({ error: 'Failed to add user', details: error });
    }
}
//delete user in DB

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        const user = await User.destroy({ where: { id: Number(id) } });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Failed to delete user', details: error });
    }
}

//change user in DB
const changeUser = async (req: Request, res: Response) => {
    const {id,name,phone} = req.body;
    try {
        const user = await User.update({name,phone},{where:{id:Number(id)}})
        res.status(200).json(user);
    } catch (error) 
    {
        res.status(400).json({ error: 'Failed to change user', details: error });
    }
}

export { getAllUsers, getUser, addUser, deleteUser, changeUser };


// const changeUser = async (req: Request, res: Response) => {
//     const { id } = req.query;
//     const { name, phone } = req.body;

//     // Проверка на корректность ID
//     if (Array.isArray(id) || typeof id !== 'string' || isNaN(Number(id))) 
//     {
//         return res.status(400).json({ error: 'Invalid ID' });
//     }

//     try {
//         // Обновление пользователя в базе данных
//         const [updatedRows] = await User.update({ name, phone }, { where: { id: Number(id) } });
//         console.log(updatedRows);
//         // Проверка, был ли обновлен хотя бы один пользователь
//         if (updatedRows === 0) {
//             return res.status(404).json({ error: 'User not found' });
//         }

//         // Получение обновленного пользователя
//         const updatedUser = await User.findOne({ where: { id: Number(id) } });
//         res.status(200).json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update user', details: error });
//     }
// };