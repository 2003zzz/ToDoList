// Связи моделей
import User from "./User";
import Post from "./Posts";
import sequelize from "../utils/database";


// Связь моделей
User.hasMany(Post, { foreignKey: "id_user" } )
Post.belongsTo(User, { foreignKey: "id_user" } )

export default async () => {
    try {
        await sequelize.sync()
        console.log("Connection has been established successfully.")
    } catch (error) 
    {
        console.error(error)
    }
}
export { User }