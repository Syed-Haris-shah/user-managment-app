import express from 'express'
import cors from 'cors';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.get('/users',(req, res)=>{
  res.json(users);
})

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), task: req.body.task };
  users.push(newUser);
  res.json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const User = users.find(t => t.id == id);
  if (User) {
    User.task = task;
    res.json(User);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(PORT,()=>{
  console.log(`port in running on localhost:${PORT}`)
})