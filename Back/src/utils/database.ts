// для подключения с базой данных
import { Sequelize } from 'sequelize';
console.log(process.env.db_name!, process.env.db_login!, process.env.db_password!, process.env.db_host!)
const sequelize = new Sequelize(process.env.db_name!, process.env.db_login!, process.env.db_password!, 
    {
    host: process.env.db_host!,
    dialect: 'mariadb',
    logging: console.log
});

export default sequelize