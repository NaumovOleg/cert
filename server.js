const express = require("express");

const app = express();
app.get('/get', (req, res) => {
  res.json({
    message: 'Ok',
    url: '/get'
  })
});

app.post('/post', (req, res) => {
  const data = req.body;
  res.json({
    method: 'post',
    url: '/post',
    data
  })
})

app.get('/*', (req, res) => {
  res.json({
    method: 'get',
    message: 'Ok',
    url: '/*'
  })
});

const port = process.env.PORT || 5000;



app.listen(port, () => `Server running on port ${port} 🔥`);
