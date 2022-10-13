import pg from "pg"
import readline from "readline-sync"
const { Pool } = pg
import { creds } from "./creds.js"

const pool = new Pool(creds);


//const query = `select * from customers`;// order by customers.customerid`

async function runQuery(query) {
    return await pool.query(query)
}
while (true) {
    const answer = readline.question("Run what?");
    let query = ""
    let results = ""


    switch (answer) {
        case "1"://1. select * from customers
            query = "select customer_id, first_name, Last_name from customers"
            results = await runQuery(query)
            console.table(results.rows)
            break;
        //console.table((await runQuery("select * from customers")).rows)

        case "2":  //2. add a new customer
            query = `insert into customers
            (first_name, last_name, phone, email)
            values
            ('alon', 'fischer', '9178675309', 'email1@gmail.com');`
            results = await runQuery(query)
            console.log("user added")
            break;
        case "3":  //3. update that customer
            query = `UPDATE customers
            SET first_name='super', 
            last_name='gggggg',
        --	email=?, phone=?, 
        -- 	created_at=?, 
            updated_at=NOW()
            WHERE customer_id=1;`
            results = await runQuery(query)
            console.log("customer updated")
            break;
        default:
            console.log("wat!")
            break;

    }

}