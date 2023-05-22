import "reflect-metadata";
import app from './app';
import { AppDataSource } from './db';
require('dotenv').config()

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(process.env.PORT)
        console.log('Server in', process.env.PORT);
    } catch (error) {
        console.log(error)
    }
}

main();