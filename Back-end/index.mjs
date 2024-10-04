// // import express from 'express'
// // import cors from 'cors';

// // const PORT = 3000;

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // let users = [];

// // app.get('/users',(req, res)=>{
// //   res.json(users);
// // })

// // app.post('/users', (req, res) => {
// //   const newUser = { id: Date.now(), task: req.body.task };
// //   users.push(newUser);
// //   res.json(newUser);
// // });

// // app.put('/users/:id', (req, res) => {
// //   const { id } = req.params;
// //   const { task } = req.body;
// //   const User = users.find(t => t.id == id);
// //   if (User) {
// //     User.task = task;
// //     res.json(User);
// //   } else {
// //     res.status(404).json({ error: 'User not found' });
// //   }
// // });

// // app.delete('/users/:id', (req, res) => {
// //   const { id } = req.params;
// //   users = users.filter(t => t.id != id);
// //   res.json({ message: 'user deleted' });
// // });



// // app.listen(PORT,()=>{
// //   console.log(`port in running on localhost:${PORT}`)
// // })


// import express from 'express';
// import cors from 'cors';

// const PORT = 3000;
// const app = express();
// app.use(cors());
// app.use(express.json());

// let users = []; // Changed 'const' to 'let' to allow reassignment

// app.get('/users', (req, res) => {
//   res.json(users);
// });

// app.post('/users', (req, res) => {
//   const newUser = { id: Date.now(), task: req.body.task };
//   users.push(newUser);
//   res.json(newUser);
// });

// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;
//   const user = users.find((u) => u.id == id);
//   if (user) {
//     user.task = task;
//     res.json(user);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   users = users.filter((u) => u.id != id); // Now we can reassign 'users'
//   res.json({ message: 'User deleted' });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name, email: req.body.email };
  users.push(newUser);
  res.json(newUser);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find((u) => u.id == id);
  if (user) {
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((u) => u.id != id);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
