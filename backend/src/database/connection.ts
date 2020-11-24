import {createConnection} from "typeorm";

createConnection({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nlw3db"
})