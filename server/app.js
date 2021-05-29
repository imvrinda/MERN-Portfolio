const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://mern:MERN2169@cluster0.mwbxt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(DB).then(() =>{
  useNewUrlParser=true,
  useCreateIndex= true,
  useUnifiedTopology= true,
  useFindAndModify=false
  console.log(`connection success`);
}).catch((err) =>console.log(`no connection`));
//Middleware
const middleware=(req,res, next) =>{
  console.log(`hello from middleware`);
  next();
  
}

//middleware();

app.get('/',(req, res)=>{
    res.send(`Hello World`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`About + Hello World`);
});

app.get("/contact", (req, res) => {
  res.send(`Contact + Hello World`);
});

app.get("/singin", (req, res) => {
  res.send(`Sign In + Hello World`);
});

app.get("/signup", (req, res) => {
  res.send(`Sign Up + Hello World`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);

// app.listen(3000,()=>{
//     console.log(`server is running on port 3000`);
// })