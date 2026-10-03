const express = require("express");
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  let sitename = "Nike";
  let sitesearch = "Search now";
  let arr = [1, 44, 14, 12];
  res.render("index.ejs",  {sitename: sitename, sitesearch: sitesearch, arr});
});

app.get("/blog/:slug", (req, res) => {
  let blogtitle = "Nike hi kyu?";
  let blogcontent = "bas aise hi";
  res.render("blogpost", {blogtitle: blogtitle, blogcontent: blogcontent});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
