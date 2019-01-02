import  {database} from './config.js'
import  {Pool} from 'pg'
const pool =  new Pool(database)

const MultiQuery = async (queryString) => {
    const client = await pool.connect()
    const result = await client.query(queryString)
    return result
}
const SingleQuery = async (queryString) => {
    const result = await pool.query(queryString)
    return result
}
export {MultiQuery,SingleQuery}