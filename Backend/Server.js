import express from 'express';

// rest objects
const app = express();

// rest api
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// Port
const PORT = 8080;

// Run listen
app.listen(PORT ,() =>{
    console.log(`server listening on ${PORT}`);
});