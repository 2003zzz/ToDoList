import { DataTypes, Model } from "sequelize"
import sequelize from "../utils/database"
interface IPosts {
    id: number
    id_user: number
    title: string
    content: string
    image?: Buffer
}
class Post extends Model <IPosts> implements IPosts {
    id!: number
    id_user!: number
    title!: string
    content!: string
    image?: Buffer    
} 

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.BLOB('long'),
        allowNull: true
    }
}, 
{sequelize, modelName: "Posts", tableName: "posts", timestamps: false })

export default Post