const express = require("express");
const app = express();
const baseQuery = `/api/`;

app.use(express.json());

app.get(baseQuery, (req, res) => {
  res.json({
    success: true,
  });
});
app.use(baseQuery + "flavors", require("./index.js"));

app.listen(8080, () => {
  console.log("App is running at port 8080");
});
