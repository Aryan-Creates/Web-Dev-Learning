const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/blog", (req, res) => {
  res.send("Blog Page");
});

app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  res.send(`hello ${req.params.slug}`);
});

// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Intro to JS Page')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Intro to Python Page')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
