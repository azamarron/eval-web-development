import React from "react";
import { Button, Modal } from "react-bootstrap";
import DeleteUserModal from "./DeleteUserModal";

const ReadRow = ({ user, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.userName}</td>
      <td>{user.Phone}</td>
      <td>{user.email}</td>
      <td>{user.Description}</td>
      <td>
        <Button
          onClick={(event) => handleEditClick(event, user)}
          variant="warning"
        >
          Edit
        </Button>
        <Button onClick={() => handleDeleteClick(user.id)} variant="danger">
          Delete
        </Button>
        {/* <Button
          color="danger"
          onClick={(event) => DeleteUserModal(event, handleDeleteClick, user)}
        >
          Delete
        </Button> */}
      </td>
    </tr>
  );
};

export default ReadRow;
