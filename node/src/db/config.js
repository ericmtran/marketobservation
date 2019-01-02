import { PORT,HOST,DATABASE, USERNAME, PASSWORD } from "babel-dotenv"
const database = {
  "user": USERNAME,
  "host": HOST,
  "database": DATABASE,
  "password": PASSWORD,
  "port": PORT, 
  "idleTimeoutMillis": 30000,
  "connectionTimeoutMillis" : 2000,
  "max": 10
}
export {database}