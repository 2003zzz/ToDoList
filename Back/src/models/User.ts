import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../utils/database";

interface IUser {
    id: number;
    name: string;
    password: string;
    phone: string;
}

// Определяем тип создания пользователя, где id необязателен (autoIncrement)
interface IUserCreationAttributes extends Optional<IUser, "id"> {} 

class User extends Model<IUser, IUserCreationAttributes> implements IUser {
    id!: number;
    name!: string;
    password!: string;
    phone!: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false
});

export default User;