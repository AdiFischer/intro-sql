import pg from "pg"
const { Pool } = pg;

import {creds} from "./creds.js"

const pool = new Pool(creds);

const query = `select * from customers order by customers.customerid`
pool.query(query, (err, data) => {
    if (err) {
        console.error(err)
        return // stops here
    }
    //console.log(data.rows);
    console.table(data.rows);

    pool.end();
    

}
)