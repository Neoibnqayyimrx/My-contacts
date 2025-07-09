import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const ContactForm = ({ refreshContacts, existingContact = {}, updateCallback}) => {
  const [firstName, setFirstName] = useState(existingContact.firstName || "");
  const [lastName, setLastName] = useState(existingContact.lastName || "");
  const [email, setEmail] = useState(existingContact.email || "");
  const [status, setStatus] = useState(null); // success | error | null

  const updating = Object.entries(existingContact).length !== 0

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = { firstName, lastName, email };
    const url = "http://127.0.0.1:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")

    try {
      const response = await fetch(url, {
        method: updating ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const resData = await response.json();
        setStatus({ type: "error", message: resData.message });
      } else {
        setStatus({ type: "success", message: "Contact created!" });
        refreshContacts();
        setFirstName("");
        setLastName("");
        setEmail("");
        updateCallback();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error!" });
    }

    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <form onSubmit={onSubmit}>
      {status && (
        <div className={`toast ${status.type}`}>
          {status.type === "success" ? <CheckCircle size={18} /> : <XCircle size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      {/* Input Fields */}
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
  );
};

export default ContactForm;
