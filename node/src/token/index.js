import jwt from 'jsonwebtoken'
import {jswebtoken} from './config'
const { expiresIn, issuer, secretOrKey } = jswebtoken

const Create = (userId,email) => {
    const token = jwt.sign({id: userId,email},secretOrKey,{ expiresIn, issuer})
    return token
}
const Verify = (token,users) => {
    jwt.verify(token,secretOrKey, (err,decoded) => {
        if(err) return err
        for (let i in users){
          if (decoded.email == users[i].email && decoded.id == users[i].id){
                return true
          }else{
            continue
          }
        }
    })
    return false 
}
export {Create, Verify}