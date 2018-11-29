import express from 'express'
import bodyParser from 'body-parser'
import  * as db from './db/index'
const PORT  = 3000
const app = express()
// Parse coming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API
app.get('/', db.authenticate)

app.post('/api/add', (req,res) => {
  if(!req.body.title) {
    return res.status(400).send({
      sucess: 'false',
      message: 'title is required'
    });
  }
  fs.readFile('./db/test.json', (err,data) => {
    if (err) throw err;
    obj = JSON.parse(data);
    change = {
      id:  Object.keys(obj).length +1,
      title:  req.body.title,
      description: req.body.description
    }
    obj.push(change);
  fs.writeFile('./db/test.json',JSON.stringify(obj), (err) => {
    if (err) throw err;
    console.log('Data written to file');
    });
  });
  return res.send({
    sucess: 'true',
    message: 'add sucessfully',
    change
  });
});

//404 Handler
app.use(function(req, res, next){
  res.status(404).end('the page is not found')
});
app.listen(PORT, () => { console.log(`server running on port ${PORT}`) });
