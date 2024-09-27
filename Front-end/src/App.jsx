import { useState, useEffect } from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const API_URL = 'http://localhost:3000/users';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

   const fetchUser = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data);
  };

  const addUser = async () => {
    const trimmedUser = newUser.trim();

    if (!trimmedUser) {
      alert('Task cannot be empty or just whitespace');
      return;
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: trimmedUser }),
    });
    const createdUser = await response.json();
    setUsers([...users, createdUser]);
    setNewUser(''); 
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold text-green-400 mb-8">User Management App</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex mb-4">
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)} 
            placeholder="Add User"
            className="w-full px-3 py-1 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className='ml-3 w-1/2'>
            <button
              onClick={addUser}
              className="bg-green-400 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </div>

        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
              {editUser?.id === user.id ? (
                <input
                  type="text"
                  value={editUser.task}
                  // onChange={(e) => setEditUser({ ...editUser, task: e.target.value })}
                  className="w-full px-2 py-1 border rounded-md"
                />
              ) : (
                <span className="text-gray-700">{user.task}</span>
              )}

              <div className="flex items-center space-x-2">
                {editUser?.id === user.id ? (
                  <button
                    // onClick={updateUser}
                    className="bg-green-500 text-white ml-3 px-2 py-1 rounded-md hover:bg-green-600"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    // onClick={() => setEditUser(user)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    <MdOutlineEdit />
                  </button>
                )}

                <button
                  // onClick={() => deleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  <RiDeleteBinLine />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
