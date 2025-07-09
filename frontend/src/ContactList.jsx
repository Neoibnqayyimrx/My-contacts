import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
      };

      const response = await fetch(
        `http://127.0.0.1:5000/delete_contact/${id}`,
        options
      );

      if (response.status === 200) {
        updateCallback();
      } else {
        console.error("Failed to delete contact");
      }
    } catch (error) {
      alert("An error occurred while deleting: " + error.message);
    }
  };

  return (
    <div className="table-container">
      <h2>My Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => updateContact(contact)}>
                  <Pencil size={16} style={{ marginRight: "5px" }} />
                  Update
                </button>
                <button onClick={() => onDelete(contact.id)}>
                  <Trash2 size={16} style={{ marginRight: "5px" }} />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
