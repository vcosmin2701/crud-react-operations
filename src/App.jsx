import { useState } from 'react'
import './App.css'
import UserTable from './UserTable'
import EditUserForm from './EditUserForm'
import AddUserForm from './AddUserForm'

function App() {

  const usersData = [
    { id: 1, name: 'Manu', username: 'manuWeb24', playlistName: 'the party never ends'},
    { id: 2, name: 'Cosmin', username: 'cosmo27', playlistName: 'For Those That Wish To Exist' },
    { id: 3, name: 'Mili', username: 'mili17', playlistName: 'country roads'},
  ]

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false); 
  const initialFormState = {id: null, name: '', username: '', playlistName: ''};
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id: user.id, name: user.name, username: user.username, playlistName: user.playlistName});
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  }

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  return(
    <div className="container">
      <h1>🎵Playlistable🎵</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user 🔣</h2>
              <EditUserForm 
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ):(
            <div>
              <h2>📝Add user and a playlist name📝</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users and their playlists🥳</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>

    </div>
  )
}

export default App
