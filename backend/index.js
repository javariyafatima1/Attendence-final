const express = require ('express')
const app = express()
const cors = require('cors');
const Auth = require('./routes/auth.js')
const PORT = 1000;
require("./conne/db.js")
app.use(cors());
app.use(express.json());
app.use('/api',Auth);
app.listen(PORT, () => {
  console.log(`Example app listening on port: `)
})
