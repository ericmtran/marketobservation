import  { Pool} from 'pg'
import  config from './config.json'
var pool =  new Pool(config)

const authenticate =  (req, res, next) => {
  pool.connect()
  .then(client  => {
    return client.query("SELECT * FROM authenticate")
    .then(data => {
      client.release()
      res.send(data.rows)
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}

export {authenticate}
/*
const query = (querytext) => {
  return pool.query(querytext)
}
const end = () =>{
  pool.end()
}
module.exports = {
  query,
  end,
}*/
/*pool.connect()
  .then(client => {
    return client.query("SELECT * FROM authenticate")
      .then(res => {
        client.release()
        console.log(res)
      })
      .catch(err => {
        console.error(err.stack)
      })
  })
  .catch(err => {
    console.error(err.stack)
  })        
pool.end()
  .then(console.log('pool has ended'))  
*/
