import {Create,Verify} from '../token/index'
import bcrypt from 'bcrypt'
import {MultiQuery,SingleQuery} from '../db/pool'

var saltRounds = 10,
    users = null,
    token = null;
const login = (req, res) => {
  const {email,password} = req.body
  if(!email && !password) return res.send('Invalid input')
  MultiQuery("SELECT * FROM authenticate")
    .then(data => {
        users = data.rows
        for (let i in users){
          if (email  == users[i].email){
            var valid = bcrypt.compareSync(password, users[i].password)   
            if (valid) {
            token = Create(users[i].id,users[i].email)
              res.json({
                sucess: true,
                token
              })
              break;
            }
          }
        }
        if (!token){
            res.json({
              sucess: false,
              message: 'Invalid email or password',
              token          
            })
        }    
    })
    .catch(error => {
      res.status(400).send(error)
    })
}

const authenticate =  (req, res,next) => {
  var check = null
  MultiQuery("SELECT * FROM authenticate") 
    .then(data => {
      users = data.rows
      token = req.headers['x-access-token'] || req.headers['authorization']
      if (!token) return res.status(400).send({auth:false, message:'No token provided'})
      check = Verify(token,users)  
      if (check) return next()
    })
    .catch(err => {
      res.status(400).send(err)
    })
}

const register = (req,res) => {
  bcrypt.hash(req.body.password, saltRounds) 
  .then(hash => {
    MultiQuery(`INSERT INTO authenticate (email,password) VALUES (${req.body.email},${hash})`)
      .catch(err => {
        res.send(err)
      })
    })
  .catch(err => {
    res.send(err)
  })
}
const logout = (req,res) => {
    res.status(200).send({ auth: false, token: null });
}

export {authenticate,login,register,logout}
