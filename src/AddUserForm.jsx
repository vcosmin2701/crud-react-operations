import { useState } from "react";

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '', playlistName: ''}
    const [user, setUser] = useState(initialFormState)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target
  
      setUser({ ...user, [name]: value })
    }
  
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (!user.name || !user.username) return
  
          props.addUser(user)
          setUser(initialFormState)
        }}
      >
        <div className="label-content">
            <label>Name</label>
            <input
              className="move-input1"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
            <br />
            <label>Username</label>
            <input
              className="move-input2"
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
            <br />
            <label>Playlist name</label>
            <input
              className="move-input3"
              type="text"
              name="playlistName"
              value={user.playlistName}
              onChange={handleInputChange}
            />
            <br />
            <button class="center-button">Add new user</button>
        </div>
      </form>
    )
}
  
export default AddUserForm