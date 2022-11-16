import React from "react";
import { Button } from "react-bootstrap";

const EditUser = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a userName..."
          name="userName"
          value={editFormData.userName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Phone number..."
          name="Phone"
          value={editFormData.Phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Description..."
          name="Description"
          value={editFormData.Description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <Button type="submit">Save</Button>
        <Button onClick={handleCancelClick} variant="secondary">
          Cancel
        </Button>
      </td>
    </tr>
  );
};

export default EditUser;
