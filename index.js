const express = require('express')
const mongoose = require('mongoose')
const app = express();

const userRoutes = require("./Routes/urlRoute");

const db_shortUrl = 'mongodb://localhost:27017/ShortUrl'
mongoose
  .connect(db_shortUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  });


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes);


app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})