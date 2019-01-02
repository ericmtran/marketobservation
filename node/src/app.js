import express from 'express';
import  * as req from './controllers/index';
import bodyParser from 'body-parser'
const PORT  = process.env.PORT || 8000;
const app = express();
/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API
app.post('/authen', req.authenticate)
app.post('/login', req.login)
app.post('/register',req.register)
app.get('/logout', req.logout)

//404 Handler
app.use((req,res) => {
  res.status(400).send('the page is not found')
});
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });
