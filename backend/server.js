require("dotenv").config({ path: ".env" });
var app = require("./app");
const port=process.env.PORT ||8000;

app.listen(port,() =>{
  console.log(`listen on port ${port}`);
});
