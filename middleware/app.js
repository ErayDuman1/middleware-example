require("dotenv/config");
const express = require('express');
const bodyParser = require("body-parser");

const PORT=process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

const middleware = function (req, res, next) {
  if (req.method === 'POST') {
    console.log("Post iseği için istek gönderildi.")
}
  else
  {
    console.log("Yeni bir istek geldi.")
  }
return next();
}

app.use(middleware)

app.post('/hello', (req, res) => {
  res.send("Merhaba, POST isteği attınız.")
})


app.get('/hello', (req, res) => {
    res.send('Merhaba, GET isteği attınız')
  })

  app.put('/hello', (req, res) => {
    res.send('Merhaba, PUT isteği attınız')
  })

  app.delete('/hello', (req, res) => {
    res.send('Merhaba, DELETE isteği attınız')
  })

app.listen(PORT, () =>{
  console.log("http://localhost:"+PORT);
});