const express = require("express");
const app = express();
const port = 3355;

app.use(express.static("build"));

app.listen(port, () => {
  console.log(`Starting server at http://127.0.0.1:${port}`);
});
