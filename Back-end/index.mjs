import express from 'express'

const PORT = 3000;

const app = express();

app.get('/',(req, res)=>{
  res.json({message: 'heloo'})
})

app.listen(PORT,()=>{
  console.log(`port in running on localhost:${PORT}`)
})