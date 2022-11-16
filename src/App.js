import React, { useState, Fragment } from "react";
import ReadRow from "./components/users/ReadRow";
import EditUser from "./components/users/EditUser";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "Arturo",
      Phone: "4423366447",
      email: "arturo.zamarron@deloitte.com",
      Description: "Deloitte Trainee",
    },
  ]);
  const [addFormData, setAddFormData] = useState({
    userName: "",
    Phone: "",
    email: "",
    Description: "",
  });

  const [editFormData, setEditFormData] = useState({
    userName: "",
    Phone: "",
    email: "",
    Description: "",
  });

  const [editUserId, setEdituserId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: users.length + 1,
      userName: addFormData.userName,
      Phone: addFormData.Phone,
      email: addFormData.email,
      Description: addFormData.Description,
    };

    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      userName: editFormData.userName,
      Phone: editFormData.Phone,
      email: editFormData.email,
      Description: editFormData.Description,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => users.id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEdituserId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEdituserId(user.id);

    const formValues = {
      userName: user.userName,
      Phone: user.Phone,
      email: user.email,
      Description: user.Description,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEdituserId(null);
  };

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Fragment>
                {editUserId === user.id ? (
                  <EditUser
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadRow
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a user</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="userName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Phone"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Description"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <Button classes="" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
};

export default App;
