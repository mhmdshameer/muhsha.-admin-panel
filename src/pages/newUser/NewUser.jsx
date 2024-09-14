import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" value="john" />
        </div>
        <div className="newUserItem">
            <label>Fullname</label>
            <input type="text" value="John Donn" />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" value="john@gmail.com" />
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="text" value="+91 8796547365" />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" value="New York | USA" />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="female">Female</label>
         </div>
       </div>
       <div className="newUserItem">
            <label>Active</label>
            <select type="text" value="New York | USA" >
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
      </form>
        <button className="newUserButton">Create</button>
    </div>
  )
}
