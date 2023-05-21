import { DataSource } from "typeorm";
import { Student } from "./entities/Student";
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_NAME,
    entities: [ Student ],
    logging: true,
    synchronize: true,
})